    // Initialize AOS Animation
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on a link
    const menuLinks = document.querySelectorAll('.nav-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active-page');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active-page');
            }
        });
    });

    // Gallery Modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.querySelector('.close-modal');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = item.querySelector('img').src;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // You would typically send this data to a server here
        console.log('Form submitted:', { name, email, subject, message });
        
        // Reset form
        contactForm.reset();
        
        // Show success message (you can customize this)
        alert('Thank you for your message! We will get back to you soon.');
    });

    // Stagger Animation for Grid Items
    function animateStaggerItems() {
        const staggerItems = document.querySelectorAll('.stagger-item');
        staggerItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active');
            }, 100 * index);
        });
    }

    // Scroll Animation
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const fadeElements = document.querySelectorAll('.fade-up');
        
        fadeElements.forEach(element => {
            const elementOffset = element.getBoundingClientRect().top + scrollTop;
            const windowHeight = window.innerHeight;
            
            if (scrollTop > (elementOffset - windowHeight + 100)) {
                element.classList.add('active');
            }
        });
    });

    // Run animations on page load
    window.addEventListener('load', () => {
        // Trigger initial animations
        document.querySelectorAll('.fade-up').forEach(el => {
            el.classList.add('active');
        });
        
        // Run stagger animations if any
        animateStaggerItems();
    });
