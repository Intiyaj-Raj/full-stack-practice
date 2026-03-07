# ✨ Animated Photo Gallery

A fully animated, interactive photo gallery built with HTML, CSS, and JavaScript. Features include category filtering, lightbox viewing, auto-slideshow, and smooth animations.

## 🎯 Features

### Core Features
- **Category Filtering**: Filter images by Nature, City, People, and Animals
- **Lightbox Modal**: Full-screen image viewing with navigation
- **Auto Slideshow**: Automatic image cycling with play/pause controls
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### Interactive Elements
- **Hover Effects**: 
  - Image zoom and rotation
  - Slide-up overlay with title and description
  - Interactive icons (like, share, download)
  - 3D parallax effect on mouse movement
- **Like Button**: Toggle heart icon with pulse animation
- **Share Button**: Web Share API with clipboard fallback
- **Download Button**: Direct image download functionality
- **Scroll to Top**: Floating button that appears on scroll

### Animations
- Staggered fade-in animation for gallery items
- Gradient animated header
- Smooth filter transitions
- Lightbox fade and zoom effects
- Shimmer loading effect on hover

## 📁 Project Structure

```
animated-photo-gallery/
├── index.html      # Main HTML file
├── style.css      # All styles and animations
├── script.js      # JavaScript functionality
├── img/           # Local images (1-25.webp)
└── README.md      # This file
```

## 🚀 Getting Started

1. **Open in Browser**: Simply open `index.html` in any modern web browser
2. **Using Live Server** (recommended):
   ```bash
   # If you have VS Code with Live Server extension
   # Right-click index.html and select "Open with Live Server"
   ```

## 🎨 Customization

### Adding More Categories

1. Add a new filter button in HTML:
```html
<button class="filter-btn" data-filter="new-category">New Category</button>
```

2. Add data-category to gallery items:
```html
<div class="gallery-item new-category" data-category="new-category">
    <!-- content -->
</div>
```

### Adding More Images

Add new gallery items with unique categories:
```html
<div class="gallery-item category-name" data-category="category-name">
    <img src="your-image-url" alt="Description">
    <div class="overlay">
        <h3>Title</h3>
        <p>Description</p>
        <div class="icons">
            <i class="fas fa-heart"></i>
            <i class="fas fa-share"></i>
            <i class="fas fa-download"></i>
        </div>
    </div>
</div>
```

### Changing Colors

Modify CSS custom properties in `style.css`:
```css
:root {
    --primary-color: #e94560;  /* Change accent color */
    --bg-gradient-start: #1a1a2e;
    --bg-gradient-end: #0f3460;
}
```

## ⌨️ Keyboard Shortcuts

When lightbox is open:
- **Arrow Left/Right**: Navigate between images
- **Escape**: Close lightbox
- **Space**: Play/Pause slideshow

## 🛠️ Technical Details

### Technologies Used
- HTML5
- CSS3 (Grid, Flexbox, Animations, Transitions)
- JavaScript (ES6+)
- Font Awesome 6.4.0 (via CDN)
- Picsum Photos (placeholder images)

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📱 Responsive Breakpoints

| Breakpoint | Width | Grid Columns |
|------------|-------|--------------|
| Desktop    | >768px | 3+ columns  |
| Tablet     | 481-768px | 2 columns |
| Mobile     | <480px | 1 column   |

## 🎭 Animation Reference

| Animation | Purpose | Duration |
|-----------|---------|----------|
| `fadeInUp` | Gallery item entrance | 0.6s |
| `gradientBG` | Header background | 5s |
| `titlePulse` | Title breathing effect | 2s |
| `lightboxFadeIn` | Lightbox open | 0.3s |
| `zoomIn` | Image zoom in lightbox | 0.4s |
| `likePulse` | Heart animation | 0.5s |
| `shimmer` | Hover shimmer effect | 1s |

## 📋 JavaScript Functions

### Filter System
- `filterBtns` - Category filter buttons
- `updateVisibleItems()` - Update visible items array

### Lightbox
- `openLightbox(src, title, desc)` - Open lightbox
- `closeLightbox()` - Close lightbox
- `showPrevImage()` / `showNextImage()` - Navigation
- `updateLightboxImage()` - Update displayed image

### Features
- Auto slideshow with interval
- Like/Share/Download icon handlers
- Scroll to top button
- Intersection Observer for scroll animations

## 📄 License

MIT License - Feel free to use this project for learning or commercial purposes.

## 👤 Author

Created by Intiyaj - 2026

---

Enjoy your animated photo gallery! 🎉

