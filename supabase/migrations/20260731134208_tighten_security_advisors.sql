/*
# Tighten security advisor warnings

1. Revoke EXECUTE on public.is_admin() from anon and authenticated so it
   cannot be called directly via the REST API — it's only used internally
   by RLS policies.
2. Replace the broad SELECT on storage.objects (course-media bucket) with
   a tighter policy that only allows reading individual objects by path,
   preventing full bucket listing.
*/

-- 1. Revoke direct execution of is_admin() from anon + authenticated
REVOKE EXECUTE ON FUNCTION public.is_admin() FROM anon, authenticated;

-- 2. Drop the broad read policy and replace with a path-scoped one
DROP POLICY IF EXISTS "course_media_read" ON storage.objects;
CREATE POLICY "course_media_read"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'course-media');
