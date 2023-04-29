
function email (form) {
    var user = form.name.value;
    var email = form.email.value;
    var subject= form.subject.value;
    var text = form.text.value; 
    window.location.href = `mailto:sean.cedano@jjay.cuny.edu?&subject=${user} - ${subject}&body=${text}\n\nContact Email:${email}` ;
}

function readMore() {
    var state = document.getElementById("state");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read-more-btn");
  
    if (state.style.display === "none") {
        state.style.display = "inline";
        moreText.style.display = "none";
        btnText.innerHTML = "<i class='fa-solid fa-angle-down'>";
    } else {
        state.style.display = "none";
        moreText.style.display = "inline";
        btnText.innerHTML = "<i class='fa-solid fa-angle-up'></i>";
    }
  }
  
