// ============================================================
// PROJECTS — one object per project.
// `category` decides which group a project appears under on Home.
// A new category name creates a new group automatically.
// Home shows a card for each; /#/projects/<slug> shows the case study.
// To add a project: copy an object, change the slug, fill it in.
//
// Lines marked TODO are placeholders from the design — replace
// them with real values before sharing the site.
// ============================================================
import { asset } from './site'

const img = (slug, file) => asset(`images/projects/${slug}/${file}`)

export const projects = [
  {
    slug: 'medibook',
    category: 'Software',
    title: 'MediBook',
    summary: 'Healthcare app that combines clinic booking, a medicine store and an AI chatbot.',
    badge: 'Mobile App',
    role: 'Duo · Mobile & API integration',
    year: '2025',
    tech: ['Flutter', 'Firebase', 'Firestore', 'Google Gemini', 'REST APIs'],

    images: {
      card: img('medibook', 'medibook_cover.png'),
      hero: img('medibook', 'medibook_cover.png'),
      gallery: [
        { src: img('medibook', 'medibook_clinic.jpeg'), alt: 'MediBook clinic finder with map search' },
        { src: img('medibook', 'medibook_medicine.jpeg'), alt: 'MediBook medicine store and checkout' },
        { src: img('medibook', 'medibook_gemini.jpeg'), alt: 'MediBook healthcare chatbot' },
        { src: img('medibook', 'medibook_homepage.jpeg'), alt: 'MediBook homepage' },
      ],
    },
    video: null,

    overview:
      'A mobile healthcare app that pulls several services into one place: booking clinic appointments, buying medicine, looking up nutrition information and asking a healthcare chatbot. Instead of juggling separate apps and websites, everything runs from one account.',
    scope: {
      text: 'Built with Flutter and Firebase, with real-time Firestore behind appointments, purchases and orders. Four external APIs do the heavy lifting: Geoapify for clinics and maps, RapidAPI for drug information and pricing, CalorieNinjas for nutrition lookups and Google Gemini for the chatbot.',
      inScope: [
        'Clinic finder with map search, region filtering and time-slot validation',
        'Medicine store with API price checks and atomic batch checkout',
        'Profiles with photo upload, nutrition lookup and an AI chatbot',
      ],
      outOfScope: ['Real payment processing', 'Clinic-side booking system', 'Prescription verification'], // TODO: confirm
    },
    myRole:
      'My partner and I built the app end to end in Flutter and wired it to Firebase, Firestore for live appointment, order and purchase data, and Firebase Storage for profile photos with cache-busting so a new picture shows up immediately. I also integrated the four external APIs and designed the onboarding and navigation.', // TODO: adjust if this was a team project
    process: [
      { title: 'Plan', note: 'Mapped the services a patient needs and what one app could realistically combine.' },
      { title: 'Data model', note: 'Set up Firestore collections for appointments, orders and profiles.' },
      { title: 'Integrate', note: 'Wired in Geoapify, RapidAPI, CalorieNinjas and Gemini.' },
      { title: 'Polish', note: 'Animated onboarding screens, responsive layouts and clear navigation.' },
    ],
    results: {
      text: 'The app runs all five services from one account, with live data throughout. The hardest part was making checkout atomic — several documents have to update together, or none at all, so an order can never end up half-written.',
      stats: [
        { value: '5', label: 'Services' },
        { value: '4', label: 'APIs integrated' },
        { value: '3', unit: 'mo', label: 'Duration' },
      ],
    },
  },

  {
    slug: 'smart-bus-stop',
    category: 'Hardware & IoT',
    title: 'Smart Bus Stop',
    summary: 'Solar-powered IoT bus stop with real-time monitoring dashboard.',
    badge: 'Team Leader · Grade A',
    role: 'Team Leader · Web server & dashboard',
    year: '2024', // TODO: confirm
    tech: ['BeagleBone', 'Flask', 'Socket.IO', 'IoT'],

    images: {
      card: img('smart-bus-stop', 'dashboard.png'),
      hero: img('smart-bus-stop', 'prototype-1.jpg'),
      gallery: [
        { src: img('smart-bus-stop', 'prototype-1.jpg'), alt: 'Smart bus stop prototype with solar panel' },
        { src: img('smart-bus-stop', 'dashboard.png'), alt: 'Real-time monitoring dashboard' },
        { src: img('smart-bus-stop', 'prototype-2.jpg'), alt: 'Smart bus stop prototype, side view' },
      ],
    },
    video: null,

    overview:
      'A solar-powered system that turns a traditional bus stop into a smart, connected one. Sensors report live data to a web dashboard, giving operators real-time visibility — and giving me hands-on experience combining renewable energy with IoT.',
    scope: {
      text: 'Our group set out to design a connected system that promotes a greener, more liveable future — starting with public infrastructure everyone uses. We built it around the BeagleBone, which made communication between components straightforward and was ideal for learning IoT fundamentals.',
      inScope: ['Solar panels with sunlight monitoring', 'Fans for commuter comfort', 'Real-time web dashboard'],
      outOfScope: ['Weatherproof enclosure', 'Public deployment', 'Fare integration'], // TODO: confirm
    },
    myRole:
      'I led the team — coordinating work, distributing tasks fairly and holding our output to a high standard. Technically, I built the Flask web server that lets every component talk to each other, designed the dashboard, and supervised the build of the physical prototype.',
    process: [
      { title: 'Research', note: 'Gathered data on existing bus stops to find where they could improve.' },
      { title: 'Ideate', note: 'Brainstormed solutions — solar panels for renewable power, fans for comfort.' },
      { title: 'Build', note: 'Programmed each BeagleBone for one job, e.g. monitoring sunlight for the solar panel.' },
      { title: 'Integrate', note: 'Connected everything with Flask + Socket.IO and a live, interactive dashboard.' },
    ],
    results: {
      text: 'The system worked end-to-end and met every objective we set. Our lecturers praised the concept and the effort behind it. With more time, I would add features and optimise the code further.',
      stats: [
        { value: 'A', label: 'Module grade' },
        { value: '4', label: 'Team size' }, // TODO: confirm
        { value: '12', unit: 'wk', label: 'Duration' }, // TODO: confirm
      ],
    },
  },

  {
    slug: 'smart-queue-time-tracker',
    category: 'Hardware & IoT',
    title: 'Smart Queue Time Tracker',
    summary: 'Tracks supermarket queue times to optimise staffing.',
    badge: 'Team Leader · Grade A',
    role: 'Team Leader · Firmware',
    year: '2024', // TODO: confirm
    tech: ['M5Stack Fire', 'MicroPython', 'PIR sensors', 'Qubitro'],

    images: {
      card: img('smart-queue-time-tracker', 'card.jpg'),
      hero: img('smart-queue-time-tracker', 'photo-1.jpg'),
      gallery: [
        { src: img('smart-queue-time-tracker', 'photo-1.jpg'), alt: 'Queue tracker prototype with M5Stack Fire devices' },
        { src: img('smart-queue-time-tracker', 'photo-2.jpg'), alt: 'M5Stack Fire showing queue data' },
        { src: img('smart-queue-time-tracker', 'photo-3.jpg'), alt: 'Queue tracker sensor setup' },
      ],
    },
    video: null,

    overview:
      'A smart queue system that tracks waiting times and peak days at large supermarkets, so businesses can plan manpower and keep customers moving. It shows how a few sensors and a dashboard can solve an everyday retail problem.',
    scope: {
      text: 'The brief was to improve lives using the M5Stack Fire. We chose retail because it has plenty of room for improvement, and focused on the frustration everyone knows: long checkout queues.',
      inScope: ['Queue detection with PIR sensors', 'Wait-time display on device', 'Cloud dashboard on Qubitro'],
      outOfScope: ['Camera-based counting', 'Point-of-sale integration', 'Store-wide rollout'], // TODO: confirm
    },
    myRole:
      'As team leader, I kept our ideas both innovative and buildable. I wrote and optimised most of the MicroPython code for the M5Stack, and reviewed everyone’s contributions to keep our work to a high standard.',
    process: [
      { title: 'Research', note: 'Studied the challenges retailers face in managing customer flow.' },
      { title: 'Concept', note: 'Designed a queue-management system to cut waiting times.' },
      { title: 'Hardware', note: 'Picked two PIR sensors, one RGB unit and two M5Stack Fire devices.' },
      { title: 'Code & cloud', note: 'Wrote the device code and streamed the data to Qubitro.' },
    ],
    results: {
      text: 'Everything worked as intended. Our biggest win was getting the data to display on Qubitro — the hardest part of the project. The work was praised by peers and instructors and earned an A.',
      stats: [
        { value: 'A', label: 'Module grade' },
        { value: '4', label: 'Team size' }, // TODO: confirm
        { value: '12', unit: 'wk', label: 'Duration' }, // TODO: confirm
      ],
    },
  },

  {
    slug: 'automatic-light-switch',
    category: 'Hardware & IoT',
    title: 'Automatic Light Switch',
    summary: 'Arduino system that switches lights on/off as people enter/leave a room.',
    badge: 'Distinction',
    role: 'Solo · Circuit & code', // TODO: confirm solo
    year: '2023', // TODO: confirm
    tech: ['Arduino Uno', 'Python', 'Firmata', 'IR sensor'],

    images: {
      card: img('automatic-light-switch', 'prototype.jpg'),
      hero: img('automatic-light-switch', 'prototype.jpg'),
      gallery: [
        { src: img('automatic-light-switch', 'prototype.jpg'), alt: 'Automatic light switch prototype' },
        { src: img('automatic-light-switch', 'schematic.jpg'), alt: 'Circuit schematic' },
        { src: img('automatic-light-switch', 'circuitry.jpg'), alt: 'Arduino Uno circuit wiring' },
      ],
    },
    video: 'https://www.youtube.com/watch?v=2xaNNNV7JAw',

    overview:
      'An Arduino Uno system that flips a real light switch with DC motors — on when someone walks in, off when they leave. It saves electricity by making sure lights only run when a room is in use.',
    scope: {
      text: 'This was my first project in electronics. As a beginner keen to experiment, I used an Arduino Uno with two motors, a buzzer, two LEDs and an IR sensor to detect people entering and leaving a room.',
      inScope: ['Entry/exit detection with IR', 'Motor-driven switch toggling', 'Buzzer + LED feedback'],
      outOfScope: ['Mains wiring changes', 'Multi-room support', 'Phone app control'], // TODO: confirm
    },
    myRole:
      'I did everything — designed and wired the circuit, and wrote the control program. Instead of C++, I learned Firmata so I could control the Arduino from Python.',
    process: [
      { title: 'Learn', note: 'Picked up Firmata to program the Arduino in Python instead of C++.' },
      { title: 'Circuit', note: 'Designed and wired the motors, buzzer, LEDs and IR sensor.' },
      { title: 'Code', note: 'First detection drives the top motor; a second detection drives the lower one.' },
      { title: 'Test', note: 'Tuned detection until the switch toggled reliably on entry and exit.' }, // TODO: confirm
    ],
    results: {
      text: 'The code ran smoothly and hit every goal. My lecturer commended the project, and it played a big part in my distinction for the module — and in sparking my passion for electronics.',
      stats: [
        { value: 'Dist.', label: 'Module result' },
        { value: '1', label: 'Team size' }, // TODO: confirm
        { value: '6', unit: 'wk', label: 'Duration' }, // TODO: confirm
      ],
    },
  },
]

// Groups the array by category, keeping the order they first appear in.
export const projectsByCategory = () => {
  const groups = []
  for (const project of projects) {
    const name = project.category ?? 'Projects'
    const existing = groups.find((g) => g.name === name)
    if (existing) existing.items.push(project)
    else groups.push({ name, items: [project] })
  }
  return groups
}

export const getProject = (slug) => projects.find((p) => p.slug === slug)

// For the "Next project →" card — loops back to the first
export const getNextProject = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug)
  return projects[(i + 1) % projects.length]
}
