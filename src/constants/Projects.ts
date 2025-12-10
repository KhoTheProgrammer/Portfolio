import Project from "../types/Index";
import konneckus from "../assets/Konnektus.jpg";
import portfolio from "../assets/portfolio.jpg";
import dhis2 from "../assets/dhis2.jpg";
import voting from "../assets/voting.jpg";
import solar from "../assets/solar.jpg";

const projects: Project[] = [
    {
      title: "KonnectUs",
      description:
        "An online platform where farmers can sell their products to buyers directly without middlemen",
      tags: ["React", "FireBase", "Tailwind CSS"],
      image: konneckus,
      githubLink: "https://github.com/KhoTheProgrammer/KonnectUs.git",
      liveLink: "https://konektus.netlify.app/",
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
      title: "Unima COMSOC voting system",
      description:
        "An online voting sytem used by the University of Malawi's Computing Society to vote for various positions at the society",
      tags: ["NextJs", "Tailwind CSS", "Supabase"],
      image: voting,
      liveLink: "https://voting-system-lake.vercel.app/",
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
    {
      title: "Quiz Management System",
      description:
        "A web application for creating, managing, and taking quizzes. Built with Next.js, it allows administrators to create quizzes and users to participate and view results.",
      tags: ["Next.js", "React", "Node.js"],
      image: portfolio,
      githubLink: "https://github.com/KhoTheProgrammer/quiz-management-system",
      liveLink: "https://quiz-management-system-jet.vercel.app",
    },
    
  ];

  export default projects;