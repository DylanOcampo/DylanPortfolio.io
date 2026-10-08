import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiIonic,
  SiFlutter,
  SiNodedotjs,
  SiSupabase,
  SiMysql,
  SiFirebase,
  SiGooglecloud,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiGithubcopilot,
  SiClaudecode,
  SiUnity,
  SiWebgl,
  SiAframe,
  SiBlender,
  SiUnrealengine,
  SiAutodeskmaya,
} from 'react-icons/si';
import { TbBrandCSharp, TbSql, TbApi, TbWebhook, TbShieldLock, TbNetwork, TbDatabase, TbAugmentedReality } from 'react-icons/tb';

import recsamLogo from '../assets/Work/recsamLogo.png';
import recsam from '../assets/Work/Recsam.png';

import AxeLogo from '../assets/Work/AxeLogo.png';
import BarriosLatinos from '../assets/Work/logoBarrios.png';
import Funkos from '../assets/Work/funko.jpg';
import FunkoLogo from '../assets/Work/3D logo.png';
import Yucatani6 from '../assets/Work/Yucatani6.jpg';
import Yucatani6Logo from '../assets/Work/Yucatani6Logo.png';
import VicenteLogo from '../assets/Work/VF-Logo-Intro.png';
import Vicente from '../assets/Work/VicenteFernandez.jpg';
import ScapeImage from '../assets/Work/Scape.gif';
import ScapeLogo from '../assets/Work/ScapeLogo.png';
import MovieLogo from '../assets/Work/MovieLogo.svg';
import Moviegif from '../assets/Work/MovieV.gif';
import BeyondTheFederationGif from '../assets/Work/BeyondTheFederation.gif';
import BeyondTheFederationLogo from '../assets/Work/BeyondLogo.gif';

export const profile = {
  name: 'Dylan Ocampo',
  role: 'Software Engineer, Web / Full Stack · Gaming',
  rotatingRoles: ['Full-Stack Developer', 'Tech Lead', 'Unity / Real-Time 3D Developer'],
  summary:
    'Full-stack software engineer with 4 years in the gaming and interactive industry, building player-facing web applications, APIs, and real-time systems end-to-end. Hands-on with React, TypeScript, Node.js, SQL/NoSQL databases, and CI/CD. M.Sc. in Software Engineering with a digital animation background, used to working closely with design, art, and product teams and to owning ambiguous features from breakdown to production.',
  location: '',
  email: 'dylan.ocampo.garza@gmail.com',
  phone: '+52 833 102 1023',
  links: {
    linkedin: 'https://www.linkedin.com/in/dylan-ocampo-1849b3240/',
    github: 'https://github.com/DylanOcampo',
    artstation: 'https://www.artstation.com/dylan-ocampo',
    // Served straight from /public — replace public/Dylan_Ocampo_CV.pdf to update it.
    cv: `${process.env.PUBLIC_URL}/Dylan_Ocampo_CV.pdf`,
  },
};

export const achievements = [
  {
    stat: '3M+',
    label: 'visitors on BarriosLatinos',
    detail: 'Mobile-first community platform for Latin American Call of Duty: Mobile players.',
  },
  {
    stat: '50,000+',
    label: 'concurrent players',
    detail: 'Real-time/multiplayer backend for AXESS by AXE (Unilever), a live branded game.',
  },
  {
    stat: '200,000+',
    label: 'registrations',
    detail: 'Across BarriosLatinos and 400,000+ registered accounts on AXESS by AXE.',
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'Python', Icon: SiPython },
      { name: 'C#', Icon: TbBrandCSharp },
      { name: 'SQL', Icon: TbSql },
    ],
  },
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React', Icon: SiReact },
      { name: 'Vue', Icon: SiVuedotjs },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'Three.js', Icon: SiThreedotjs },
      { name: 'Ionic', Icon: SiIonic },
      { name: 'Flutter', Icon: SiFlutter },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'REST / HTTP APIs', Icon: TbApi },
      { name: 'Webhooks', Icon: TbWebhook },
      { name: 'OAuth', Icon: TbShieldLock },
      { name: 'Real-time networking', Icon: TbNetwork },
    ],
  },
  {
    title: 'Data & Cloud',
    skills: [
      { name: 'MySQL', Icon: SiMysql },
      { name: 'Firebase', Icon: SiFirebase },
      { name: 'Supabase', Icon: SiSupabase },
      { name: 'SQL & NoSQL', Icon: TbDatabase },
      { name: 'Google Cloud', Icon: SiGooglecloud },
      { name: 'Docker', Icon: SiDocker },
      { name: 'GitHub Actions / CI-CD', Icon: SiGithubactions },
      { name: 'Git', Icon: SiGit },
    ],
  },
  {
    title: 'AI-Assisted Development',
    skills: [
      { name: 'GitHub Copilot', Icon: SiGithubcopilot },
      { name: 'Claude Code', Icon: SiClaudecode },
    ],
  },
  {
    title: 'Games & Real-Time 3D',
    skills: [
      { name: 'Unity', Icon: SiUnity },
      { name: 'WebGL', Icon: SiWebgl },
      { name: 'A-Frame', Icon: SiAframe },
      { name: 'AR', Icon: TbAugmentedReality },
    ],
  },
];

