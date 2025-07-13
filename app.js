// Enhanced VoidPrakash Website JavaScript - Fixed Version

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initContactForm();
    initScrollEffects();
    initMobileMenu();
    initResearchSection();
    initPillarInteractions();
    initParticleEffect();
    initLogoAnimations();
    initAdvancedFeatures();
    
    console.log('Enhanced VoidPrakash website loaded successfully');
});

// Fixed Logo Animations and Interactions
function initLogoAnimations() {
    const headerLogo = document.querySelector('.logo--header svg');
    const heroLogo = document.querySelector('.logo--hero svg');
    const sectionLogo = document.querySelector('.logo--section svg');
    
    // Enhanced header logo hover effect
    if (headerLogo) {
        const logoContainer = headerLogo.parentElement;
        logoContainer.style.cursor = 'pointer';
        
        logoContainer.addEventListener('mouseenter', function() {
            headerLogo.style.transition = 'all 0.3s ease';
            headerLogo.style.transform = 'rotate(15deg) scale(1.1)';
            headerLogo.style.filter = 'drop-shadow(0 0 12px rgba(255, 153, 0, 0.8))';
        });
        
        logoContainer.addEventListener('mouseleave', function() {
            headerLogo.style.transform = 'rotate(0deg) scale(1)';
            headerLogo.style.filter = 'drop-shadow(0 0 8px rgba(255, 153, 0, 0.4))';
        });
        
        logoContainer.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Enhanced hero logo with click interaction
    if (heroLogo) {
        heroLogo.style.cursor = 'pointer';
        heroLogo.style.transition = 'all 0.3s ease';
        
        heroLogo.addEventListener('click', function() {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.2) rotate(360deg)';
            this.style.filter = 'drop-shadow(0 0 30px rgba(255, 153, 0, 0.8))';
            
            setTimeout(() => {
                this.style.animation = 'float 6s ease-in-out infinite';
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.filter = 'drop-shadow(0 0 20px rgba(255, 153, 0, 0.3))';
            }, 600);
            
            triggerParticleBurst();
        });
        
        heroLogo.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 25px rgba(255, 153, 0, 0.6))';
        });
        
        heroLogo.addEventListener('mouseleave', function() {
            this.style.filter = 'drop-shadow(0 0 20px rgba(255, 153, 0, 0.3))';
        });
    }
    
    // Section logo intersection observer
    if (sectionLogo) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1) rotate(360deg)';
                    entry.target.style.filter = 'drop-shadow(0 0 15px rgba(255, 153, 0, 0.5))';
                    
                    setTimeout(() => {
                        entry.target.style.transform = 'scale(1) rotate(0deg)';
                    }, 600);
                }
            });
        }, { threshold: 0.5 });
        
        sectionLogo.style.opacity = '0';
        sectionLogo.style.transform = 'scale(0.8)';
        sectionLogo.style.transition = 'all 0.6s ease-out';
        observer.observe(sectionLogo);
    }
}

