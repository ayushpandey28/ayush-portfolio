const projects = [
  {
    title: "TigerResume",
    tagline: "AI Resume Analysis & ATS Optimization Platform",
    description:
      "A full-stack platform for analyzing, optimizing, and editing resumes with ATS scoring, keyword matching, and multi-template PDF generation.",
    points: [
      "Built ATS keyword analysis, scoring engine, and custom resume templates with live editing.",
      "Developed RESTful APIs using Node.js and Express for resume parsing, optimization, and document versioning.",
      "Integrated MongoDB for structured document storage and implemented Git/GitHub engineering workflows.",
    ],
    image: "/images/projects/tigerresume.svg",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ayushpandey28/TigerResume.git",
    live: "https://tiger-resume.vercel.app/",
  },
  {
    title: "TigerPDF",
    tagline: "Full-Stack PDF & Image Utility Web Application",
    description:
      "A modern PDF utility application to convert images to PDF, merge multiple PDF documents, and compress files through a clean, fast interface.",
    points: [
      "Developed complete PDF utility suite for image-to-PDF conversion, merging up to 15 PDFs, and document compression.",
      "Built backend REST APIs in Node.js and Express with efficient stream-based file processing.",
      "Designed responsive, zero-friction client interface processing files securely without persistent storage.",
    ],
    image: "/images/projects/tigerpdf.svg",
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "CSS3"],
    github: "https://github.com/ayushpandey28/TigerPDF.git",
    live: "https://tigerpdf.vercel.app/",
  },
];

export default projects;