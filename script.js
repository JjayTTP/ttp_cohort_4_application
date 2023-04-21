const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".nav-links");

console.log(toggleButton);
console.log(navbarLinks);

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})