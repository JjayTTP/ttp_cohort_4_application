//continous image carousel 
function showNextImage() {
    const activeImage = document.querySelector('.carousel-image.active');
    const nextImage = activeImage.nextElementSibling || document.querySelector('.carousel-image');
    activeImage.classList.remove('active');
    nextImage.classList.add('active');
  }
  
  setInterval(showNextImage, 3000);
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.style.display === "topnav") {
      x.style.display = "responsive";
    } else {
      x.style.display = "topnav";
    }
  }
  
  //responsive contact form that displays either success or error message
  const form = document.getElementById('contact-form');
  const endpoint = 'https://formspree.io/f/mknakban';
  const successMessage = document.getElementById('success-message');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        successMessage.textContent = 'Your message has been sent!';
        form.reset();
      } else {
        throw new Error('Something went wrong.');
      }
    })
    .catch(error => {
      console.error(error);
    });
  });