// Enhanced Particle Effect for Hero Section
function initParticleEffect() {
    const particlesContainer = document.querySelector('.hero__particles');
    if (!particlesContainer) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    particlesContainer.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = particlesContainer.offsetWidth;
        canvas.height = particlesContainer.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles = [];
    const particleCount = 60;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.speedY = (Math.random() - 0.5) * 0.8;
            this.opacity = Math.random() * 0.5 + 0.3;
            this.color = `rgba(255, 153, 0, ${this.opacity})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 153, 0, ${0.15 * (1 - distance / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function triggerParticleBurst() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    for (let i = 0; i < 8; i++) {
        const burst = document.createElement('div');
        burst.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 6px;
            height: 6px;
            background: radial-gradient(circle, #ff9900, #ffb84d);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10;
            animation: burstEffect${i} 1.5s ease-out forwards;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes burstEffect${i} {
                0% { 
                    transform: translate(-50%, -50%) scale(0) rotate(0deg);
                    opacity: 1;
                }
                100% { 
                    transform: translate(-50%, -50%) scale(3) rotate(${360 * (i + 1)}deg) translate(${50 + i * 10}px, 0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        heroSection.appendChild(burst);
        
        setTimeout(() => {
            if (burst.parentNode) burst.parentNode.removeChild(burst);
            if (style.parentNode) style.parentNode.removeChild(style);
        }, 1500);
    }
}

// Fixed Enhanced Pillar Interactions
function initPillarInteractions() {
    const pillarCards = document.querySelectorAll('.pillar__card');
    const pillarActions = document.querySelectorAll('.pillar__actions button');
    
    pillarCards.forEach(card => {
        const logo = card.querySelector('.pillar__logo svg');
        
        card.addEventListener('mouseenter', function() {
            if (logo) {
                logo.style.transition = 'all 0.3s ease';
                logo.style.transform = 'scale(1.15) rotate(10deg)';
                logo.style.filter = 'drop-shadow(0 0 15px rgba(255, 153, 0, 0.6))';
            }
            
            this.style.background = 'linear-gradient(135deg, white 0%, rgba(255, 153, 0, 0.05) 100%)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (logo) {
                logo.style.transform = 'scale(1) rotate(0deg)';
                logo.style.filter = 'none';
            }
            this.style.background = 'white';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    pillarActions.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.dataset.action;
            const pillarCard = this.closest('.pillar__card');
            let pillarType = 'research';
            
            if (pillarCard.classList.contains('pillar__card--engineering')) {
                pillarType = 'engineering';
            } else if (pillarCard.classList.contains('pillar__card--finance')) {
                pillarType = 'finance';
            }
            
            handlePillarAction(action, pillarType, this);
        });
    });
}

function handlePillarAction(action, pillarType, button) {
    const originalText = button.textContent;
    
    // Show loading state
    button.textContent = 'Processing...';
    button.disabled = true;
    button.style.opacity = '0.7';
    
    // Add loading spinner
    const spinner = document.createElement('span');
    spinner.innerHTML = ' ⟳';
    spinner.style.animation = 'spin 1s linear infinite';
    button.appendChild(spinner);
    
    setTimeout(() => {
        // Remove spinner
        if (spinner.parentNode) {
            spinner.parentNode.removeChild(spinner);
        }
        
        // Populate contact form
        populateContactForm(action, pillarType);
        
        // Reset button
        button.textContent = originalText;
        button.disabled = false;
        button.style.opacity = '1';
        
        // Show success message
        showFloatingMessage(getActionMessage(action, pillarType), 'success');
        
        // Scroll to contact form
        scrollToContactForm();
        
        // Track event
        trackEvent('pillar_action', { action, pillarType });
        
    }, 1200);
}

function getActionMessage(action, pillarType) {
    const messages = {
        collaborate: `Collaboration form prepared for ${pillarType}`,
        summary: `Research summary request ready for ${pillarType}`,
        volunteer: `Volunteer application prepared for ${pillarType}`,
        demo: `Demo request prepared for ${pillarType} services`,
        partner: `Partnership inquiry ready for ${pillarType}`,
        consult: `Consultation booking prepared for ${pillarType}`,
        'partner-vp': 'Strategic partnership inquiry prepared',
        investment: 'Investment information request ready',
        thinkcircle: 'ThinkCircle membership application prepared'
    };
    
    return messages[action] || 'Contact form prepared for your inquiry';
}

function populateContactForm(action, pillarType) {
    const subjectSelect = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    
    if (!subjectSelect || !messageTextarea) return;
    
    let subjectValue = '';
    let messageTemplate = '';
    
    // Set subject based on pillar type
    switch (pillarType) {
        case 'research':
            subjectValue = 'research';
            break;
        case 'engineering':
            subjectValue = 'engineering';
            break;
        case 'finance':
            subjectValue = 'investment';
            break;
    }
    
    // Set message based on action
    const messageTemplates = {
        collaborate: `I am interested in collaborating on ${pillarType} initiatives. Please provide information about current collaboration opportunities and how I can contribute to your projects.`,
        summary: `I would like to request a detailed summary of your ${pillarType} research and current initiatives. Please send me comprehensive information about ongoing projects and findings.`,
        volunteer: `I am interested in volunteering with VoidPrakash ${pillarType} initiatives. Please let me know about current volunteer opportunities and how I can support your mission.`,
        demo: `I would like to request a demonstration of your ${pillarType} services. Please schedule a demo session to showcase your capabilities and solutions.`,
        partner: `I am interested in partnering with VoidPrakash for ${pillarType} services. Please provide information about partnership opportunities and collaboration frameworks.`,
        consult: `I would like to book a consultation for ${pillarType} services. Please let me know your availability and consultation process.`,
        'partner-vp': `I am interested in establishing a strategic partnership with VoidPrakash. Our organization aligns with your vision and we would like to explore collaboration opportunities.`,
        investment: `I would like to learn more about VoidPrakash's investment models and opportunities. Please provide detailed information about your investment frameworks and current opportunities.`,
        thinkcircle: `I am interested in joining VoidPrakash's ThinkCircle. Please provide information about membership requirements, benefits, and the application process.`
    };
    
    messageTemplate = messageTemplates[action] || `I am interested in ${pillarType} services and would like to learn more.`;
    
    // Animate form population
    subjectSelect.style.transition = 'all 0.3s ease';
    messageTextarea.style.transition = 'all 0.3s ease';
    
    subjectSelect.value = subjectValue;
    messageTextarea.value = messageTemplate;
    
    // Visual feedback
    subjectSelect.style.borderColor = '#ff9900';
    subjectSelect.style.boxShadow = '0 0 0 2px rgba(255, 153, 0, 0.3)';
    messageTextarea.style.borderColor = '#ff9900';
    messageTextarea.style.boxShadow = '0 0 0 2px rgba(255, 153, 0, 0.3)';
    
    setTimeout(() => {
        subjectSelect.style.borderColor = '';
        subjectSelect.style.boxShadow = '';
        messageTextarea.style.borderColor = '';
        messageTextarea.style.boxShadow = '';
    }, 2000);
}

