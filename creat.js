let isArabic = false;

const TEXTS = {
  en: {
    title: "Create Account",
    formTitle: "Create Account",
    firstName: "First Name",
    lastName: "Last Name",
    gender: "Gender:",
    male: "Male",
    female: "Female",
    email: "Email",
    password: "Password",
    password2: "Retype Password",
    submit: "Create Account",
    success: "Account created successfully!",
    error: "Please fill out all fields correctly.",
    passwordShort: "Password must be at least 6 characters.",
    passwordWeak: "Password must contain a number and a letter.",
    passwordNotMatch: "Passwords do not match.",
    langToggle: "العربية",
  },
  ar: {
    title: "إنشاء حساب",
    formTitle: "إنشاء حساب",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    gender: "الجنس:",
    male: "ذكر",
    female: "أنثى",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    password2: "أعد كتابة كلمة المرور",
    submit: "إنشاء الحساب",
    success: "تم إنشاء الحساب بنجاح!",
    error: "يرجى تعبئة جميع الحقول بشكل صحيح.",
    passwordShort: "يجب أن تكون كلمة المرور 6 أحرف على الأقل.",
    passwordWeak: "يجب أن تحتوي كلمة المرور على الاقل على رقم وحرف.",
    passwordNotMatch: "لايوجد تطابق بين كلمتي المرور.",
    langToggle: "English",
  }
};

function updateLanguage() {
  const t = isArabic ? TEXTS.ar : TEXTS.en;
  document.documentElement.lang = isArabic ? "ar" : "en";
  document.body.dir = isArabic ? "rtl" : "ltr";
  document.getElementById("title").textContent = t.title;
  document.getElementById("form-title").textContent = t.formTitle;
  document.getElementById("label-firstName").textContent = t.firstName;
  document.getElementById("firstName").placeholder = t.firstName;
  document.getElementById("label-lastName").textContent = t.lastName;
  document.getElementById("lastName").placeholder = t.lastName;
  document.getElementById("label-gender").textContent = t.gender;
  document.getElementById("label-male").textContent = t.male;
  document.getElementById("label-female").textContent = t.female;
  document.getElementById("label-email").textContent = t.email;
  document.getElementById("email").placeholder = t.email;
  document.getElementById("label-password").textContent = t.password;
  document.getElementById("password").placeholder = t.password;
  document.getElementById("label-password2").textContent = t.password2;
  document.getElementById("password2").placeholder = t.password2;
  document.getElementById("submit-btn").textContent = t.submit;
  document.getElementById("lang-toggle").textContent = t.langToggle;
  document.getElementById("success-message").textContent = "";
}

// Language toggle
document.getElementById("lang-toggle").addEventListener("click", function() {
  isArabic = !isArabic;
  updateLanguage();
});

// Password verification function
function verifyPassword(pw) {
  if (pw.length < 6) return "short";
  if (!(/[a-zA-Z]/.test(pw) && /\d/.test(pw))) return "weak";
  return "ok";
}

// Form submit
document.getElementById("createForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const t = isArabic ? TEXTS.ar : TEXTS.en;

  // Validate all fields
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;
  const genderMale = document.getElementById("male").checked;
  const genderFemale = document.getElementById("female").checked;

  const msg = document.getElementById("success-message");

  if (!firstName || !lastName || !email || !password || !password2 || !(genderMale || genderFemale)) {
    msg.style.color = "red";
    msg.textContent = t.error;
    return;
  }
  if (password !== password2) {
    msg.style.color = "red";
    msg.textContent = t.passwordNotMatch;
    return;
  }
  const pwStatus = verifyPassword(password);
  if (pwStatus === "short") {
    msg.style.color = "red";
    msg.textContent = t.passwordShort;
    return;
  }
  if (pwStatus === "weak") {
    msg.style.color = "red";
    msg.textContent = t.passwordWeak;
    return;
  }

  msg.style.color = "green";
  msg.textContent = t.success;
  this.reset();
});

updateLanguage();