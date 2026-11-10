// =================================
// PRELOADER
// =================================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 500);

});


// =================================
// MOBILE NAVBAR
// =================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.replace("fa-bars", "fa-xmark");

    } else {

        icon.classList.replace("fa-xmark", "fa-bars");

    }

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// =================================
// DARK / LIGHT MODE
// =================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

const savedTheme = localStorage.getItem("chaitanya-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeIcon.classList.replace("fa-moon", "fa-sun");

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    if (isLight) {

        themeIcon.classList.replace("fa-moon", "fa-sun");

        localStorage.setItem("chaitanya-theme", "light");

    } else {

        themeIcon.classList.replace("fa-sun", "fa-moon");

        localStorage.setItem("chaitanya-theme", "dark");

    }

});


// =================================
// TYPING ANIMATION
// =================================

const typingElement = document.querySelector(".typing-text");

const words = [
    "Software Engineer",
    "Web Developer",
    "Programmer",
    "Technology Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typingAnimation() {

    const currentWord = words[wordIndex];

    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);


    let speed = deleting ? 45 : 90;


    if (!deleting && charIndex === currentWord.length) {

        deleting = true;
        speed = 1400;

    } else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }

    setTimeout(typingAnimation, speed);

}

typingAnimation();


// =================================
// SCROLL REVEAL
// =================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach(element => {

    observer.observe(element);

});


// =================================
// ACTIVE NAVBAR
// =================================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");


function updateActiveLink() {

    let current = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveLink);


// =================================
// BACK TO TOP
// =================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 450) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =================================
// CONTACT FORM
// =================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        alert("Please fill all the fields.");

        return;

    }


    const recipient = "chaitanyanavudu400@gmail.com";

    const mailSubject = encodeURIComponent(subject);

    const mailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );


    window.location.href =
        "mailto:" + recipient +
        "?subject=" + mailSubject +
        "&body=" + mailBody;

});


// =================================
// CURRENT YEAR
// =================================

document.getElementById("year").textContent =
    new Date().getFullYear();
