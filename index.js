// Welcome text animation
const TEXT_EN = "WELCOME TO LH STORE";
const TEXT_AR = "مرحبا بكم في متجر LH";
const COLORS = ["#0e4c65", "#722f37"];
const LETTER_DELAY = 90;

let isArabic = false;

// Animate welcome text
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

//update language en and arb
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
  // Sync the icon with the state
  if (passwordVisible) {
    toggle.classList.remove('closed'); // Show "eye" (open)
    passwordInput.type = "text";
  } else {
    toggle.classList.add('closed');    // Show "eye-slash" (closed)
    passwordInput.type = "password";
  }
}

function animateBeam() {
  beam.classList.remove('animate');
  void beam.offsetWidth; // Force reflow for animation restart
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

function updateEyeRTL() {
  
}

// Social media icon toggle (mobile)
const socialToggle = document.querySelector('.social-toggle');
let isTouch = false;

if (socialToggle) {
  socialToggle.addEventListener('touchstart', () => {
    socialToggle.classList.add('active');
    isTouch = true;
  });
  socialToggle.addEventListener('touchend', () => {
    setTimeout(() => {
      socialToggle.classList.remove('active');
    }, 900);
  });
}