function scrollToContactForm() {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;
    
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = contactSection.offsetTop - headerHeight - 20;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    
    setTimeout(() => {
        const nameField = document.getElementById('name');
        if (nameField) {
            nameField.focus();
            nameField.style.transition = 'all 0.3s ease';
            nameField.style.borderColor = '#ff9900';
            nameField.style.boxShadow = '0 0 0 3px rgba(255, 153, 0, 0.3)';
            
            setTimeout(() => {
                nameField.style.borderColor = '';
                nameField.style.boxShadow = '';
            }, 2000);
        }
    }, 800);
}

// Fixed Enhanced Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                closeMobileMenu();
                trackEvent('navigation_click', { target: targetId });
            }
        });
    });
    
    // Enhanced active navigation highlighting
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 150;
        let activeSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSection = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeSection}`) {
                link.classList.add('active');
                
                // Enhanced visual feedback
                link.style.color = '#ff9900';
                link.style.textShadow = '0 0 10px rgba(255, 153, 0, 0.5)';
            } else {
                link.style.color = '';
                link.style.textShadow = '';
            }
        });
    }
    
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveNav, 10);
    });
    
    updateActiveNav();
}

// Fixed Research Section functionality
function initResearchSection() {
    const expandButtons = document.querySelectorAll('.project__expand-btn');
    const supportActions = document.querySelectorAll('.support__actions .btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const detailsElement = document.getElementById(`details-${targetId}`);
            const projectCard = this.closest('.project__card');
            
            if (detailsElement) {
                const isExpanded = detailsElement.classList.contains('expanded');
                
                if (isExpanded) {
                    detailsElement.classList.remove('expanded');
                    this.textContent = 'Learn More';
                    this.classList.remove('expanded');
                    projectCard.style.transform = '';
                } else {
                    detailsElement.classList.add('expanded');
                    this.textContent = 'Show Less';
                    this.classList.add('expanded');
                    
                    projectCard.style.transform = 'translateY(-4px)';
                    projectCard.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
                    
                    setTimeout(() => {
                        projectCard.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest'
                        });
                    }, 300);
                    
                    trackEvent('project_expand', { project: targetId });
                }
            }
        });
    });
    
    // Fixed support action handlers
    supportActions.forEach(button => {
        button.addEventListener('click', function() {
            const buttonId = this.id;
            let action = '';
            
            switch (buttonId) {
                case 'apply-collaborate':
                    action = 'collaborate';
                    break;
                case 'request-summary':
                    action = 'summary';
                    break;
                case 'join-volunteer':
                    action = 'volunteer';
                    break;
            }
            
            if (action) {
                handlePillarAction(action, 'research', this);
            }
        });
    });
    
    // Enhanced project card hover effects
    const projectCards = document.querySelectorAll('.project__card');
    projectCards.forEach(card => {
        const icon = card.querySelector('.project__icon');
        
        card.addEventListener('mouseenter', function() {
            if (icon) {
                icon.style.transition = 'all 0.3s ease';
                icon.style.transform = 'scale(1.3) rotate(15deg)';
                icon.style.textShadow = '0 0 15px rgba(255, 153, 0, 0.8)';
            }
            
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.textShadow = 'none';
            }
            
            if (!this.querySelector('.project__expand-btn').classList.contains('expanded')) {
                this.style.transform = '';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
        
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
    }
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu && navToggle) {
        const isOpen = navMenu.classList.contains('nav__menu--open');
        isOpen ? closeMobileMenu() : openMobileMenu();
    }
}

function openMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu && navToggle) {
        navMenu.classList.add('nav__menu--open');
        navToggle.classList.add('nav__toggle--open');
        document.body.style.overflow = 'hidden';
        
        const menuItems = navMenu.querySelectorAll('.nav__item');
        menuItems.forEach((item, index) => {
            item.style.animation = `slideInLeft 0.3s ease-out ${index * 0.1}s both`;
        });
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu && navToggle) {
        navMenu.classList.remove('nav__menu--open');
        navToggle.classList.remove('nav__toggle--open');
        document.body.style.overflow = '';
        
        const menuItems = navMenu.querySelectorAll('.nav__item');
        menuItems.forEach(item => {
            item.style.animation = '';
        });
    }
}

// Enhanced Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactFormSubmission(this);
        });
        
        const formInputs = contactForm.querySelectorAll('.form-control');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
                if (this.name === 'message') {
                    updateCharacterCount(this);
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.transition = 'all 0.3s ease';
                this.style.borderColor = '#ff9900';
                this.style.boxShadow = '0 0 0 2px rgba(255, 153, 0, 0.2)';
            });
            
            input.addEventListener('blur', function() {
                if (!this.value && !this.closest('.form-group').querySelector('.field-error')) {
                    this.style.borderColor = '';
                    this.style.boxShadow = '';
                }
            });
        });
    }
}

function updateCharacterCount(textarea) {
    let counter = textarea.parentNode.querySelector('.char-counter');
    
    if (!counter) {
        counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = `
            font-size: 12px;
            color: #666;
            text-align: right;
            margin-top: 4px;
            transition: color 0.3s ease;
        `;
        textarea.parentNode.appendChild(counter);
    }
    
    const length = textarea.value.length;
    const maxLength = 500;
    counter.textContent = `${length}/${maxLength} characters`;
    
    if (length > maxLength * 0.8) {
        counter.style.color = '#ff9900';
    } else {
        counter.style.color = '#666';
    }
}

function handleContactFormSubmission(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    if (!validateForm(form)) {
        return;
    }
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    form.classList.add('loading');
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #ff9900, #ffb84d);
        transition: width 2s ease-out;
        margin-top: 8px;
        border-radius: 2px;
    `;
    submitButton.parentNode.appendChild(progressBar);
    
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 100);
    
    const formData = new FormData(form);
    
    setTimeout(() => {
        showFormMessage('Thank you! We\'ll get back to you within 24 hours.', 'success');
        form.reset();
        
        submitButton.textContent = 'Message Sent!';
        submitButton.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.background = '';
            submitButton.disabled = false;
            form.classList.remove('loading');
            
            if (progressBar.parentNode) {
                progressBar.parentNode.removeChild(progressBar);
            }
        }, 2000);
        
        trackEvent('contact_form_submit', {
            subject: formData.get('subject'),
            message_length: formData.get('message').length
        });
        
    }, 2000);
}

