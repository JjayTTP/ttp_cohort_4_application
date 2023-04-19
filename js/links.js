function GitLink() {
    window.open("https://github.com/shawns21", "_blank");
}

function ResumeLink() {
    window.open("https://docs.google.com/document/d/e/2PACX-1vRoMmq93HNf6KBnRr9d7I0-7FASa2Dm-u5VElQS0C3WLtwWYLUvtnFux49yqT5PStXxo-J5BCfprWgI/pub", "_blank");

}

function LinkedinLink() {
    window.open("https://www.linkedin.com/in/shawn-sinanan-073a111a4/", "_blank");
}

const looker = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        console.log(entry)

        if (entry.isIntersecting){
            entry.target.classList.add('show');   
        } else{
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElems = document.querySelectorAll('.hidden');
hiddenElems.forEach((el) => looker.observe(el));