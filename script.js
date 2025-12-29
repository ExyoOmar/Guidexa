const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

const languageToggle = document.getElementById('language-toggle');
let currentLang = 'en';

const elements = document.querySelectorAll('[data-en][data-ar]');

function switchLanguage(lang) {
  elements.forEach(el => {
    el.textContent = el.dataset[lang];
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  languageToggle.textContent = lang === 'en' ? 'العربية' : 'English';
  currentLang = lang;
}

languageToggle.addEventListener('click', () => {
  switchLanguage(currentLang === 'en' ? 'ar' : 'en');
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
