function toggleElement(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fadeIn');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.5});
  
    fadeInElements.forEach((element) => {
      observer.observe(element);
    });
  });
  