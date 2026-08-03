/*
# Aspen HYSYS Academy — Core Schema

Creates the full data layer: profiles, courses, course_media, enrollments,
reviews, coupons, payment_methods, homepage_content, site_config.
All tables have RLS. An is_admin() helper gates admin writes.
A stub is_admin() is created first so policies can reference it, then
replaced with the real implementation after profiles exists.
*/

-- =========================================================
-- Stub is_admin() so policies can reference it before profiles exists
-- =========================================================
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$ SELECT false; $$;

-- =========================================================
-- 1. profiles
-- =========================================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  country text,
  is_admin boolean NOT NULL DEFAULT false,
  email_verified_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
CREATE POLICY "profiles_select_own"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id OR public.is_admin());

DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
CREATE POLICY "profiles_insert_own"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
CREATE POLICY "profiles_update_own"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id OR public.is_admin())
  WITH CHECK (auth.uid() = id OR public.is_admin());

-- =========================================================
-- Replace is_admin() with real implementation now that profiles exists
-- =========================================================
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT is_admin FROM public.profiles WHERE id = auth.uid()),
    false
  );
$$;

-- =========================================================
-- 2. courses
-- =========================================================
CREATE TABLE IF NOT EXISTS public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  level text NOT NULL DEFAULT 'Beginner',
  duration text NOT NULL DEFAULT '10 hours',
  lessons integer NOT NULL DEFAULT 20,
  price numeric(10,2) NOT NULL DEFAULT 0,
  description text NOT NULL DEFAULT '',
  topics text[] NOT NULL DEFAULT '{}',
  icon text NOT NULL DEFAULT 'FlaskConical',
  is_published boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "courses_select_public" ON public.courses;
CREATE POLICY "courses_select_public"
  ON public.courses FOR SELECT
  TO anon, authenticated
  USING (is_published = true OR public.is_admin());

DROP POLICY IF EXISTS "courses_admin_insert" ON public.courses;
CREATE POLICY "courses_admin_insert"
  ON public.courses FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "courses_admin_update" ON public.courses;
CREATE POLICY "courses_admin_update"
  ON public.courses FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "courses_admin_delete" ON public.courses;
CREATE POLICY "courses_admin_delete"
  ON public.courses FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- =========================================================
-- 3. course_media
-- =========================================================
CREATE TABLE IF NOT EXISTS public.course_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  media_type text NOT NULL CHECK (media_type IN ('thumbnail','demo_video','demo_image','downloadable_file')),
  storage_path text NOT NULL,
  label text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.course_media ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "course_media_select_public" ON public.course_media;
CREATE POLICY "course_media_select_public"
  ON public.course_media FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "course_media_admin_insert" ON public.course_media;
CREATE POLICY "course_media_admin_insert"
  ON public.course_media FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "course_media_admin_update" ON public.course_media;
CREATE POLICY "course_media_admin_update"
  ON public.course_media FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "course_media_admin_delete" ON public.course_media;
CREATE POLICY "course_media_admin_delete"
  ON public.course_media FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- =========================================================
-- 4. enrollments
-- =========================================================
CREATE TABLE IF NOT EXISTS public.enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id uuid REFERENCES public.courses(id) ON DELETE SET NULL,
  plan_name text NOT NULL,
  amount_paid numeric(10,2) NOT NULL DEFAULT 0,
  payment_method text,
  payment_status text NOT NULL DEFAULT 'pending',
  coupon_code text,
  first_name text,
  last_name text,
  email text,
  phone text,
  country text,
  state_province text,
  city text,
  postal_code text,
  highest_qualification text,
  preferred_learning_mode text,
  additional_notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "enrollments_select_own" ON public.enrollments;
CREATE POLICY "enrollments_select_own"
  ON public.enrollments FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "enrollments_insert_own" ON public.enrollments;
CREATE POLICY "enrollments_insert_own"
  ON public.enrollments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "enrollments_update_own" ON public.enrollments;