// Creative/3D background tools — kept separate from the core stack above since
// they're not part of the CV's technical skills list, but still relevant given
// the digital animation degree and art pipeline experience.
export const creativeTools = [
  { name: 'Blender', Icon: SiBlender },
  { name: 'Maya', Icon: SiAutodeskmaya },
  { name: 'Unreal Engine', Icon: SiUnrealengine },
];

export const experience = [
  {
    role: 'Tech Lead',
    company: 'Cool Nerdy People',
    period: 'Oct 2025 – Present',
    current: true,
    bullets: [
      'Lead hands-on, end-to-end development of BarriosLatinos (3M+ visitors) and other web, mobile, AR, and game products: frontend, backend, database design, infrastructure, and deployment.',
      'Run code reviews for the team and use GitHub Copilot and Claude Code daily, holding AI-generated code to the same architecture and reliability standards.',
      'Architect and manage cloud infrastructure and CI/CD pipelines for reliable, high-availability production services.',
    ],
  },
  {
    role: 'Fullstack / Unity Developer',
    company: 'RCK Games',
    period: 'Nov 2022 – Oct 2025',
    bullets: [
      'Led real-time/multiplayer development for AXESS by AXE, architecting the networking layer behind 50,000+ concurrent players across 400,000+ registered accounts.',
      'Built player-facing games, web, and real-time 3D experiences with React, Three.js, Unity (C#), and Flutter.',
      'Bridged engineering, design, and art as technical artist, owning UI/UX, 3D scene composition, and asset handoff.',
      'Designed software architecture and built reusable internal tools and services that streamlined production.',
      'Administered SQL and NoSQL databases for production services.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Zero Copy Labs (Contract, U.S.)',
    period: 'Nov 2024 – Jul 2025',
    bullets: [
      'Worked in English with U.S.-based clients and teammates.',
      'Designed SaaS platform architecture; built and maintained web apps with React, Vue, and Node.js.',
      'Implemented APIs and webhooks for workflow automation; ran database migrations and optimizations.',
      'Built AI-powered workflows for automatic data processing, and hybrid mobile apps with Ionic.',
    ],
  },
];

export const education = [
  {
    degree: 'M.Sc. in Software Engineering & Computer Systems',
    school: 'UNIR, Spain',
    period: '2024 – 2025',
  },
  {
    degree: 'B.Eng. in Digital Animation',
    school: 'Universidad Anáhuac Mayab',
    period: '2019 – 2023',
  },
];

export const languagesAndCerts = {
  languages: ['English (professional working proficiency)', 'Spanish (native)'],
  certifications: ['Web App Development & UX', 'Python Programming', 'Soft Skills & Management Skills'],
};

// Headline, professional work. BarriosLatinos has no media yet —
// drop your screenshots/video into src/assets/Work/ and fill the fields below.
export const featuredProjects = [
  {
    key: 'barrioslatinos',
    title: 'BarriosLatinos',
    subtitle: 'Mobile-first community platform · Tech Lead, Cool Nerdy People',
    description:
      'Designed and built a mobile-first community platform for Latin American Call of Duty: Mobile players, end-to-end: frontend, backend, database design, infrastructure and deployment. Reached 3M+ visitors and 200,000+ registrations.',
    stats: ['3M+ visitors', '200,000+ registrations'],
    // TODO: add a hosted screenshot/logo here, e.g. `import BarriosLogo from '../assets/Work/BarriosLogo.png'`.
    image: BarriosLatinos,

    youtubeId: 'uQVSSovVAIw',
    links: {

      site: 'https://coolnerdypipoltech.github.io/codmFrontend/',
      repo: '',
    },
  },
  {
    key: 'axess',
    title: 'AXESS by AXE',
    subtitle: 'Real-time multiplayer game for Unilever · RCK Games',
    description:
      'Led real-time/multiplayer backend development for a live branded game built in Unity, supporting 50,000+ concurrent players and 400,000+ registered accounts. Programmed game mechanics, menus and levels, and implemented multiplayer with Photon.',
    stats: ['50,000+ concurrent players', '400,000+ registered accounts'],
    image: AxeLogo,
    youtubeId: 'KgK0GhQ5yWA',
    links: {
      site: 'https://play.google.com/store/apps/details?id=com.rckgames.axess&hl=es_SV&pli=1',
      repo: '',
    },
  },
];

// Earlier/creative projects — kept as a compact secondary section.
export const moreProjects = [
  {
    key: 'recsam',
    title: 'ReCSaM',
    description:
      'A mobile app that turns voice into structured clinical summaries for psychologists, psychiatrists, criminologists and social workers — fast, quantifiable patient records that meet diagnostic and legal requirements.',
    logo: recsamLogo,
    // TODO: add a screenshot or app icon for ReCSaM, e.g. `import RecsamImage from '../assets/Work/Recsam.png'`.
    image: recsam,
    link: 'https://play.google.com/store/apps/details?id=com.clijutey.recsam&hl=es',
  },
  {
    key: 'yucatani6',
    title: 'Yucatan i6',
    description:
      'Server connections, UI, and custom production tools for a Unity mobile game, developed at RCK Games.',
    logo: Yucatani6Logo,
    image: Yucatani6,
    link: null,
  },
  {
    key: 'vicentefernandez',
    title: 'Vicente Fernandez AR',
    description:
      'AR web experience built on the 8th Wall platform, with a 3D scenario programmed in JavaScript, HTML and A-Frame.',
    logo: VicenteLogo,
    image: Vicente,
    link: 'https://www.instagram.com/reel/C0xbVMyrlHO/?utm_source=ig_web_copy_link&stkn=NTc4MTIwNjQ2YQ==',
  },
  {
    key: 'scape',
    title: 'Scape',
    description:
      'A card game modification of "Escape", in active development since winter 2023, built in Unity with plans for multiplayer, VFX and a user system.',
    logo: ScapeLogo,
    image: ScapeImage,
    link: 'https://dylanocampo.github.io/Scape.io/',
    repo: 'https://github.com/DylanOcampo/Scape',
  },
  {
    key: 'beyondthefederation',
    title: 'Beyond The Federation',
    description:
      'University capstone project: a Paper Mario-inspired vertical slice blending platforming and detective mechanics. Lead Programmer over a 6-month production.',
    logo: BeyondTheFederationLogo,
    image: BeyondTheFederationGif,
    link: 'https://www.canva.com/design/DAF1zcxLcwI/_0AZ_i4GmG2gHTs0JA-N3g/view?utm_content=DAF1zcxLcwI&utm_campaign=designshare&utm_medium=link&utm_source=editor#1',
    repo: 'https://github.com/DylanOcampo/Beyond-The-Federation',
  },
  {
    key: 'moviedatabase',
    title: 'Movie Database',
    description:
      'A Netflix-style browsing app built with React and the TMDB API, developed at the start of the M.Sc. program.',
    logo: MovieLogo,
    image: Moviegif,
    link: 'https://netflix-kappa-pink.vercel.app/',
    repo: 'https://github.com/DylanOcampo/netflix',
  },
  {
    key: 'freelance3d',
    title: '3D Freelance',
    description:
      'Freelance Funko-style figure design since 2021: client-directed 3D models, modified and optimized for correct 3D printing.',
    logo: FunkoLogo,
    image: Funkos,
    link: 'https://www.artstation.com/dylan-ocampo',
  },
];
