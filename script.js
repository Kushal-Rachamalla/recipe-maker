// Ingredient Toggle
document.getElementById('toggle-btn').addEventListener('click', function () {
  const list = document.getElementById('ingredients');
  const btn = document.getElementById('toggle-btn');

  if (list.classList.contains('hidden')) {
    list.classList.remove('hidden');
    btn.textContent = 'Hide Ingredients';
  } else {
    list.classList.add('hidden');
    btn.textContent = 'Show Ingredients';
  }
});

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('darkModeToggle');
  btn.textContent = document.body.classList.contains('dark-mode')
    ? '☀️ Light Mode'
    : '🌙 Dark Mode';
});

// Step-by-step Instructions
const steps = [
  "Preheat oven to 175°C (350°F).",
  "Melt butter in a saucepan. Remove from heat.",
  "Stir in sugar, eggs, and vanilla.",
  "Add cocoa, flour, and salt. Mix until smooth.",
  "Pour into greased baking dish and spread evenly.",
  "Bake for 25 minutes or until set in the middle.",
  "Let cool before cutting into squares."
];

let currentStepIndex = 0;

function updateSteps() {
  const current = document.getElementById('currentStep');
  const next = document.getElementById('nextStep');
  const nextButton = document.getElementById('nextButton');

  current.textContent = `Step ${currentStepIndex + 1}: ${steps[currentStepIndex]}`;

  if (currentStepIndex < steps.length - 1) {
    next.textContent = `Next: ${steps[currentStepIndex + 1]}`;
  } else {
    next.textContent = '🎉 You’ve completed all steps!';
    nextButton.disabled = true;
    nextButton.style.opacity = 0.6;
    nextButton.textContent = 'Done ✅';
    triggerExplosion();
  }
}

document.getElementById('nextButton').addEventListener('click', () => {
  if (currentStepIndex < steps.length - 1) {
    currentStepIndex++;
    updateSteps();
  }
});

// Explosion Animation
function triggerExplosion() {
  const clock = document.createElement('div');
  clock.id = 'exploding-clock';
  clock.textContent = '⏰';
  document.body.appendChild(clock);
  setTimeout(() => clock.remove(), 500);

  const emojis = ['🎉', '🎊', '🎈', '🥳', '🎂'];
  for (let i = 0; i < 40; i++) {
    const span = document.createElement('span');
    span.className = 'party-emoji';
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.top = Math.random() * 100 + 'vh';
    span.style.animationDuration = 0.6 + Math.random() * 0.5 + 's';
    document.getElementById('explosionContainer').appendChild(span);
    setTimeout(() => span.remove(), 1000);
  }
}

// Initialize steps
updateSteps();
