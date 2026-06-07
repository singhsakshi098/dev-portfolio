export const personalInfo = {
  name: 'Sakshi Singh',
  title: 'Web Developer',
  tagline: 'Building Efficient, User-Focused Web Solutions with Creative Design',
  description:
    'A passionate Web Developer applying hands-on knowledge of front-end technologies to build efficient, user-focused web solutions — committed to continuous learning and technical excellence.',
  email: 'sakshisingh7384@gmail.com',
  location: 'Ghaziabad, India',
  resumeUrl: '#',
  paper: 'https://ieeexplore.ieee.org/document/11506696',
  social: {
    github: 'https://github.com/singhsakshi098',
    linkedin: 'https://www.linkedin.com/in/sakshi-singh-492b9a343',
  },
  about: {
    paragraphs: [
      "I'm Sakshi Singh — a Web Developer with a strong foundation in front-end technologies and a growing expertise in back-end development. I thrive at the intersection of design and technology, where clean code meets beautiful, user-centric interfaces.",
      "My journey in tech is driven by curiosity and disciplined work. From building responsive UIs with React and Tailwind CSS to implementing secure authentication with Firebase and managing state with Redux, I approach every project as an opportunity to grow and deliver real impact.",
      "I believe great software isn't just about functionality — it's about crafting experiences that feel intuitive, look stunning, and perform flawlessly. Whether it's engineering an AI-powered movie recommender or a modular food delivery platform, I bring the same level of dedication, creative design, and attention to detail.",
    ],
    highlights: [
      { label: 'Projects Built', value: '5+' },
      { label: 'Technologies', value: '12+' },
      { label: 'Internship', value: 'IBM' },
      { label: 'Languages', value: '4+' },
    ],
  },
};

export const skills = {
  frontend: [
    { name: 'HTML5', icon: 'SiHtml5', color: '#E34F26' },
    { name: 'CSS3', icon: 'SiCss', color: '#1572B6' },
    { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
    { name: 'React.js', icon: 'SiReact', color: '#61DAFB' },
    { name: 'Redux', icon: 'SiRedux', color: '#764ABC' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
  ],
  backend: [
    { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
    { name: 'Express.js', icon: 'SiExpress', color: '#ffffff' },
    { name: 'Firebase', icon: 'SiFirebase', color: '#FFCA28' },
    { name: 'REST APIs', icon: 'SiPostman', color: '#FF6C37' },
  ],
  databases: [
    { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
    { name: 'Firebase', icon: 'SiFirebase', color: '#FFCA28' },
  ],
  languages: [
    { name: 'Java', icon: 'SiJavascript', color: '#ED8B00' },
    { name: 'Python', icon: 'SiPython', color: '#3776AB' },
    { name: 'C', icon: 'SiCodeblocks', color: '#A8B9CC' },
    { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
  ],
  tools: [
    { name: 'Git', icon: 'SiGit', color: '#F05032' },
    { name: 'GitHub', icon: 'SiGit', color: '#ffffff' },
    { name: 'VS Code', icon: 'SiCodeblocks', color: '#007ACC' },
    { name: 'Netlify', icon: 'SiVercel', color: '#00C7B7' },
    { name: 'Vercel', icon: 'SiVercel', color: '#ffffff' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Netflix GPT — AI Movie Recommender',
    description:
      'A responsive, multi-language streaming platform featuring an intelligent GPT-powered search that lets users find movies using natural language queries.',
    longDescription: 'Engineered a responsive, multi-language streaming platform with GPT-powered natural language search. Implemented secure user authentication via Firebase and scalable state management with Redux to handle user data efficiently across the site. Built the frontend with React and Tailwind CSS for a sleek Netflix-inspired UI.',
    image: null,
    tags: ['React', 'Tailwind CSS', 'Firebase', 'Redux', 'GPT API'],
    github: 'https://github.com/singhsakshi098/netflix-gpt',
    live: 'https://netflix-gpt-pied-gamma.vercel.app/',
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Food Delivery App',
    description:
      'A modular and maintainable food delivery platform with client-side routing, cart management with Redux Toolkit, and reusable restaurant, menu, and cart components.',
    longDescription: 'Built a highly structured and scalable food delivery application using React with reusable components. Features client-side routing for seamless navigation, cart management with Redux Toolkit, and comprehensive state handling. Ensured code quality through test-driven development strategies and optimized performance throughout.',
    image: null,
    tags: ['React', 'Redux Toolkit', 'JavaScript', 'CSS'],
    github: 'https://github.com/singhsakshi098',
    live: null,
    featured: true,
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Secure Password Generator',
    description:
      'A responsive web-based password generator for creating strong, customizable passwords with options for length, character types, and real-time strength analysis.',
    longDescription: 'Built a responsive password generator using HTML, CSS, and JavaScript. Features customizable character sets (uppercase, lowercase, numbers, symbols), adjustable password length, copy-to-clipboard functionality, and a clean UI focused on security best practices.',
    image: null,
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/singhsakshi098/password-generator',
    live: 'https://password-generator-fpn5.vercel.app/',
    featured: true,
    category: 'Frontend',
  },
];

export const experience = [
  {
    id: 1,
    type: 'internship',
    title: 'Front End Web Development Intern',
    organization: 'IBM SkillsBuild (CSRBOX)',
    duration: 'Jul 2025 — Aug 2025',
    description:
      'Completed IBM SkillsBuild Project Based Learning Program focused on Front End Web Development. Built beginner-to-intermediate level web projects using HTML, CSS, and JavaScript. Strengthened fundamentals of responsive design, UI development, and best coding practices.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'IBM'],
  },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Research', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];
