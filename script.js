document.addEventListener('DOMContentLoaded', () => {
    // Text Rotator
    const texts = ["Frontend and Backend Development", "Web Development"];
    let index = 0;

    const changingText = document.getElementById('changing-text');
    setInterval(() => {
        index = (index + 1) % texts.length;
        changingText.textContent = texts[index];
    }, 3000);

    // Certificate Carousel
    const certificates = ["code3.png", "code4.png", "code5.png", "code6.png", "code7.png", "code8.png"];
    let currentCertIndex = 0;

    const certificateImg = document.querySelector('.certificate');
    document.getElementById('next-cert').addEventListener('click', () => {
        currentCertIndex = (currentCertIndex + 1) % certificates.length;
        certificateImg.src = `assets/img/foto/${certificates[currentCertIndex]}`;
    });

    document.getElementById('prev-cert').addEventListener('click', () => {
        currentCertIndex = (currentCertIndex - 1 + certificates.length) % certificates.length;
        certificateImg.src = `assets/img/foto/${certificates[currentCertIndex]}`;
    });

    // Project Modal
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-description-modal');
    const modalContent = document.getElementById('project-description');
    const closeModal = document.querySelector('.close');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            modalContent.textContent = card.getAttribute('data-description');
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(link.dataset.target).classList.add('active');
        });
    });
});
