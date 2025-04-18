const whatsappBtn = document.querySelector('.whatsapp');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        whatsappBtn.classList.add('active');
    } else {
        whatsappBtn.classList.remove('active');
    }
});