const TEXT_EN = "WELCOME TO LH STORE";
const TEXT_AR = "مرحبا بكم في متجر LH";
const COLORS = ["#0e4c65", "#722f37"];
const LETTER_DELAY = 90;

let isArabic = false;

function animateText(targetId, text, isArabicLang = false) {
  const container = document.getElementById(targetId);
  container.innerHTML = '';

  if (isArabicLang) {
    // Animate by words for Arabic
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
    // Animate by letters for English
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

function animateBothTexts() {
  animateText("welcome-text", TEXT_EN, false);
  animateText("welcome-ar", TEXT_AR, true);
}

// Run animation for both texts on load
animateBothTexts();

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
    document.getElementById("sign-or").textContent = "Sign In or";
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
});


updateLanguage();
