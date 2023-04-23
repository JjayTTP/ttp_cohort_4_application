const looker = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        console.log(entry)

        if (entry.isIntersecting){
            entry.target.classList.add('show');   
        }

    })
});

const hiddenElems = document.querySelectorAll('.hidden');
hiddenElems.forEach((el) => looker.observe(el));

const icons = document.querySelectorAll('.portLinks');

icons.forEach(icon => {

    icon.addEventListener('click', () => {
        window.open(icon.dataset.url, target="_blank");
    })

    icon.style.cursor = "pointer";

})
