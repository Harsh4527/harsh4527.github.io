// script.js - Professional Aerospace Website Interactions
document.addEventListener('DOMContentLoaded', () => {
  // ======================
  // 1. NAVIGATION EFFECTS
  // ======================
  const nav = document.querySelector('.main-nav');
  
  // Scroll-based nav background change
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
      nav.style.backdropFilter = 'blur(10px)';
      nav.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.2)';
    } else {
      nav.style.backgroundColor = 'transparent';
      nav.style.backdropFilter = 'none';
      nav.style.boxShadow = 'none';
    }
  });

  // ======================
  // 2. SMOOTH SCROLLING
  // ======================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });

  // ======================
  // 3. HERO TEXT ANIMATION
  // ======================
  const heroTitle = document.querySelector('.hero h1');
  let animationTimeout;

  heroTitle.addEventListener('mouseenter', () => {
    clearTimeout(animationTimeout);
    heroTitle.style.setProperty('--width', '100%');
  });

  heroTitle.addEventListener('mouseleave', () => {
    heroTitle.style.setProperty('--width', '0%');
    animationTimeout = setTimeout(() => {
      heroTitle.style.removeProperty('--width');
    }, 600);
  });

  // ======================
  // 4. SCROLL REVEAL ANIMATIONS
  // ======================
  const animateOnScroll = () => {
    const sections = document.querySelectorAll('.content-section, .tech-card');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  };

  // Initialize section positions
  document.querySelectorAll('.content-section, .tech-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load

  // ======================
  // 5. TECHNOLOGY CARD INTERACTIONS
  // ======================
  const techCards = document.querySelectorAll('.tech-card');
  
  techCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // ======================
  // 6. MOBILE MENU TOGGLE
  // ======================
  const menuToggle = document.createElement('div');
  menuToggle.className = 'mobile-menu-toggle';
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector('.nav-container').appendChild(menuToggle);
  
  menuToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // ======================
  // 7. BACKGROUND GRID ANIMATION
  // ======================
  const bgGrid = document.querySelector('.bg-grid');
  let scrollPos = 0;
  
  const animateGrid = () => {
    scrollPos = window.scrollY;
    bgGrid.style.backgroundPosition = `0px ${-scrollPos * 0.2}px`;
    requestAnimationFrame(animateGrid);
  };
  
  animateGrid();
});
