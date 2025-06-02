const TEXT = "WELCOME TO LH STORE";
const TEXT2 = "مرحبا بكم في متجر LH";
const COLORS = ["#0e4c65","#722f37"];
const LETTER_DELAY = 90;

function animate_Text_En() {
  const container = document.getElementById("welcome-text");
  container.innerHTML = '';

  for (let i = 0; i < TEXT.length; i++) {
    setTimeout(() => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.style.color = COLORS[i % COLORS.length];
      span.textContent = TEXT[i] === ' ' ? '\u00A0' : TEXT[i];
      container.appendChild(span);
    }, LETTER_DELAY * i);
  }
}

function animate_Text_Ar() {
 const container = document.getElementById("welcome");
  container.innerHTML = '';

  const words = TEXT2.split(' ');

  words.forEach((word, i) => {
    setTimeout(() => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.style.color = COLORS[i % COLORS.length];
      span.textContent = word + ' ';
      container.appendChild(span);
    }, LETTER_DELAY * i * 4); // longer delay for words
  });
}
animate_Text_En();
animate_Text_Ar();

function Log_In(e) {
  if (e) e.preventDefault();
  document.getElementById("Log").innerHTML = "Try again please";
}
