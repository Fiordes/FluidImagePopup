const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.large-img');
const imgText = document.querySelector('.caption');

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');

        //change text

        const originalSrc = preview.dataset.original;
        const originalAlt = preview.getAttribute('alt');


        original.src = `./img/full/${originalSrc}`;
        imgText.innerHTML = originalAlt;

    });
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');

    }
})