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
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
