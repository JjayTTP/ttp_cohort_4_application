// mouse circle
const mouseCircle = document.querySelector('.mouse-circle');
const mouseDot = document.querySelector('.mouse-dot');

const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `
    top: ${y}px;
    left: ${x}px;
    opacity: ${1};
    `;
    mouseDot.style.cssText = `
    top: ${y}px; 
    left: ${x}px;
    opacity: ${1};
    `;
}

// animated circles
const circles = document.querySelectorAll('.circle');
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;
const z = 50;

// shifts the circles in the opposite direction based on the top and left values. top and left are adjacent
const animateCircles = (evt, x, y) => {
    if(x < mX) {
        circles.forEach(circle => {
            circle.style.left = `${z}px`;
        })
        mainImg.style.left = `${z}px`
    } else if(x > mX) {
        circles.forEach(circle => {
            circle.style.left = `-${z}px`;
        })
        mainImg.style.left = `-${z}px`
    }

    if(y < mY) {
        circles.forEach(circle => {
            circle.style.top = `${z}px`;
        })
        mainImg.style.top = `${z}px`
    } else if(y > mY) {
        circles.forEach(circle => {
            circle.style.top = `-${z}px`;
        })
        mainImg.style.top = `-${z}px`
    }
    mX = evt.clientX;
    mY = evt.clientY;
}
// end of animated circles

document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x,y);
    animateCircles(e,x,y);
})

document.body.addEventListener("mouseleave", () => {
    mouseCircle.style.opacity = '0';
    mouseDot.style.opacity = '0';
})
// end of mouse circle

// navigation
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
    menuIcon.classList.add('show-menu-icon');
    navbar.classList.add('hide-navbar');

    if(window.scrollY === 0) {
        menuIcon.classList.remove("show-menu-icon");
        navbar.classList.remove("hide-navbar");
    }
})

// listener for the menu icon to open 
menuIcon.addEventListener("click", () => {
    menuIcon.classList.remove("show-menu-icon");
    navbar.classList.remove("hide-navbar");
})
// end of navigation

// about me text
const aboutMeText = document.querySelector('.about-me-text');
const aboutMeTextContent = "I am a web developer based in NY. A student for life who runs on caesar salads and good conversation. Get to know me. :)";

 Array.from(aboutMeTextContent).forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    aboutMeText.appendChild(span);
    
    span.addEventListener("mouseenter", (e)=> {
        e.target.style.animation = "aboutMeTextAnimation 5s infinite"
    })
 });
// end of about me text
// section 4

// form 
const formHeading = document.querySelector('.form-heading');
const formInputs = document.querySelectorAll('.contact-form-input');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = `Your ${input.placeholder}`
            formHeading.style.opacity = "1"
        }, 300)
    })

    input.addEventListener('blur', () => {
        formHeading.style.opacity = "0";
        setTimeout(() => {
            formHeading.textContent = "Lets Talk";
            formHeading.style.opacity = "1"
        }, 300)
    })
})

// form validation 
const form = document.querySelector('.contact-form');
const username = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const errorMessages = document.querySelectorAll('.message')

const error = (inputElement, message) => {
    inputElement.nextElementSibling.classList.add("error")
    inputElement.nextElementSibling.textContent = message   
}

// removes error message if field is populated after submission
const success = (input) => {
    input.nextElementSibling.classList.remove("error")
}

// checks if the field is empty
const checkRequiredFields = (inputArr) => {
    inputArr.forEach(input => {
        if (input.value.trim() === "") {
            error(input, `${input.id} is required`);
        } 
    })
}

// checks if the input length is smaller than the minimum number
const checkLength = (input, min) => {
    if (input.value.trim().length < min) {
        error(input, `${input.id} must be at least ${min} characters`);
    } else {
        success(input);
    }
}

const checkEmail = (input) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regEx.test(input.value.trim())) {
        success(input)
    } else {
        error(input, `Email is not valid`)
    }
}

form.addEventListener("submit", evt => {
    evt.preventDefault();

    checkLength(username, 3)
    checkLength(subject, 5)
    checkLength(message, 10)
    checkEmail(email);
    checkRequiredFields([username, email,subject, message]);
})
// end of form validation
// end of section 4