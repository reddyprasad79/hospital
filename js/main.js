/**
 * STACKLY MULTISPECIALITY HOSPITAL & HEALTHCARE INSTITUTE
 * Main JavaScript Engine: Scroll Reveal Animations, 3D Flip Cards, 
 * Animated Counters, Theme Toggle, Dual-Role Auth (Patient vs Doctor/Admin),
 * Appointment Booking, Salem Location Map, and Department Filters.
 * Domain: www.stacklyhospital.com | Location: Salem, Tamil Nadu, India
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    initDashboardSidebar();
    initStickyHeader();
    initScrollReveal();
    initAnimatedCounters();
    initFlipCards();
    initDepartmentFilters();
    initFormsAndToasts();
    initBackToTop();
    highlightActivePageNav();
});

/* --------------------------------------------------------------------------
   1. Active Navigation Page Highlighter (Strictly 5 Primary Links)
   -------------------------------------------------------------------------- */
function highlightActivePageNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else if ((currentPath === 'departments.html' || currentPath === 'department-detail.html' || currentPath === 'doctors.html' || currentPath === 'facilities.html') && href === 'services.html') {
            link.classList.add('active');
        } else if (!href.startsWith('#')) {
            link.classList.remove('active');
        }
    });
}

/* --------------------------------------------------------------------------
   2. Dark / Light Theme Toggle with LocalStorage
   -------------------------------------------------------------------------- */
function initTheme() {
    const themeBtns = document.querySelectorAll('.theme-toggle-btn, #themeToggleBtn');
    const savedTheme = localStorage.getItem('stackly_theme') || 'light';

    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('stackly_theme', newTheme);
            updateThemeIcon(newTheme);
            showToast(`Switched to ${newTheme} mode`, 'success');
        });
    });
}

function updateThemeIcon(theme) {
    const themeBtns = document.querySelectorAll('.theme-toggle-btn, #themeToggleBtn');
    themeBtns.forEach(btn => {
        const icon = btn.querySelector('i');
        if (!icon) return;

        if (theme === 'dark') {
            icon.className = 'fa-solid fa-sun';
            btn.setAttribute('title', 'Switch to Light Mode');
            btn.setAttribute('aria-label', 'Switch to Light Mode');
        } else {
            icon.className = 'fa-solid fa-moon';
            btn.setAttribute('title', 'Switch to Dark Mode');
            btn.setAttribute('aria-label', 'Switch to Dark Mode');
        }
    });
}

/* --------------------------------------------------------------------------
   3. Sticky Header with Scroll Shadow
   -------------------------------------------------------------------------- */
function initStickyHeader() {
    const header = document.getElementById('siteHeader');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* --------------------------------------------------------------------------
   4. Mobile Navigation Drawer & Backdrop Toggle
   -------------------------------------------------------------------------- */
function initMobileNav() {
    const toggleBtn = document.getElementById('mobileNavToggle');
    const navMenu = document.getElementById('siteNavMenu');
    if (!toggleBtn || !navMenu) return;

    // Create backdrop if not already existing
    let backdrop = document.querySelector('.mobile-nav-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'mobile-nav-backdrop';
        document.body.appendChild(backdrop);
    }

    function toggleMenu(isOpen) {
        const active = typeof isOpen === 'boolean' ? isOpen : !navMenu.classList.contains('open');
        if (active) {
            navMenu.classList.add('open');
            backdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
            const icon = toggleBtn.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-xmark';
        } else {
            navMenu.classList.remove('open');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
            const icon = toggleBtn.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-bars';
        }
    }

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    backdrop.addEventListener('click', () => {
        toggleMenu(false);
    });

    // Close when clicking any link inside the navigation drawer
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            toggleMenu(false);
        }
    });
}

/* --------------------------------------------------------------------------
   4b. Mobile Dashboard Sidebar Toggle
   -------------------------------------------------------------------------- */
function initDashboardSidebar() {
    const toggleBtns = document.querySelectorAll('#dashSidebarToggle, #adminSidebarToggle');
    const sidebars = document.querySelectorAll('.dashboard-sidebar');
    if (!toggleBtns.length || !sidebars.length) return;

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebars.forEach(sb => sb.classList.toggle('open'));
        });
    });

    document.addEventListener('click', (e) => {
        sidebars.forEach(sb => {
            if (sb.classList.contains('open') && !sb.contains(e.target)) {
                let clickedToggle = false;
                toggleBtns.forEach(b => { if (b.contains(e.target)) clickedToggle = true; });
                if (!clickedToggle) sb.classList.remove('open');
            }
        });
    });
}

