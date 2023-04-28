document.getElementById("artist1").addEventListener("click", showMore1);
    function showMore1() { 
        let a1Display = document.getElementById("artist1Desc").style.display;
        let button = document.getElementById("artist1");
        if (a1Display == "none") {
            document.getElementById("artist1Desc").style.display = "inline";
                button.innerHTML = "Thanks, I got it";
        }
        else {
            document.getElementById("artist1Desc").style.display = "none";
            button.innerHTML = "Who is he again?";
        }
    }

document.getElementById("artist2").addEventListener("click", showMore2);
    function showMore2() {
        let a2Display = document.getElementById("artist2Desc").style.display;
        let button = document.getElementById("artist2");
        if (a2Display == "none") {
            document.getElementById("artist2Desc").style.display = "inline";
            button.innerHTML = "Thanks, I got it";
        }
        else {
            document.getElementById("artist2Desc").style.display = "none";
            button.innerHTML = "Who are they again?";
        }
    }