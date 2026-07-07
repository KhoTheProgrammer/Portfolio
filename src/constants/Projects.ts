import Project from "../types/Index";
import konneckus from "../assets/Konnektus.jpg";
import portfolio from "../assets/portfolio.jpg";
import dhis2 from "../assets/dhis2.jpg";
import voting from "../assets/voting.jpg";
import solar from "../assets/solar.jpg";
import quiz from "../assets/quiz-management-system.png";
import racing from "../assets/racing-game.png";
import smart_farmer from "../assets/smart-famer.png";
import lecturer_feedback from "../assets/lecturer-feedback.png";
import donate_eazy from "../assets/donate eazy.jpg";

const projects: Project[] = [
  {
    title: "Smart Farmer (Mlimi Wanzeru)",
    description:
      "A comprehensive agricultural advisory platform for Malawian smallholder farmers. Provides location-based crop suitability analysis, planting calendars, weather data integration via NASA POWER API, soil analysis through SoilGrids, and elevation-based recommendations using SRTM data. Built with Django REST API backend and React frontend.",
    tags: [
      "React",
      "Django",
      "Python",
      "PostgreSQL",
      "Tailwind CSS",
      "GIS",
      "PostGIS",
      "GeoDjango",
    ],
    image: smart_farmer,
    githubLink: "https://github.com/KhoTheProgrammer/smart-farmer-frontend",
    liveLink: "https://smart-farmer-frontend-mu.vercel.app/",
  },
  {
    title: "KonnectUs",
    description:
      "An online platform where farmers can sell their products to buyers directly without middlemen",
    tags: ["React", "FireBase", "Tailwind CSS"],
    image: konneckus,
    githubLink: "https://github.com/KhoTheProgrammer/KonnectUs.git",
    liveLink: "https://konnectus-xi.vercel.app",
  },
  {
    title: "Quiz Management System",
    description:
      "A web application for creating, managing, and taking quizzes. Built with Next.js, it allows administrators to create quizzes and users to participate and view results.",
    tags: ["Next.js", "Supabase", "TailwindCSS"],
    image: quiz,
    githubLink: "https://github.com/KhoTheProgrammer/quiz-management-system",
    liveLink: "https://quiz-management-system-jet.vercel.app",
  },
  {
    title: "UNIMA Lecturer Feedback Auto-Fill Extension",
    description:
      "A browser extension for University of Malawi students that automates the tedious lecturer evaluation process. Features one-click auto-fill, customizable rating preferences, optional comment generation, and batch processing for multiple evaluations. Includes a modern UI with privacy-focused local operation.",
    tags: ["JavaScript", "HTML", "CSS", "Browser Extension", "Chrome API"],
    image: lecturer_feedback,
    githubLink: "https://github.com/KhoTheProgrammer/lecturer-feedback",
    liveLink: "https://unima-lecturer-feedback.netlify.app",
  },
  {
    title: "DonateEasy",
    description:
      "A comprehensive Android donation platform built with modern MVVM architecture. Connects donors with orphanages and charitable organizations, featuring secure authentication, real-time donation tracking, admin management system, and intuitive Jetpack Compose UI. Implements complete CRUD operations with Supabase backend integration.",
    tags: [
      "Kotlin",
      "Android",
      "Jetpack Compose",
      "Supabase",
      "MVVM",
      "Material Design",
    ],
    image: donate_eazy,
    githubLink: "https://github.com/KhoTheProgrammer/donateeasy",
  },
  {
    title: "Khoo Racing Game",
    description:
      "A 3D mobile racing game built with Godot Engine featuring realistic car physics, AI opponents, multiple racing tracks, and intuitive mobile controls. Includes game management systems, track database, music management, and optimized performance for mobile devices with touch-based steering and acceleration controls.",
    tags: [
      "GDScript",
      "Godot Engine",
      "3D Graphics",
      "Mobile Gaming",
      "Game Physics",
    ],
    image: racing,
    githubLink: "https://github.com/KhoTheProgrammer/racing-game",
  },
  {
    title: "Unima COMSOC voting system",
    description:
      "An online voting sytem used by the University of Malawi's Computing Society to vote for various positions at the society",
    tags: ["NextJs", "Tailwind CSS", "Supabase"],
    image: voting,
    liveLink: "https://voting-system-lake.vercel.app/",
  },
  {
    title: "Old Portfolio Website",
    description:
      "An old responsive portfolio website to showcase my work and skills.",
    tags: ["HTML", "CSS", "Javascript"],
    image: portfolio,
    githubLink:
      "https://github.com/KhoTheProgrammer/KhoTheProgrammer.github.io.git",
    liveLink: "https://KhoTheProgrammer.netlify.app/",
  },
  {
    title: "DHIS2 Patient Reminder app",
    description:
      "A Health application that keeps track of patients enrolled in a health program and send reminders of their appointments via SMS",
    tags: ["React", "Tailwind CSS", "ExpressJs", "Postgres"],
    image: dhis2,
    githubLink:
      "https://github.com/KhoTheProgrammer/Dhis2-Patient-Reminder.git",
  },
  {
    title: "Solar System Application",
    description:
      "A desktop application that shows different planets of the solar system orbiting around the sun. ",
    tags: ["C++", "OpenGL", "GLSL"],
    image: solar,
    githubLink:
      "https://github.com/KhoTheProgrammer/Solar-sytem-application.git",
  },
];

export default projects;
