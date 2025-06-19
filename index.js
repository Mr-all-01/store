// Welcome text animation
const TEXT_EN = "WELCOME TO LH STORE";
const TEXT_AR = "مرحبا بكم في متجر LH";
const COLORS = ["#0e4c65", "#722f37"];
const LETTER_DELAY = 90;

let isArabic = false;

function animateText(targetId, text, isArabicLang = false) {
  const container = document.getElementById(targetId);
  container.innerHTML = '';

  if (isArabicLang) {
    const words = text.split(' ');
    words.forEach((word, i) => {
      setTimeout(() => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.style.color = COLORS[i % COLORS.length];
        span.textContent = word + ' ';
        container.appendChild(span);
      }, LETTER_DELAY * i * 4);
    });
  } else {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.style.color = COLORS[i % COLORS.length];
        span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
        container.appendChild(span);
      }, LETTER_DELAY * i);
    }
  }
}

animateText("welcome-text", TEXT_EN, false);
animateText("welcome-ar", TEXT_AR, true);

function updateLanguage() {
  if (isArabic) {
    document.documentElement.lang = "ar";
    document.body.dir = "rtl";
    document.getElementById("lang-toggle").textContent = "English";
    document.getElementById("title").textContent = "متجر LH";
    document.getElementById("header-title").textContent = "متجر LH";
    document.getElementById("email").placeholder = "البريد الإلكتروني";
    document.getElementById("password").placeholder = "كلمة المرور";
    document.getElementById("submit-btn").textContent = "تسجيل الدخول";
    document.getElementById("sign-or").textContent = "أو";
    document.getElementById("create-link").textContent = "إنشاء حساب";
    document.getElementById("about_us").textContent = "من نحن";
    document.getElementById("home").textContent = "الصفحة الرئسية";
    document.getElementById("profile-link").innerHTML = `<i class="fas fa-user"></i> الملف الشخصي`;
  } else {
    document.documentElement.lang = "en";
    document.body.dir = "ltr";
    document.getElementById("lang-toggle").textContent = "العربية";
    document.getElementById("title").textContent = "LH Store";
    document.getElementById("header-title").textContent = "LH Store";
    document.getElementById("email").placeholder = "Email";
    document.getElementById("password").placeholder = "Password";
    document.getElementById("submit-btn").textContent = "Sign In";
    document.getElementById("sign-or").textContent = "or";
    document.getElementById("create-link").textContent = "Create Account";
    document.getElementById("about_us").textContent = "about us";
    document.getElementById("home").textContent = "home";
    document.getElementById("profile-link").innerHTML = `<i class="fas fa-user"></i> Profile`;
  }
}

function Log_In(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const log = document.getElementById("login-message");
  if (email === "hamadi@gmail.com" && password === "12345") {
    window.location.href = "page.html";
  } else {
    log.textContent = isArabic ? "حاول مرة أخرى من فضلك" : "Try again please";
  }
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  isArabic = !isArabic;
  updateLanguage();
  setTimeout(updateEyeRTL, 8);
});

updateLanguage();

// Password eye animation and toggle
const passwordInput = document.getElementById('password');
const toggle = document.getElementById('togglePassword');
const beam = document.getElementById('beam');
let passwordVisible = false;

function updateEyeIcon() {
  if (passwordVisible) {
    toggle.classList.remove('closed');
    passwordInput.type = "text";
  } else {
    toggle.classList.add('closed');
    passwordInput.type = "password";
  }
}

function animateBeam() {
  beam.classList.remove('animate');
  void beam.offsetWidth;
  beam.classList.add('animate');
  setTimeout(() => {
    beam.classList.remove('animate');
  }, 400);
}

toggle.addEventListener('click', () => {
  passwordVisible = !passwordVisible;
  updateEyeIcon();
  animateBeam();
});
toggle.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    passwordVisible = !passwordVisible;
    updateEyeIcon();
    animateBeam();
  }
});
updateEyeIcon();

function updateEyeRTL() {}

document.addEventListener('DOMContentLoaded', function () {
  const socialToggle = document.querySelector('.social-toggle');
  if (socialToggle) {
    socialToggle.addEventListener('click', function (e) {
      if (e.target.tagName.toLowerCase() !== "a") {
        socialToggle.classList.toggle('active');
      }
    });
    document.addEventListener('click', function (e) {
      if (!socialToggle.contains(e.target)) {
        socialToggle.classList.remove('active');
      }
    });
    socialToggle.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        socialToggle.classList.toggle('active');
      }
    });
  }
});

// Responsive Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");
  const navbarClose = document.getElementById("navbar-close");
  const navbarOverlay = document.getElementById("navbar-overlay");
  
  function toggleMenu() {
    const isOpen = navbarMenu.classList.toggle("open");
    navbarToggle.classList.toggle("open");
    navbarOverlay.classList.toggle("active");
    document.body.classList.toggle("menu-active");
    navbarToggle.setAttribute("aria-expanded", isOpen);
    navbarOverlay.setAttribute("aria-hidden", !isOpen);
    
    
    if (isOpen) {
      setTimeout(() => {
        const firstFocusable = navbarMenu.querySelector('a, button:not(.navbar-close), [tabindex="0"]');
        firstFocusable?.focus();
      }, 100);
    } else {
      navbarToggle.focus();
    }
  }

  function closeMenu() {
    navbarMenu.classList.remove("open");
    navbarToggle.classList.remove("open");
    navbarOverlay.classList.remove("active");
    document.body.classList.remove("menu-active");
    navbarToggle.setAttribute("aria-expanded", "false");
    navbarOverlay.setAttribute("aria-hidden", "true");
    navbarToggle.focus();
  }

  // Event listeners
  navbarToggle.addEventListener("click", toggleMenu);
  navbarClose?.addEventListener("click", closeMenu);
  navbarOverlay?.addEventListener("click", closeMenu);

  // Close menu when clicking on regular links (not toggles)
  navbarMenu?.querySelectorAll('a:not(.social-toggle), button:not(.navbar-close):not(#darkModeToggle):not(#lang-toggle)').forEach(el => {
    el.addEventListener('click', closeMenu);
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && navbarMenu.classList.contains("open")) {
      closeMenu();
    }
  });
});

// dark-mode
const dark = document.getElementById('darkModeToggle');
dark.addEventListener('click', function(e) {
  // Prevent this click from closing the menu
  e.stopPropagation();
  e.stopImmediatePropagation();
  
  // Toggle dark mode
  document.body.classList.toggle('dark-mode');
  dark.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌕";
  
  // Force browser to recalculate layouts
  void document.body.offsetHeight;
});

