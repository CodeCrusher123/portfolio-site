// ============================================================================
// IMPORTS
// ============================================================================
import EmblaCarousel from 'embla-carousel';
import "./style.css"; 
import { Projects, type Project } from './project-interface';

// Import all images so Vite can bundle them
import TypeScriptLogo from "./assets/webP_files/Typescript_logo.svg.webp";
import JavaScriptLogo from "./assets/webP_files/JavaScript_logo.svg.webp";
import CssLogo from "./assets/webP_files/500px-CSS3_logo.svg.webp";
import HtmlLogo from "./assets/webP_files/500px-HTML5_logo_and_wordmark.svg.webp";
import ViteLogo from "./assets/vite.svg";
import TailwindCSSLogo from "./assets/icons8-tailwind-css.svg";


// ============================================================================
// SETUP DATA
// ============================================================================

// Map tag names to their logo images
const techTagsIcon:Record<string, string> = {
  TypeScript: TypeScriptLogo,
  JavaScript: JavaScriptLogo,
  HTML: HtmlLogo,
  CSS3: CssLogo,
  TailwindCSS: TailwindCSSLogo,
  Vite: ViteLogo
};

// ============================================================================
// GRAB DOM ELEMENTS
// ============================================================================

const projectContainer = document.querySelector<HTMLDivElement>(".project-card")!;

// These are for icons outside the project cards, like in footer
const typescriptIcon = document.querySelectorAll<HTMLImageElement>(".typescript-icon")!;
const cssIcon = document.querySelectorAll<HTMLImageElement>(".css-icon")!;
const htmlIcon = document.querySelectorAll<HTMLImageElement>(".html-icon")!;
const javascriptIcon = document.querySelectorAll<HTMLImageElement>(".javascript-icon")!;
const viteIcon = document.querySelectorAll<HTMLImageElement>(".vite-icon")!;

// ============================================================================
// SET STATIC IMAGES
// ============================================================================
if (!projectContainer){
  console.error("DOM elements not found");
}

// Set all the tech icons in footer/hero sections
typescriptIcon?.forEach((icon) => {
  icon.src = TypeScriptLogo;
  icon.alt = "TypeScript logo";
});

cssIcon?.forEach((icon) => {
  icon.src = CssLogo;
  icon.alt = "Css logo";
});

htmlIcon?.forEach((icon) => {
  icon.src = HtmlLogo;
  icon.alt = "HTML logo";
});

javascriptIcon?.forEach((icon) =>{
  icon.src = JavaScriptLogo;
  icon.alt = "JavaScript logo";
});

viteIcon?.forEach((icon) =>{
  icon.src = ViteLogo;
  icon.alt = "Vite logo";
})

// ============================================================================
// FUNCTIONS
// ============================================================================

// This function finds all carousels and makes the buttons work
function activateCarousels() {
  // 1. Grab all carousels on the page
  const nodes = document.querySelectorAll('.embla')!;

  nodes?.forEach((node) => {
    // 2. Initialize Embla on this specific node
    const emblaApi = EmblaCarousel(node as HTMLElement, { loop: true });

    // 3. Find the buttons that belong to THIS carousel only
    const parent = node.parentElement; 
    const prevBtn = parent?.querySelector('.embla__prev');
    const nextBtn = parent?.querySelector('.embla__next');

    // 4. Attach listeners to these specific buttons
    prevBtn?.addEventListener('click', () => emblaApi.scrollPrev());
    nextBtn?.addEventListener('click', () => emblaApi.scrollNext());
  });
};

// This function builds all the project cards and puts them on the page
function renderFunction(project : Project[]){
    const cards = project.map(card =>{

      // Build the image slides for the carousel
      const slidesHTML = card.images.map(imgSrc => `
      <div class="embla__slide">
        <img src="${imgSrc}" alt="${card.title} screenshot">
      </div>`).join("");

      // Build the tech stack icons for this project
      const techTagsHTML = card.tags.map(tag =>(
        `
          <div class="icon-box">
            <img src="${techTagsIcon[tag]}" alt="${tag}">
          </div>  
        `
      )).join("");

      // Return the full HTML for one project card
      return`
       <div class="project-item">

    <div class="project-preview">
      <div class="embla">

        <div class="embla__container">
          ${slidesHTML}
        </div>

      </div>

      <button class="embla__prev">⬅</button>
      <button class="embla__next">➡</button>
    </div>

    <div class="project-content">

      <div class="project-details">

        <h3>${card.title}</h3>

        <p>${card.description}</p>

        <div class="tech-tags">
          ${techTagsHTML}
        </div>  

        <div class="project-actions">

           <a href="${card.liveUrl}"
              class="project-btn"
              target="_blank"
              rel="noopener noreferrer">
              Live Demo
          </a>

          <a href="${card.githubUrl}"
              class="project-btn"
              target="_blank"
              rel="noopener noreferrer">
              GitHub Repo
          </a>

        </div>

      </div>

    </div>

  </div>
  `;
    }).join("");

    // Put all the cards into the container, then activate carousels
    if (projectContainer){
      projectContainer.innerHTML = cards;
      activateCarousels();
    }
}

// ============================================================================
// RUN THE CODE
// ============================================================================

// Actually render all projects on page load
renderFunction(Projects);