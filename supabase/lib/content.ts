/**
 * Central content for Aspen HYSYS Academy.
 * Keeping it in one place keeps the pages consistent and easy to edit.
 */

export type Stat = { label: string; value: string };
export const stats: Stat[] = [
  { label: 'Students Trained', value: '1000+' },
  { label: 'Course Hours', value: '40+' },
  { label: 'Industrial Projects', value: '30+' },
  { label: 'Certificate', value: 'Included' },
  { label: 'Access', value: 'Lifetime' },
];

export type Reason = { title: string; description: string; icon: string };
export const reasons: Reason[] = [
  { title: 'Industry-Based Training', description: 'Curriculum modeled on real oil & gas and chemical plant workflows.', icon: 'Factory' },
  { title: 'Hands-On Projects', description: 'Build 30+ industrial simulation projects from scratch.', icon: 'Wrench' },
  { title: 'Lifetime Access', description: 'Watch, rewatch, and revisit every lesson forever — no expiry.', icon: 'Infinity' },
  { title: 'Verified Certificate', description: 'Earn a completion certificate recognized by employers.', icon: 'Award' },
  { title: 'Recorded Lectures', description: 'High-quality HD recordings available 24/7 on any device.', icon: 'Video' },
  { title: 'Live Sessions', description: 'Weekly live doubt-clearing and mentorship sessions.', icon: 'Radio' },
  { title: 'Interview Preparation', description: 'Mock interviews and common HYSYS questions answered.', icon: 'MessageSquare' },
  { title: 'Resume Guidance', description: 'Professional resume reviews tailored to process engineering roles.', icon: 'FileText' },
  { title: 'Community Support', description: 'Join a private community of engineers and alumni.', icon: 'Users' },
];

export type Project = { title: string; description: string; icon: string; tag: string };
export const projects: Project[] = [
  { title: 'Natural Gas Processing', description: 'Simulate a complete gas treatment and dehydration plant.', icon: 'Wind', tag: 'Gas' },
  { title: 'LNG Plant', description: 'Model liquefaction cycles and cryogenic heat exchangers.', icon: 'Snowflake', tag: 'LNG' },
  { title: 'Crude Distillation', description: 'Build an atmospheric crude distillation unit simulation.', icon: 'FlaskConical', tag: 'Refinery' },
  { title: 'Heat Exchanger Design', description: 'Design and rate shell-and-tube heat exchangers.', icon: 'Flame', tag: 'Equipment' },
  { title: 'Compressor Network', description: 'Model multi-stage compression with intercooling.', icon: 'Cog', tag: 'Equipment' },
  { title: 'Reactor Simulation', description: 'Simulate plug-flow and CSTR reactors with kinetics.', icon: 'Atom', tag: 'Chemical' },
  { title: 'Gas Sweetening', description: 'Remove H2S and CO2 using amine sweetening units.', icon: 'Droplet', tag: 'Gas' },
  { title: 'Ammonia Plant', description: 'Model a steam-methane reforming ammonia synthesis loop.', icon: 'Zap', tag: 'Chemical' },
  { title: 'Steam System', description: 'Simulate steam generation, distribution and turbines.', icon: 'ThermometerSun', tag: 'Utilities' },
  { title: 'Utilities Simulation', description: 'Integrate cooling water, power and utility systems.', icon: 'Gauge', tag: 'Utilities' },
];

