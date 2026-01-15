// EmailJS Configuration
(function() {
    const PUBLIC_KEY = '2dGwyRq7KgaJLnBei';
    const SERVICE_ID = 'service_qh1jkwg';
    const TEMPLATE_ID = 'template_ezemsjt';
    
    // Initialize EmailJS
    function initEmailJS() {
        if (typeof emailjs !== 'undefined') {
            emailjs.init(PUBLIC_KEY);
            console.log('✓ EmailJS initialized successfully');
            return true;
        }
        return false;
    }

    // Retry EmailJS initialization
    let emailjsRetries = 0;
    const emailjsRetryInterval = setInterval(() => {
        if (initEmailJS()) {
            clearInterval(emailjsRetryInterval);
        }
        emailjsRetries++;
        if (emailjsRetries > 50) {
            clearInterval(emailjsRetryInterval);
            console.warn('⚠ EmailJS failed to initialize, using Formspree fallback');
        }
    }, 200);

    // DOM Ready
    document.addEventListener('DOMContentLoaded', function() {
        console.log('✓ Portfolio loaded successfully');
        setupContactForm();
        setupSmoothScroll();
    });

    // Contact Form Handler
    function setupContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                from_name: document.getElementById('from_name').value.trim(),
                from_email: document.getElementById('from_email').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('message').value.trim()
            };

            // Validation
            if (!formData.from_name || !formData.from_email || !formData.subject || !formData.message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.from_email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            try {
                // Try EmailJS first
                if (typeof emailjs !== 'undefined' && emailjs.send) {
                    await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);
                    console.log('✓ Email sent via EmailJS');
                } else {
                    // Fallback to Formspree
                    await sendViaFormspree(formData);
                }
                
                showNotification('✓ Message sent successfully!', 'success');
                form.reset();
            } catch (error) {
                console.error('Email error:', error);
                // Try Formspree as fallback
                try {
                    await sendViaFormspree(formData);
                    showNotification('✓ Message sent successfully!', 'success');
                    form.reset();
                } catch (fallbackError) {
                    showNotification('Failed to send message. Please try again.', 'error');
                }
            }
        });
    }

    // Formspree Fallback
    async function sendViaFormspree(formData) {
        const response = await fetch('https://formspree.io/f/xblrwdqq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.from_name,
                email: formData.from_email,
                subject: formData.subject,
                message: formData.message
            })
        });

        if (!response.ok) {
            throw new Error('Formspree request failed');
        }
        
        console.log('✓ Email sent via Formspree');
        return response.json();
    }

    // Notification System
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('remove');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Smooth Scroll for Navigation Links
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                // Only prevent default for valid section links
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }

    // Scroll animations for elements
    function setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.project-item, .skill-category, .timeline-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }

    // Initialize scroll animations after DOM loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupScrollAnimations);
    } else {
        setupScrollAnimations();
    }
})();
