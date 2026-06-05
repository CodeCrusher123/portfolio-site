# **Developer Portfolio — TypeScript + Vite**

This is a clean, responsive portfolio site built using TypeScript, Vite and CSS. Instead of using a framework like React, I built this using DOM manipulation and dynamic UI rendering to get a better handle on strict typing, structural layouts, and asset optimization in a TypeScript environment.

### Introduction section
![Intro section of Portfolio](/public/webP_files/Portfolio-screenshot1.webp)
### Project display
![Project display section](/public/webP_files/Portfolio-screenshot2.webp)



**Live Demo**  
https://portfolio-site-pi-two-23.vercel.app/

## Features
- Responsive layouts for desktop, tablet, and mobile
- Project data rendered dynamically from TypeScript interfaces
- Reusable project card components with typed data
- Images using Embla Carousel
- Technology stack display with custom icons
- WebP image assets for faster loading
- Accessibility and performance improvements based on Lighthouse audits
- Links to live demos and source code for each project
- Code organized in TypeScript modules

## Tech Stack
TypeScript, Vite, HTML5, CSS3, Embla Carousel

## Project Structure


### **Project Folder Structure**

```bash
portfolio-site/
│
├── public/
│   ├── fonts/
│   └── webP_files/
│
├── src/
│   ├── assets/
│   │   └── webP_files/
│   ├── main.ts
│   ├── project-interface.ts
│   └── style.css
│
├── index.html
├── package.json
├── vite.config.ts
└── .gitignore
```


## Implementation

Project data is defined in a `project-interface.ts` and rendered to the DOM with TypeScript.

Each project entry includes:  
- Title  
- Description  
- Technology tags  
- Project Screenshots 
- Live demo URL  
- GitHub repository URL  

Project cards are generated from this data using `.map()`. Each card initializes a separate Embla Carousel instance.

## Featured Projects

### Weather App
`TypeScript` and `Tailwind CSS` application. Fetches geocoding and weather data from Open-Meteo `APIs`. UI updates based on search input and current weather conditions.

### Responsive Photography Gallery
`JavaScript` gallery with category filtering, `lightbox` viewer, responsive grid layout, and likes persisted via localStorage.

### Student Dashboard
TypeScript dashboard implementing `dynamic rendering`, reusable functions, and structured data display.

## Performance
- WebP image conversion
- Responsive image sizing
- Vite production build optimization
- Semantic HTML
- Accessible navigation and markup

## Problems & Solutions

### Multiple carousels 
- Instead of writing multiple ID selectors and diefferent layout posiioning , I looked for something better - `Embla Carousel` 
- Embla uses nodes to grab images of each project card and displays them as carousels. The sliding of the images become a loop which provides users to watch those images without moving back . 
- Took a lot of time to learn the syntax but it worked.
### Tech Icons
- Tech icons are present inside static HTML and dynamic code.
- Felt messier using multiple IDs for same icons.
- Solution: Made a mapper with same names from interface with values as Icon images. 
- Looped them for dynamic cards with object key-value match.
- Now, adding new icons inside a project card is simply adding one key-value inside mapper.  
### Optimization
- Inside `Developer tools` , checked for Lighthouse analysis.
- The scores are lower.
- Solution: Optiimizing images by converting `.png` to `webp`.
- Downloading fonts locally to improve loading speed and time.
- Added meta description and increased color contrast.

## Technical Focus

Built to practice:  
- TypeScript with DOM manipulations.
- Dynamic UI rendering based on Data.
- Third-party library integration.
- Responsive design implementation.
- Build tooling and asset optimization.
- Code organization for maintainability.

## Setup

Clone the repository:
```bash
git clone https://github.com/CodeCrusher123/portfolio-site.git
```
Install dependencies
```bash
cd portfolio-site
npm install
```
Run development server:
```bash
npm run dev
```
Create production build:
```bash
npm run build
```
Preview production build
```bash
npm run preview
```
## **Planned Updates**
- Theme toggle
- Additional project write-ups
- UI animation improvements
- Project filtering
- Further accessibility work
  

## Author
**Nilakesh Barman**
#### Any opportunity or project?
#### You can mail me at - *blazzingstorm1@gmail.com*

  