export type Testimonial = {
  name: string;
  role: string;
  country: string;
  rating: number;
  text: string;
};
export const testimonials: Testimonial[] = [
  {
    name: 'Ahmed Hassan',
    role: 'Process Engineer',
    country: 'UAE',
    rating: 5,
    text: 'This course completely changed my career. I went from knowing nothing about HYSYS to simulating a full LNG plant at work. The industrial projects are incredibly realistic.',
  },
  {
    name: 'Priya Sharma',
    role: 'Chemical Engineering Graduate',
    country: 'India',
    rating: 5,
    text: 'As a fresh graduate, I struggled to get interviews. After completing the masterclass and adding the projects to my resume, I landed a process engineering role within two months.',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Petroleum Engineer',
    country: 'Mexico',
    rating: 5,
    text: 'The instructor explains complex concepts in a way that just clicks. The live sessions were invaluable for clearing my doubts. Worth every penny.',
  },
  {
    name: 'Fatima Al-Zahra',
    role: 'Process Simulation Engineer',
    country: 'Saudi Arabia',
    rating: 5,
    text: 'I have taken other HYSYS courses before, but none come close to this. The depth of coverage — from property packages to refinery simulation — is outstanding.',
  },
  {
    name: 'James O\'Connor',
    role: 'Mechanical Engineer',
    country: 'Ireland',
    rating: 5,
    text: 'Coming from a mechanical background, I was worried about the chemical engineering content. The course starts from the basics and builds up perfectly. Highly recommend.',
  },
  {
    name: 'Nadia Rahman',
    role: 'Junior Process Engineer',
    country: 'Bangladesh',
    rating: 5,
    text: 'The community support is amazing. Whenever I got stuck, fellow students and the instructor helped me out within hours. The certificate helped me get promoted.',
  },
  {
    name: 'Mohammed Ali',
    role: 'Operations Engineer',
    country: 'Egypt',
    rating: 5,
    text: 'The refinery simulation module alone is worth the price. I now use HYSYS daily at my plant and my manager is impressed with the optimizations I proposed.',
  },
  {
    name: 'Sofia Petrova',
    role: 'Chemical Engineer',
    country: 'Russia',
    rating: 5,
    text: 'Lifetime access means I keep coming back to refresh concepts. The interview preparation section helped me ace my technical rounds. Thank you Aspen HYSYS Academy!',
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};
export const plans: Plan[] = [
  {
    name: 'Basic',
    price: '$149',
    period: 'one-time',
    description: 'Perfect for self-paced learners starting with Aspen HYSYS.',
    features: [
      'Full recorded course',
      'Lifetime access',
      'Basic courses',
      'Limited access to software',
      'Community access',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Intermediate',
    price: '$349',
    period: 'one-time',
    description: 'Our most popular plan — adds live classes, feedback, and intermediate courses.',
    features: [
      'Everything in Basic',
      'Live interactive classes',
      'Assignments with feedback',
      'Priority community support',
      'Natural Gas Processing course',
      'Heat Exchanger Design course',
      'Reactor Simulation course',
    ],
    cta: 'Choose Intermediate',
  },
  {
    name: 'Advanced',
    price: '$699',
    period: 'one-time',
    description: 'Complete career accelerator with mentoring, software access, and advanced courses.',
    features: [
      'Everything in Intermediate',
      '1-on-1 mentoring sessions',
      'Career guidance & coaching',
      'Interview preparation',
      'Resume review & optimization',
      'Direct instructor access',
      'Lifetime access to Aspen HYSYS software',
      'LNG Plant Simulation course',
      'Refinery Simulation course',
      'Aspen HYSYS Complete Masterclass',
    ],
    highlighted: true,
    cta: 'Go Advanced',
  },
];

export type Faq = { question: string; answer: string };
export const faqs: Faq[] = [
  {
    question: 'Do I need prior experience with Aspen HYSYS?',
    answer:
      'No prior experience is required. The course starts from the very basics — installation, the interface, and core concepts — and gradually builds up to advanced industrial simulations. Whether you are a student or a working professional, you will be able to follow along comfortably.',
  },
  {
    question: 'Will I get a certificate upon completion?',
    answer:
      'Yes. Upon completing the course and the final project, you will receive a verified certificate of completion that you can add to your LinkedIn profile and resume. The certificate is recognized by employers in the process engineering industry.',
  },
  {
    question: 'Is this course beginner friendly?',
    answer:
      'Absolutely. The curriculum is designed to take you from zero to expert. We begin with what process simulation is, why it matters, and how to install and navigate the software before moving into hands-on modeling. No prior simulation background is assumed.',
  },
  {
    question: 'Can I watch the recordings after the live sessions?',
    answer:
      'Yes. All live sessions are recorded and uploaded to the platform within 24 hours. You get lifetime access to every recording, so you can watch, rewatch, and revise at your own pace on any device, anywhere in the world.',
  },
  {
    question: 'How long do I have access to the course?',
    answer:
      'You get lifetime access with every plan. There is no expiry — once you enroll, the course materials, recordings, projects, and any future updates are yours forever. You can come back and review any topic whenever you need.',
  },
  {
    question: 'What software do I need, and is it included?',
    answer:
      'You will need Aspen HYSYS installed on your computer. The course shows you how to obtain a license — many universities provide free or discounted academic licenses. If you do not have access, we guide you through alternative options and trial versions so you can follow along with the projects.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Yes. We offer a 14-day money-back guarantee. If you are not satisfied with the course within the first 14 days, contact us for a full refund — no questions asked. We are confident in the quality of the training.',
  },
  {
    question: 'Can I get an invoice for my company?',
    answer:
      'Yes. Many of our students are sponsored by their employers. After enrollment, contact us with your company details and we will issue a professional invoice and receipt for reimbursement purposes.',
  },
];

export type CurriculumModule = {
  title: string;
  lessons: string[];
};
export const curriculum: CurriculumModule[] = [
  {
    title: 'Getting Started',
    lessons: ['Introduction', 'Installation', 'Interface'],
  },
  {
    title: 'Foundations',
    lessons: ['Property Packages', 'Components', 'Material Streams', 'Energy Streams'],
  },
  {
    title: 'Unit Operations',
    lessons: ['Heat Exchangers', 'Compressors', 'Pumps', 'Valves', 'Mixers', 'Separators'],
  },
  {
    title: 'Separation & Columns',
    lessons: ['Columns', 'Distillation', 'Absorbers'],
  },
  {
    title: 'Reactors & Utilities',
    lessons: ['Reactors', 'Utilities'],
  },
  {
    title: 'Industrial Applications',
    lessons: ['Natural Gas Processing', 'LNG', 'Refinery Simulation', 'Hydrogen Systems'],
  },
  {
    title: 'Advanced Topics',
    lessons: ['Optimization', 'Case Studies'],
  },
  {
    title: 'Capstone',
    lessons: ['Industrial Projects', 'Assignments', 'Final Project', 'Certificate'],
  },
];

export type Course = {
  title: string;
  level: string;
  duration: string;
  lessons: number;
  description: string;
  topics: string[];
  icon: string;
};
export const courses: Course[] = [
  {
    title: 'Aspen HYSYS Complete Masterclass',
    level: 'Beginner to Advanced',
    duration: '40+ hours',
    lessons: 120,
    description:
      'The flagship course. Everything from installation to advanced industrial simulation, with 30+ hands-on projects across oil & gas, LNG, refinery, and chemical processes.',
    topics: ['Property Packages', 'Distillation', 'LNG', 'Refinery', 'Optimization', 'Capstone'],
    icon: 'FlaskConical',
  },
  {
    title: 'Natural Gas Processing',
    level: 'Intermediate',
    duration: '8 hours',
    lessons: 24,
    description:
      'Model complete gas treatment plants — dehydration, sweetening, compression, and export — using real-world gas plant data.',
    topics: ['Gas Sweetening', 'Dehydration', 'Compression', 'Export'],
    icon: 'Wind',
  },
  {
    title: 'LNG Plant Simulation',
    level: 'Advanced',
    duration: '10 hours',
    lessons: 28,
    description:
      'Simulate liquefaction cycles, cryogenic exchangers, and the full LNG value chain from feed gas to LNG storage.',
    topics: ['Liquefaction', 'Cryogenics', 'Propane Cycle', 'MR Cycle'],
    icon: 'Snowflake',
  },
  {
    title: 'Refinery Simulation',
    level: 'Advanced',
    duration: '9 hours',
    lessons: 26,
    description:
      'Build a full atmospheric crude distillation unit, including the furnace, column, and side strippers, with real crude assays.',
    topics: ['Crude Distillation', 'Side Strippers', 'Crude Assays', 'Heat Integration'],
    icon: 'FlaskConical',
  },
  {
    title: 'Heat Exchanger Design',
    level: 'Intermediate',
    duration: '6 hours',
    lessons: 18,
    description:
      'Design and rate shell-and-tube heat exchangers, perform network pinch analysis, and optimize heat recovery.',
    topics: ['Shell & Tube', 'Rating', 'Pinch Analysis', 'Heat Recovery'],
    icon: 'Flame',
  },
  {
    title: 'Reactor Simulation',
    level: 'Advanced',
    duration: '7 hours',
    lessons: 20,
    description:
      'Simulate plug-flow, CSTR, and equilibrium reactors with real reaction kinetics for hydrogen, ammonia, and petrochemicals.',
    topics: ['PFR', 'CSTR', 'Kinetics', 'Hydrogen', 'Ammonia'],
    icon: 'Atom',
  },
];