/* --------------------------------------------------------------------------
   5. Scroll Reveal Animations (Intersection Observer)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.02,
        rootMargin: '0px 0px 100px 0px'
    });

    reveals.forEach(el => observer.observe(el));

    // Fallback: Ensure no content stays hidden if scrolled fast or on mobile
    setTimeout(() => {
        reveals.forEach(el => el.classList.add('active'));
    }, 1000);
}

/* --------------------------------------------------------------------------
   6. Animated Number Counters
   -------------------------------------------------------------------------- */
function initAnimatedCounters() {
    const counterElements = document.querySelectorAll('.stat-number');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounterAnimation(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    counterElements.forEach(el => observer.observe(el));
}

function startCounterAnimation(el) {
    const target = parseFloat(el.getAttribute('data-target') || el.innerText.replace(/[^0-9.]/g, ''));
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const startTime = performance.now();

    function updateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic calculation
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = isDecimal 
            ? (target * easeProgress).toFixed(1)
            : Math.floor(target * easeProgress).toLocaleString();

        el.innerText = `${prefix}${currentVal}${suffix}`;

        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            el.innerText = `${prefix}${isDecimal ? target.toFixed(1) : target.toLocaleString()}${suffix}`;
        }
    }

    requestAnimationFrame(updateCount);
}

/* --------------------------------------------------------------------------
   7. 3D Flip Cards Interaction (Click & Touch support)
   -------------------------------------------------------------------------- */
function initFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Do not trigger flip if clicking inside an interactive link, button, or input
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('input')) {
                return;
            }
            card.classList.toggle('flipped');
        });
    });
}

/* --------------------------------------------------------------------------
   8. Department & Doctor Filter Tabs
   -------------------------------------------------------------------------- */
function initDepartmentFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('[data-category]');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            filterItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
                    item.style.display = '';
                    setTimeout(() => item.classList.add('active'), 10);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/* --------------------------------------------------------------------------
   9. Form Submissions and Toast Notifications
   -------------------------------------------------------------------------- */
function initFormsAndToasts() {
    // Health Newsletter Form
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (input && input.value) {
                showToast(`Thank you! Weekly health bulletin subscribed for ${input.value}`, 'success');
                input.value = '';
            }
        });
    });

    // Hospital Contact & Emergency Inquiry Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName')?.value || 'Patient';
            const dept = document.getElementById('contactDept')?.value || 'General Medicine';
            showToast(`Thank you, ${name}! Your inquiry for ${dept} has been dispatched to Stackly Hospital Salem team.`, 'success');
            contactForm.reset();
        });
    }

    // Sign In Form (Dual-Role: Patient vs Doctor/Admin)
    const signinForm = document.getElementById('signinForm');
    if (signinForm) {
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const selectedRole = document.getElementById('selectedRole')?.value || 'client';
            const email = document.getElementById('signinEmail')?.value || 'patient@stacklyhospital.com';
            let name = email.split('@')[0];
            name = name.charAt(0).toUpperCase() + name.slice(1);

            if (selectedRole === 'admin') {
                showToast(`Welcome Doctor/Admin ${name}! Opening Salem Hospital Operations Panel...`, 'success');
                setTimeout(() => {
                    window.location.href = 'admin-dashboard.html';
                }, 1000);
            } else {
                showToast(`Welcome back, ${name}! Opening Patient Health Portal...`, 'success');
                setTimeout(() => {
                    window.location.href = `dashboard.html?name=${encodeURIComponent(name)}`;
                }, 1000);
            }
        });
    }

    // Doctor Consultation & Appointment Booking Form
    const appointmentForm = document.getElementById('getStartedForm') || document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const patientName = document.getElementById('applicantName')?.value || document.getElementById('patientName')?.value || 'Patient';
            const doctorDept = document.getElementById('applicantProgram')?.value || document.getElementById('appointmentDept')?.value || 'Cardiology & Heart Care';
            const bookingToken = 'STK-APT-' + Math.floor(1000 + Math.random() * 9000);
            
            showToast(`Appointment Confirmed! Token #${bookingToken} generated for ${patientName} (${doctorDept}). Opening Patient Portal...`, 'success');
            setTimeout(() => {
                window.location.href = `dashboard.html?booked=true&token=${bookingToken}&name=${encodeURIComponent(patientName)}&dept=${encodeURIComponent(doctorDept)}`;
            }, 1200);
        });
    }
}

