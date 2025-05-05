// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Theme Switcher
const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeSwitcher.textContent = savedTheme === 'dark-theme' ? '🌞 Light Mode' : '🌙 Dark Mode';
}

themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDarkMode = body.classList.contains('dark-theme');
    themeSwitcher.textContent = isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', isDarkMode ? 'dark-theme' : 'light-theme');
});

// Project Filtering System
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');
        // Filter projects
        const filter = button.getAttribute('data-filter');
        filterProjects(filter);
    });
});

function filterProjects(filter) {
    projectCards.forEach(project => {
        if (filter === 'all' || project.classList.contains(filter)) {
            project.style.display = 'block';
            project.classList.add('animated', 'fadeInUp'); // Add animation
        } else {
            project.style.display = 'none';
        }
    });
}

// Contact Form Validation with Animation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        // Show success message with animation
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Thank you! Your message has been sent.';
        successMessage.classList.add('success-message', 'animated', 'fadeIn');
        document.body.appendChild(successMessage);

        // Remove message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);

        // Reset form
        document.getElementById('contactForm').reset();
    } else {
        // Show error message with animation
        const errorMessage = document.createElement('div');
        errorMessage.textContent = 'Please fill out all fields.';
        errorMessage.classList.add('error-message', 'animated', 'shake');
        document.body.appendChild(errorMessage);

        // Remove message after 3 seconds
        setTimeout(() => {
            errorMessage.remove();
        }, 3000);
    }
});

// Add Hover Effects to Project Cards
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover-pulse');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-pulse');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text");
    const words = ["Atul Kumar", "Web Developer", "Cybersecurity Enthusiast", "AI Learner"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }

    typeEffect();
});
// Path: javaScript.js
//hero section and right side photo
// Typing Effect
const words = ["Atul Kumar.", "a Web Developer.", "a Cybersecurity Expert.", "an Ethical Hacker."];
let wordIndex = 0;
let letterIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
    if (letterIndex < words[wordIndex].length) {
        typingElement.innerHTML += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (letterIndex > 0) {
        typingElement.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);
