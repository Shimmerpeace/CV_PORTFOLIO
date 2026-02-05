npm install -D tailwindcss@3 postcss autoprefixer
1. Installs tailwindcss which is the main library providing all the utility classes used for the project
2. Installs postcss which is a tool that helps tailwind process and transforms the css behind the scenes
3. Installs autoprefixer which automatically adds the necessary vendor prefixes to enable the projects styles to be compartible with all modern browsers

npx tailwindcss init -p initializes tailwind inside the project and it automatically generates two important configuration files: taiwind.config.js and postcss.config.js

tailwind.config.js allows us to customize tailwind settings according to our projects requirements
postcss.config.js helps vite know how to handle the css processing

npm install gsap
FUNFACT:
Green Sock Animation Platform (GSAP) is a super powerful and flexible javascript animation library used by proffesionals worldwide to create high-performance animations from simple fades and slides to complex scroll effects, 3D-transformations and even full animations timelines.

useRef allows a persistent reference to a DOM element and useEffects runs side efects

Using .gitignore to hides files the emailjs credentials