const slideList = [{
        img: "img/img1.jpg",
        text: 'IT REALLY EXISTS'
    },
    {
        img: "img/img2.jpg",
        text: 'THE GREATEST SECRET'
    },
    {
        img: "img/img3.jpg",
        text: 'SCARY EXPERIMENTS'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
// Interfejs
const time = 6000;
let active = 0;
// Implementacje
let click = 0


const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
}
let indexInterval = setInterval(changeSlide, time)

function changeColor() {
    if (click % 2 == 1) {
        h1.style.color = "white";
    } else {
        h1.style.color = "red";

    }
    click = click + 1;
}

function skullPage() {
    const skull = document.getElementById("skull");
    alert("HTTP Server Error 503");
    image.style.display = "none";
    window.scrollTo(0, 0);
    skull.style.display = "block";
    document.body.style.backgroundImage = "url('img/skull.jpg')";

    setInterval(function () {
        document.body.style.opacity = "0.1";
        setInterval(function () {
            document.body.style.opacity = "0.9";
        }, 500);
    }, 500);


    window.setTimeout(function () {
        window.location.href = "http://127.0.0.1:5500/puzzle.html";
    }, 5000);
}

const ufo = document.querySelector(".ufo");
const files = document.querySelector(".files");
const research = document.querySelector(".research");

image.onclick = changeColor;
ufo.onclick = skullPage;
files.onclick = skullPage;
research.onclick = skullPage;