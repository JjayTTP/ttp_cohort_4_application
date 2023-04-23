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

// about me text
const aboutMeText = document.querySelector('.about-me-text');
const aboutMeTextContent = "I am a web developer based in NY. A student for life who runs on caesar salads. Contact me. :)";

 Array.from(aboutMeTextContent).forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    aboutMeText.appendChild(span);
    
    span.addEventListener("mouseenter", (e)=> {
        e.target.style.animation = "aboutMeTextAnimation 5s infinite"
    })
 });
// end of about me text