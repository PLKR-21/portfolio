// Projects data
const projects = [
  {
    "title": "Real Estate Management System",
    "description": "A full-stack property listing platform built using Python, MySQL, and HTML/CSS. It allows users to view, filter, and manage real estate properties with admin control.",
    "link": "#"
  },
  {
    "title": "IoT-Based Temperature & Humidity Monitoring",
    "description": "An ESP32 + DHT11-powered system that collects and displays real-time environmental data. Designed for remote monitoring using a simple web interface.",
    "link": "#"
  },
  {
    "title": "Personal Portfolio Website",
    "description": "A responsive and dynamic personal website showcasing skills, projects, and contact details. Built using HTML, CSS, JavaScript, and JSON-based data loading.",
    "link": "#"
  },
  {
    "title": "AI Chatbot Tutor (CodeTutor)",
    "description": "An interactive coding assistant that provides explanations, examples, and debugging help for students. Integrated with an AI model using HuggingFace APIs.",
    "link": "#"
  },
  {
    "title": "HireSage",
    "description": "An AI-powered job readiness assistant built with Streamlit and Hugging Face. It offers resume analysis, interview preparation, skill gap insights, and flashcards.",
    "link": "https://huggingface.co/spaces/neuronova/hire-sage"
  }
];

// Theme toggle functionality
const themeBtn = document.getElementById('themeToggle');

// Initialize theme based on user preference or default to dark
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    themeBtn.textContent = '🌙';
  } else {
    themeBtn.textContent = '☀️';
  }
};

// Theme toggle event listener
themeBtn.onclick = () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeBtn.textContent = isLight ? '🌙' : '☀️';
  
  // Save theme preference
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
};

// Load project cards dynamically
const loadProjects = () => {
  const container = document.getElementById('project-list');
  
  projects.forEach((project, index) => {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.style.opacity = '0';
    div.style.transform = 'translateY(50px)';
    div.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" class="project-link">
        View Project →
      </a>
    `;
    
    container.appendChild(div);
    
    // Animate card appearance with stagger effect
    setTimeout(() => {
      div.style.opacity = '1';
      div.style.transform = 'translateY(0)';
    }, index * 100);
  });
};

// Smooth scrolling for navigation links
const initializeSmoothScrolling = () => {
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

// Scroll progress indicator
const updateScrollProgress = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height);
  document.querySelector('.scroll-indicator').style.transform = `scaleX(${scrolled})`;
};

// Intersection Observer for animations
const initializeAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
};

// Add parallax effect to floating shapes
const initializeParallax = () => {
  const shapes = document.querySelectorAll('.shape');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
      const speed = 0.5 + (index * 0.2);
      const yPos = -(scrolled * speed);
      shape.style.transform = `translateY(${yPos}px)`;
    });
  });
};

// Add typing effect to main heading
const initializeTypingEffect = () => {
  const heading = document.querySelector('#about h1');
  const text = heading.innerHTML;
  heading.innerHTML = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heading.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };
  
  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);
};

// Add scroll-triggered animations for contact items
const initializeContactAnimations = () => {
  const contactItems = document.querySelectorAll('.contact-item');
  
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.5 });

  contactItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    contactObserver.observe(item);
  });
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  loadProjects();
  initializeSmoothScrolling();
  initializeAnimations();
  initializeParallax();
  initializeTypingEffect();
  initializeContactAnimations();
  
  // Add scroll event listener for progress indicator
  window.addEventListener('scroll', updateScrollProgress);
  
  // Add resize event listener for responsive adjustments
  window.addEventListener('resize', () => {
    // Recalculate scroll progress on resize
    updateScrollProgress();
  });
});

// Add some interactive hover effects
document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.skill-card, .project-card');
  
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    } else {
      card.style.transform = '';
    }
  });
});

// Add Easter egg - Konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.keyCode);
  if (konamiCode.length > konami.length) {
    konamiCode.shift();
  }
  
  if (konamiCode.join(',') === konami.join(',')) {
    // Easter egg activated!
    document.body.style.animation = 'rainbow 2s infinite';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 10000);
  }
});

// Add rainbow animation for Easter egg
const style = document.createElement('style');
style.textContent = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100%