function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const iconClass = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-exclamation';
    
    toast.innerHTML = `
        <i class="${iconClass}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 50);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

/* --------------------------------------------------------------------------
   10. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
    let backBtn = document.getElementById('backToTopBtn');
    if (!backBtn) {
        backBtn = document.createElement('button');
        backBtn.id = 'backToTopBtn';
        backBtn.className = 'back-to-top';
        backBtn.setAttribute('title', 'Back to top');
        backBtn.setAttribute('aria-label', 'Back to top');
        backBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
        document.body.appendChild(backBtn);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            backBtn.classList.add('visible');
        } else {
            backBtn.classList.remove('visible');
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* --------------------------------------------------------------------------
   11. Role Switcher for Sign In (Patient vs Doctor / Hospital Admin)
   -------------------------------------------------------------------------- */
function selectRole(role) {
    const clientBtn = document.getElementById('clientRoleBtn');
    const adminBtn = document.getElementById('adminRoleBtn');
    const selectedRoleInput = document.getElementById('selectedRole');
    const authTitle = document.getElementById('authTitle');
    const authSubtitle = document.getElementById('authSubtitle');
    const emailLabel = document.getElementById('emailLabel');
    const emailInput = document.getElementById('signinEmail');
    const submitBtnText = document.getElementById('signInBtnText');

    if (role === 'admin') {
        if (adminBtn) adminBtn.classList.add('active');
        if (clientBtn) clientBtn.classList.remove('active');
        if (selectedRoleInput) selectedRoleInput.value = 'admin';
        if (authTitle) authTitle.innerText = 'Doctor & Hospital Administrator Portal';
        if (authSubtitle) authSubtitle.innerText = 'Sign in with clinical credentials to manage Salem hospital operations & ICU beds';
        if (emailLabel) emailLabel.innerText = 'Doctor / Staff ID Email';
        if (emailInput) {
            emailInput.placeholder = 'dr.admin@stacklyhospital.com';
            emailInput.value = 'dr.admin@stacklyhospital.com';
        }
        if (submitBtnText) submitBtnText.innerText = 'Sign In to Hospital Admin';
        showToast('Switched to Doctor / Hospital Admin Portal', 'success');
    } else {
        if (clientBtn) clientBtn.classList.add('active');
        if (adminBtn) adminBtn.classList.remove('active');
        if (selectedRoleInput) selectedRoleInput.value = 'client';
        if (authTitle) authTitle.innerText = 'Patient Health Portal';
        if (authSubtitle) authSubtitle.innerText = 'Access your medical records, Salem hospital OPD appointments, and digital lab reports';
        if (emailLabel) emailLabel.innerText = 'Patient Registered Email or Phone';
        if (emailInput) {
            emailInput.placeholder = 'patient@stacklyhospital.com';
            emailInput.value = 'patient.rajesh@stacklyhospital.com';
        }
        if (submitBtnText) submitBtnText.innerText = 'Sign In to Patient Portal';
        showToast('Switched to Patient Health Portal', 'success');
    }
}
window.selectRole = selectRole;

/* --------------------------------------------------------------------------
   12. Health Checkup Package Calculator Handler
   -------------------------------------------------------------------------- */
function calculateHealthPackage(e) {
    if (e) e.preventDefault();
    const age = parseInt(document.getElementById('patientAge')?.value) || 45;
    const baseFee = parseFloat(document.getElementById('packageSelect')?.value) || 2999;
    const insuranceType = document.getElementById('insuranceSelect')?.value || 'none';

    let discountPercent = 0;
    if (insuranceType === 'star_health' || insuranceType === 'hdfc_ergo') {
        discountPercent = 20;
    } else if (insuranceType === 'senior') {
        discountPercent = 25;
    }

    if (age >= 60) {
        discountPercent = Math.max(discountPercent, 30);
    }

    const discountAmount = (baseFee * discountPercent) / 100;
    const finalFee = Math.round(baseFee - discountAmount);

    const resultBox = document.getElementById('packageResult');
    if (resultBox) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = `
            <div style="padding: 16px; background: rgba(2, 132, 199, 0.08); border-radius: 12px; border: 1px solid var(--primary);">
                <div style="font-size: 0.85rem; color: var(--text-muted);">Estimated Patient Payable:</div>
                <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary);">₹${finalFee.toLocaleString('en-IN')}</div>
                <div style="font-size: 0.8rem; color: #10b981; font-weight: 600;">Includes ₹${discountAmount.toLocaleString('en-IN')} (${discountPercent}%) Cashless/Age Subsidy</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">*Includes 48 clinical lab parameters, ECG, and Salem doctor consultation.</div>
            </div>
        `;
    }
}
window.calculateHealthPackage = calculateHealthPackage;

/* --------------------------------------------------------------------------
   13. Ultra-Modern 3D Interactive Card Tilt Engine
   -------------------------------------------------------------------------- */
function initModernTilt() {
    const tiltElements = document.querySelectorAll('.doctor-card, .dept-card, .health-pkg-card, .course-card, .testimonial-card, .metric-card, .floating-badge');
    
    // Only apply on non-touch desktop devices for high performance
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        tiltElements.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg
                const rotateY = ((x - centerX) / centerX) * 6;  // Max 6 deg
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
}

// Initialize tilt after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initModernTilt();
});
