const faqCards = document.querySelectorAll('.card');

faqCards.forEach(card => {
    card.addEventListener('click', function () {
        const isActive = card.classList.contains('active');

        faqCards.forEach(c => {
            c.classList.remove('active');
            c.querySelector('p').style.display = 'none';
            c.querySelector('.arrow').style.transform = 'rotate(0deg)';
            c.querySelector('h2').style.fontWeight = '400';
        });

        if (!isActive) {
            card.classList.add('active');
            card.querySelector('p').style.display = 'block';
            card.querySelector('.arrow').style.transform = 'rotate(180deg)';
            card.querySelector('h2').style.fontWeight = '700';
        }
    });
});
