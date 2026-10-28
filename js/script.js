 // Menu mobile
const menuToggle = document.querySelector('.botao-menu');
const navLinks = document.querySelector('.menu');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('aberto');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    });
}

// Contadores da seção de impacto
const counters = document.querySelectorAll('.numero');
const speed = 100;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 25);
            } else {
                counter.innerText = target + (counter.getAttribute('data-suffix') || '+');
            }
        };
        updateCount();
    });
};

let animated = false;
window.addEventListener('scroll', () => {
    const impactSection = document.querySelector('.impacto');
    if (impactSection) {
        const position = impactSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight && !animated) {
            startCounters();
            animated = true;
        }
    }
});
