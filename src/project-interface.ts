export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];      // Array for the Embla carousel
  tags: string[];        // Tech stack (e.g., ["TypeScript", "Vite"])
  liveUrl?: string;      // Optional: link to hosted site
  githubUrl: string;     // Link to source code
  category: string;      // e.g., "Full-stack", "Frontend"
}

export const Projects:Project[] = [

    {
        id: "project-1",
        title:"Weather App",
        description: "Real-time weather application with dynamic themes made by TypeScript and Tailwind CSS. It fetches two Open-meteo APIs for real-time forecast for a city entered by User. Searching city by name is also available.",
        images : ["./webP_files/weather-card1.webp", "./webP_files/weather-card2.webp", "./webP_files/weather-card3.webp"],
        tags: ["TypeScript", "TailwindCSS", "Vite"],
        liveUrl: "https://weather-app-tan-chi-41.vercel.app/",
        githubUrl: "https://github.com/CodeCrusher123/weather-app",
        category: "Web Application, Utility-tool, APIs"
    },

    {
        id: "project-2",
        title: "Responsive Photography Gallery",
        description: "A responsive photography gallery built with vanilla JavaScript featuring category-based image filtering, an interactive lightbox system, dynamic layout adjustments, and persistent like functionality using localStorage. The project focuses on smooth UI interactions, structured DOM handling, and a authentic gallery experience across different screen sizes.",
        images: ["webP_files/project2_image1.webp", "webP_files/project2_image2.webp", "webP_files/project2_image3.webp", "webP_files/project2_image4.webp"],
        tags: ["JavaScript", "HTML", "CSS3"],
        liveUrl: "https://codecrusher123.github.io/photography-portfolio/",
        githubUrl: "https://github.com/CodeCrusher123/photography-portfolio",
        category: "Frontend, Responsive-design, Lightbox"
    },

    {
        id: "project-3",
        title: "Student Dashboard",
        description: "A TypeScript-based student analytics dashboard designed to display student performance data through dynamic UI rendering and structured data handling. Built to strengthen my understanding of TypeScript, reusable logic, and creating interactive frontend interfaces.",
        images: ["webP_files/project3_image1.webp", "webP_files/project3_image2.webp", "webP_files/project3_image3.webp"],
        tags: ["TypeScript", "HTML", "CSS3"],
        liveUrl: "https://codecrusher123.github.io/student-dashboard/",
        githubUrl: "https://github.com/CodeCrusher123/student-dashboard",
        category: "Frontend, Type-safe"
    }

   
];

