document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const autoPlayBtn = document.getElementById('autoPlayBtn');
    const scrollTopBtn = document.getElementById('scrollTop');
    const likeIcons = document.querySelectorAll('.icons i.fa-heart');
    const shareIcons = document.querySelectorAll('.icons i.fa-share');
    const downloadIcons = document.querySelectorAll('.icons i.fa-download');

    let currentIndex = 0;
    let isAutoPlaying = false;
    let autoPlayInterval;
    let visibleItems = [];

    // Initialize visible items
    updateVisibleItems();

    // Filter Functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            galleryItems.forEach((item, index) => {
                const category = item.dataset.category;

                if (filter === 'all' || category === filter) {
                    item.classList.remove('hide');
                    item.classList.add('show');
                    item.style.animationDelay = `${index * 0.1}s`;
                } else {
                    item.classList.add('hide');
                    item.classList.remove('show');
                }
            });

            updateVisibleItems();
        });
    });

    function updateVisibleItems() {
        visibleItems = Array.from(galleryItems).filter(item =>
            !item.classList.contains('hide')
        );
    }

    // Lightbox Functionality
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.querySelector('h3').textContent;
            const desc = item.querySelector('p').textContent;

            // Find index in visible items
            currentIndex = visibleItems.indexOf(item);

            openLightbox(img.src, title, desc);
        });
    });

    function openLightbox(src, title, desc) {
        lightboxImg.src = src;
        lightboxTitle.textContent = title;
        lightboxDesc.textContent = desc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navigation
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
        updateLightboxImage();
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % visibleItems.length;
        updateLightboxImage();
    }

    function updateLightboxImage() {
        const item = visibleItems[currentIndex];
        const img = item.querySelector('img');
        const title = item.querySelector('h3').textContent;
        const desc = item.querySelector('p').textContent;

        // Add fade animation
        lightboxImg.style.opacity = '0';

        setTimeout(() => {
            lightboxImg.src = img.src;
            lightboxTitle.textContent = title;
            lightboxDesc.textContent = desc;
            lightboxImg.style.opacity = '1';
        }, 200);
    }

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrevImage();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNextImage();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'Escape') closeLightbox();
    });

    // Auto Slideshow
    autoPlayBtn.addEventListener('click', () => {
        isAutoPlaying = !isAutoPlaying;

        if (isAutoPlaying) {
            autoPlayBtn.classList.add('playing');
            autoPlayBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';

            autoPlayInterval = setInterval(() => {
                showNextImage();
            }, 2000);
        } else {
            autoPlayBtn.classList.remove('playing');
            autoPlayBtn.innerHTML = '<i class="fas fa-play"></i> Auto Slideshow';
            clearInterval(autoPlayInterval);
        }
    });

    // Like Button Animation
    likeIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            icon.classList.toggle('fas');
            icon.classList.toggle('far');
            icon.classList.add('liked');

            if (icon.classList.contains('fas')) {
                icon.style.color = '#e94560';
            } else {
                icon.style.color = '';
            }

            setTimeout(() => {
                icon.classList.remove('liked');
            }, 500);
        });
    });

    // Share Button
    shareIcons.forEach(icon => {
        icon.addEventListener('click', async (e) => {
            e.stopPropagation();

            const item = icon.closest('.gallery-item');
            const img = item.querySelector('img');

            try {
                if (navigator.share) {
                    await navigator.share({
                        title: 'Photo Gallery',
                        text: 'Check out this amazing photo!',
                        url: img.src
                    });
                } else {
                    // Fallback: copy to clipboard
                    await navigator.clipboard.writeText(img.src);
                    alert('Image URL copied to clipboard!');
                }
            } catch (err) {
                console.log('Share cancelled');
            }
        });
    });

    // Download Button
    downloadIcons.forEach(icon => {
        icon.addEventListener('click', async (e) => {
            e.stopPropagation();

            const item = icon.closest('.gallery-item');
            const img = item.querySelector('img');
            const title = item.querySelector('h3').textContent;

            try {
                const response = await fetch(img.src);
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = url;
                a.download = `${title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            } catch (err) {
                console.log('Download failed');
            }
        });
    });

    // Scroll to Top
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    galleryItems.forEach(item => {
        item.style.animationPlayState = 'paused';
        observer.observe(item);
    });

    // Initial animation trigger
    setTimeout(() => {
        galleryItems.forEach(item => {
            if (item.getBoundingClientRect().top < window.innerHeight) {
                item.style.animationPlayState = 'running';
            }
        });
    }, 100);

    // Mouse parallax effect on gallery items
    galleryItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});
