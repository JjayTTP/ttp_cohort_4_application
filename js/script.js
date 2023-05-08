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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swipe = document.getElementById('swipers');

const hiddenTop = document.getElementById('top')
const hiddenBot = document.getElementById('bot')

swipe.addEventListener('mouseover', function handleMouseOver() {
    hiddenTop.style.display = null;
    hiddenBot.style.display = null;
});

swipe.addEventListener('mouseout', function handleMouseOut() {
    hiddenTop.style.display = 'none'; 
    hiddenBot.style.display = 'none';
});