function validateForm(form) {
    const fields = form.querySelectorAll('.form-control');
    let isValid = true;
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    clearFieldError(field);
    
    if (field.hasAttribute('required') && !value) {
        errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
        isValid = false;
    }
    
    if (fieldName === 'email' && value) {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid email address';
            isValid = false;
        }
    }
    
    if (fieldName === 'message' && value) {
        if (value.length < 10) {
            errorMessage = 'Message should be at least 10 characters long';
            isValid = false;
        } else if (value.length > 500) {
            errorMessage = 'Message should not exceed 500 characters';
            isValid = false;
        }
    }
    
    if (fieldName === 'name' && value && value.length < 2) {
        errorMessage = 'Name should be at least 2 characters long';
        isValid = false;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    if (formGroup) {
        const existingError = formGroup.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #c0152f;
            font-size: 12px;
            margin-top: 4px;
            animation: slideInDown 0.3s ease-out;
        `;
        
        formGroup.appendChild(errorDiv);
        
        field.style.borderColor = '#c0152f';
        field.style.boxShadow = '0 0 0 2px rgba(192, 21, 47, 0.1)';
    }
}

function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    if (formGroup) {
        const errorDiv = formGroup.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
        
        field.style.borderColor = '';
        field.style.boxShadow = '';
    }
}

function showFormMessage(message, type = 'info') {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message status--${type}`;
    messageDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 18px;">${type === 'success' ? '✓' : 'ℹ'}</span>
            <span>${message}</span>
        </div>
    `;
    messageDiv.style.cssText = `
        margin-top: 16px;
        padding: 12px 16px;
        border-radius: 8px;
        text-align: center;
        animation: slideInUp 0.5s ease-out;
    `;
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.parentNode.insertBefore(messageDiv, contactForm.nextSibling);
        
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.opacity = '0';
                messageDiv.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    messageDiv.remove();
                }, 300);
            }
        }, 5000);
    }
}

function showFloatingMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `floating-message status--${type}`;
    messageDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 16px;">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
            <span>${message}</span>
        </div>
    `;
    messageDiv.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        z-index: 9999;
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
        backdrop-filter: blur(10px);
        background: white;
        border: 1px solid #ddd;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 300);
    }, 3000);
}

