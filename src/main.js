// ---------------- HMR -------------------------------
if (module.hot) {
  module.hot.accept()
}

// ---------------- gsap -------------------------------
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({ defults: { durations: 1 } })

// ---------------- Header -------------------------------

// H1
tl.fromTo(
  `header .title h1`,
  { opacity: 0, y: -300 },

  {
    opacity: 1,
    y: 0,
    delay: 0.5,
    ease: `back(2)`,
  }
)

// P
tl.fromTo(
  `header .title p`,
  { opacity: 0, x: -60 },

  {
    opacity: 1,
    x: 0,
    ease: `power2`,
  }
)

// Btn
tl.fromTo(
  `header a`,
  { opacity: 0, x: 60 },

  {
    opacity: 1,
    x: 0,
    ease: `back(2)`,
    scrollTrigger: `header a`,
  }
)

// ---------------- About -------------------------------

// Title
gsap.fromTo(
  `.about  .title`,
  { opacity: 0, y: -200 },

  {
    scrollTrigger: {
      trigger: `.about  .title`,
      start: `top center`,
    },

    y: -0,
    opacity: 1,
    duration: 1,
    ease: `back(2)`,
  }
)

// info
gsap.fromTo(
  `.about  .info .text`,
  { opacity: 0, x: -600 },

  {
    scrollTrigger: {
      trigger: `.about  .info .text`,
      start: `top center`,
    },

    x: -0,
    opacity: 1,
    duration: 1,
    ease: `back(2)`,
  }
)

// info
gsap.fromTo(
  `.about  .info .composition`,
  { opacity: 0, x: 600 },

  {
    scrollTrigger: {
      trigger: `.about  .composition img`,
      start: `top center `,
    },

    x: 0,
    opacity: 1,
    duration: 1,
    ease: `bounce`,
  }
)

// ---------------- Features -------------------------------

gsap.fromTo(
  `.features  .grid .feature-box`,
  { opacity: 0, y: -300 },

  {
    scrollTrigger: {
      trigger: `.features  .grid .feature-box`,
      start: `top center`,
    },

    y: -0,
    opacity: 1,
    stagger: {
      each: 0.2,
      from: 'random',
    },
    duration: 1,
    ease: `back(2)`,
  }
)

// ---------------- Tours -------------------------------

gsap.fromTo(
  `.tours  .grid .card-box`,
  { opacity: 0, x: 400 },

  {
    scrollTrigger: {
      trigger: `.tours   .grid .card-box`,
      start: `top center`,
    },

    x: -0,
    opacity: 1,
    stagger: 0.4,
    duration: 1,
    ease: `back(2)`,
  }
)

// ---------------- Stories -------------------------------
gsap.fromTo(
  `.stories  .grid  .story `,
  { opacity: 0, x: -800 },

  {
    scrollTrigger: {
      trigger: `.stories  .grid  .story`,
      start: `top center`,
    },

    x: -0,
    opacity: 1,
    duration: 1,
    ease: `back`,
  }
)

// ---------------- Stories -------------------------------
gsap.fromTo(
  `.booking `,
  { opacity: 0, x: -500 },

  {
    scrollTrigger: {
      trigger: `.booking`,
      start: `top center`,
    },

    x: -0,
    opacity: 1,
    duration: 1,
    ease: `back`,
  }
)

// ---------------- footer -------------------------------
gsap.fromTo(
  `footer `,
  { opacity: 0, x: 500 },

  {
    scrollTrigger: {
      trigger: `footer`,
      start: `top center`,
    },

    x: 0,
    opacity: 1,
    duration: 1,
    ease: `back`,
  }
)
