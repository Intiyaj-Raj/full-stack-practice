# Sundown Studio (Frontend Demo)

A single-page, scroll-based website mockup for **Sundown Studio**.

## Tech Stack

- **HTML, CSS, JavaScript**
- UI libraries (via CDN):
  - [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll)
  - [GSAP](https://greensock.com/gsap/) (+ ScrollTrigger)
  - [Swiper](https://swiperjs.com/)

## Project Structure

- `index.html` - Main page markup
- `style.css` - Base styling
- `responsive.css` - Mobile/responsive overrides
- `script.js` - Page interactions (menu toggle, hover image preview, swiper init, loader)
- `video.mp4` - Hero background video
- `images/` - Local image assets (logo, favicon, webp assets)
- `NeueHaasDisplayLight.ttf`, `NeueHaasDisplayMediu.ttf` - Font files

## Features

- Loader screen on page open
- Smooth scrolling using Locomotive Scroll
- Animated “featured projects” slider using Swiper
- Page 3: hover-to-preview fixed image, and clickable tabs (Design/Project/Execution)
- Mobile menu overlay

## How to Run

This project is pure frontend.

1. Open `index.html` in a browser.
2. For best results (recommended), run a local static server so assets load correctly.

Example (Node, if you have it):

```bash
npx serve
```

Then open the shown URL.

## Notes

- External images are loaded from Unsplash / Webflow CDN URLs included in `index.html`.
- Some effects require internet access to fetch the CDN libraries.