// Enhanced Scroll effects
function initScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = 0;
    
    function updateHeaderOnScroll() {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = currentScrollY;
        
        if (currentScrollY > 50) {
            header.style.background = 'rgba(15, 26, 44, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            header.style.borderBottomColor = 'rgba(255, 153, 0, 0.3)';
        } else {
            header.style.background = 'rgba(15, 26, 44, 0.95)';
            header.style.boxShadow = 'none';
            header.style.borderBottomColor = 'rgba(255, 153, 0, 0.2)';
        }
        
        if (currentScrollY > 200) {
            header.style.transform = scrollDirection === 'down' ? 'translateY(-100%)' : 'translateY(0)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    }
    
    window.addEventListener('scroll', throttle(updateHeaderOnScroll, 10));
    updateHeaderOnScroll();
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                if (entry.target.parentElement && 
                    (entry.target.parentElement.classList.contains('projects__grid') ||
                     entry.target.parentElement.classList.contains('pillars__grid'))) {
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const animateElements = document.querySelectorAll(
        '.pillar__card, .project__card, .insight__card, .service__card, .opportunity__item, .value__item'
    );
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        }, 16));
    }
}

// Advanced Features
function initAdvancedFeatures() {
    addScrollToTop();
    initKeyboardShortcuts();
    addAdvancedAnimations();
}

function addScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #ff9900, #ffb84d);
        color: #0f1a2c;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(255, 153, 0, 0.4);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    const toggleScrollToTop = throttle(() => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    }, 100);
    
    window.addEventListener('scroll', toggleScrollToTop);
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        trackEvent('scroll_to_top_click');
    });
    
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.transform = 'scale(1.1) rotate(15deg)';
        scrollToTopBtn.style.boxShadow = '0 6px 20px rgba(255, 153, 0, 0.6)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.transform = 'scale(1) rotate(0deg)';
        scrollToTopBtn.style.boxShadow = '0 4px 12px rgba(255, 153, 0, 0.4)';
    });
}

function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
        
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    const nameField = document.getElementById('name');
                    if (nameField) nameField.focus();
                }, 500);
            }
        }
        
        if (e.key === 'Enter' && e.target.classList.contains('project__expand-btn')) {
            e.target.click();
        }
    });
}

function addAdvancedAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        .project__card:hover .project__icon {
            animation: pulse 1s ease-in-out;
        }
        
        .btn:active {
            transform: scale(0.98);
        }
        
        .floating-message {
            animation: slideInRight 0.3s ease-out;
        }
        
        @media (max-width: 768px) {
            .nav__menu {
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #0f1a2c, #1a2a3f);
                backdrop-filter: blur(10px);
                flex-direction: column;
                padding: 20px;
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                z-index: 999;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            }
            
            .nav__menu--open {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav__item {
                margin: 8px 0;
            }
            
            .nav__link {
                color: white;
                font-size: 16px;
                padding: 12px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                display: block;
                transition: all 0.3s ease;
            }
            
            .nav__link:hover {
                color: #ff9900;
                padding-left: 8px;
            }
            
            .nav__toggle--open span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .nav__toggle--open span:nth-child(2) {
                opacity: 0;
            }
            
            .nav__toggle--open span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Utility functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Analytics tracking
function trackEvent(eventName, eventData = {}) {
    console.log(`Event tracked: ${eventName}`, eventData);
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    trackEvent('javascript_error', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno
    });
});

window.addEventListener('online', function() {
    showFloatingMessage('Connection restored', 'success');
});

window.addEventListener('offline', function() {
    showFloatingMessage('You are currently offline', 'warning');
});