CREATE POLICY "enrollments_update_own"
  ON public.enrollments FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id OR public.is_admin())
  WITH CHECK (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "enrollments_admin_delete" ON public.enrollments;
CREATE POLICY "enrollments_admin_delete"
  ON public.enrollments FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- =========================================================
-- 5. reviews
-- =========================================================
CREATE TABLE IF NOT EXISTS public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id uuid REFERENCES public.courses(id) ON DELETE SET NULL,
  name text NOT NULL,
  role text,
  country text,
  rating integer NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  text text NOT NULL,
  is_approved boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "reviews_select_public" ON public.reviews;
CREATE POLICY "reviews_select_public"
  ON public.reviews FOR SELECT
  TO anon, authenticated
  USING (is_approved = true OR auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "reviews_insert_own" ON public.reviews;
CREATE POLICY "reviews_insert_own"
  ON public.reviews FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "reviews_admin_update" ON public.reviews;
CREATE POLICY "reviews_admin_update"
  ON public.reviews FOR UPDATE
  TO authenticated
  USING (public.is_admin() OR auth.uid() = user_id)
  WITH CHECK (public.is_admin() OR auth.uid() = user_id);

DROP POLICY IF EXISTS "reviews_admin_delete" ON public.reviews;
CREATE POLICY "reviews_admin_delete"
  ON public.reviews FOR DELETE
  TO authenticated
  USING (public.is_admin() OR auth.uid() = user_id);

-- =========================================================
-- 6. coupons
-- =========================================================
CREATE TABLE IF NOT EXISTS public.coupons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  percent_off numeric(5,2) NOT NULL DEFAULT 0,
  active boolean NOT NULL DEFAULT true,
  expires_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "coupons_select_public" ON public.coupons;
CREATE POLICY "coupons_select_public"
  ON public.coupons FOR SELECT
  TO anon, authenticated
  USING (active = true OR public.is_admin());

DROP POLICY IF EXISTS "coupons_admin_insert" ON public.coupons;
CREATE POLICY "coupons_admin_insert"
  ON public.coupons FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "coupons_admin_update" ON public.coupons;
CREATE POLICY "coupons_admin_update"
  ON public.coupons FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "coupons_admin_delete" ON public.coupons;
CREATE POLICY "coupons_admin_delete"
  ON public.coupons FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- =========================================================
-- 7. payment_methods
-- =========================================================
CREATE TABLE IF NOT EXISTS public.payment_methods (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL DEFAULT 'paypal',
  is_active boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  config jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.payment_methods ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "payment_methods_select_public" ON public.payment_methods;
CREATE POLICY "payment_methods_select_public"
  ON public.payment_methods FOR SELECT
  TO anon, authenticated
  USING (is_active = true OR public.is_admin());

DROP POLICY IF EXISTS "payment_methods_admin_insert" ON public.payment_methods;
CREATE POLICY "payment_methods_admin_insert"
  ON public.payment_methods FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "payment_methods_admin_update" ON public.payment_methods;
CREATE POLICY "payment_methods_admin_update"
  ON public.payment_methods FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "payment_methods_admin_delete" ON public.payment_methods;
CREATE POLICY "payment_methods_admin_delete"
  ON public.payment_methods FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- =========================================================
-- 8. homepage_content
-- =========================================================
CREATE TABLE IF NOT EXISTS public.homepage_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_key text NOT NULL UNIQUE,
  content jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.homepage_content ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "homepage_content_select_public" ON public.homepage_content;
CREATE POLICY "homepage_content_select_public"
  ON public.homepage_content FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "homepage_content_admin_update" ON public.homepage_content;
CREATE POLICY "homepage_content_admin_update"
  ON public.homepage_content FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "homepage_content_admin_insert" ON public.homepage_content;
CREATE POLICY "homepage_content_admin_insert"
  ON public.homepage_content FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

-- =========================================================
-- 9. site_config
-- =========================================================
CREATE TABLE IF NOT EXISTS public.site_config (
  key text PRIMARY KEY,
  value jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.site_config ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "site_config_select_public" ON public.site_config;
CREATE POLICY "site_config_select_public"
  ON public.site_config FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "site_config_admin_update" ON public.site_config;
CREATE POLICY "site_config_admin_update"
  ON public.site_config FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "site_config_admin_insert" ON public.site_config;
CREATE POLICY "site_config_admin_insert"
  ON public.site_config FOR INSERT
  TO authenticated
  WITH CHECK (public.is_admin());

-- =========================================================
-- Storage bucket for course media (public read, admin write)
-- =========================================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('course-media', 'course-media', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "course_media_read" ON storage.objects;
CREATE POLICY "course_media_read"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'course-media');

DROP POLICY IF EXISTS "course_media_admin_write" ON storage.objects;
CREATE POLICY "course_media_admin_write"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'course-media' AND public.is_admin());

DROP POLICY IF EXISTS "course_media_admin_update_storage" ON storage.objects;
CREATE POLICY "course_media_admin_update_storage"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'course-media' AND public.is_admin())
  WITH CHECK (bucket_id = 'course-media' AND public.is_admin());

DROP POLICY IF EXISTS "course_media_admin_delete_storage" ON storage.objects;
CREATE POLICY "course_media_admin_delete_storage"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'course-media' AND public.is_admin());

-- =========================================================
-- Seed: payment method (PayPal sandbox), site_config contact
-- =========================================================
INSERT INTO public.payment_methods (name, type, is_active, sort_order, config)
VALUES ('PayPal (Sandbox)', 'paypal', true, 1, '{"sandbox": true}'::jsonb)
ON CONFLICT DO NOTHING;

INSERT INTO public.site_config (key, value)
VALUES
  ('contact', '{"phone":"+92 316 0290836","email":"engrizwanhaider@gmail.com"}'::jsonb)
ON CONFLICT (key) DO NOTHING;
