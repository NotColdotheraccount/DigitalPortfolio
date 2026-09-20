// ============================================================
// SITE CONTENT — everything on the Home page that isn't a project.
// Edit text here; components read from this file.
// ============================================================

// Prefix for files in /public so they work on any GitHub Pages URL.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const site = {
  name: { first: 'Aqeef', last: 'Danish' },
  tagline: 'Engineering at the intersection of hardware and software.',
  subline: 'ECE graduate · Incoming NTU EEE · Embedded systems, IoT & web.',

  bio: "I'm Aqeef, an Electronic & Computer Engineering graduate from Nanyang Polytechnic, heading to NTU to study Electrical & Electronic Engineering. I love building things where hardware meets software — from IoT systems and microcontrollers to interactive web experiences. I'm a team player, an open-minded learner, and happiest when solving real problems with technology.",

  portrait: asset('images/portrait.jpg'),
  email: 'itsaqeefdanish@gmail.com',
  resume: asset('resume.pdf'),

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aqeef-danish-33b811205' },
    { label: 'Instagram', href: 'https://www.instagram.com/aqeef_danish/' },
  ],
}

// "U1 · LANGUAGES" etc. — the silkscreen labels on the stack cards
export const stack = [
  {
    id: 'U1',
    title: 'Languages',
    items: ['Python', 'C', 'C++', 'C#', 'Dart', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'U2',
    title: 'Hardware & IoT',
    items: ['Arduino Uno', 'BeagleBone', 'M5Stack Fire', 'MicroPython', 'Firmata', 'PIR sensor', 'IR sensor'],
  },
  {
    id: 'U3',
    title: 'Web & Tools',
    items: ['Flutter', 'Firebase', 'Flask', 'Socket.IO', 'React', 'Qubitro'],
  },
]

// type: 'award' shows brighter; 'participation' shows dimmer
export const awards = [
  {
    year: 2026,
    items: [{ text: 'Edusave Skills Award', type: 'award' }],
  },
  {
    year: 2024,
    items: [
      { text: 'Edusave Certificate of Academic Achievement', type: 'award' },
      { text: 'Edusave Merit Bursary', type: 'award' },
      { text: 'SUSS Analytics & Visualisation Challenge', type: 'participation' },
      { text: 'SDG Open Hack Singapore', type: 'participation' },
      { text: 'National AI Prompt Design 2024', type: 'participation' },
    ],
  },
  {
    year: 2022,
    items: [
      { text: 'EAGLES Award (Achievement, Good Leadership & Service)', type: 'award' },
      { text: 'Good Progress Award', type: 'award' },
      { text: 'Taipei International Choral Competition', type: 'participation' },
    ],
  },
  {
    year: 2021,
    items: [{ text: 'SYF Certificate of Achievement', type: 'award' }],
  },
  {
    year: 2020,
    items: [
      { text: 'Merit Edusave Bursary', type: 'award' },
      { text: 'Edusave Certificate of Academic Achievement', type: 'award' },
    ],
  },
  {
    year: 2019,
    items: [
      { text: 'Edusave Merit Bursary', type: 'award' },
      { text: 'Edusave Certificate of Academic Achievement', type: 'award' },
      { text: 'SYF Certificate of Achievement', type: 'award' },
    ],
  },
]
