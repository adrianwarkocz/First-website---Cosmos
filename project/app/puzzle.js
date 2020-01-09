const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Hello', 'Find password', 'Key = 88']
const inp = document.getElementById("Alercik");

let activeLetter = -15;
let activeText = 0;

let red = 0;
let green = 0;
let blue = 0;


const addLetter = () => {
    if (activeLetter >= 0) {
        spnText.textContent += txt[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeText].length) {

        activeText++;
        if (activeText === txt.length) return;

        return setTimeout(() => {
            activeLetter = -15;
            spnText.textContent = '';
            addLetter();
        }, 2000)


    }
    setTimeout(addLetter, 100)

}
addLetter();

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);


document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
    switch (e.keyCode) {
        case 88:
            document.body.style.backgroundColor = `rgb(${red < 5 ? ++red : red}, ${green < 5 ? ++green : green}, ${blue < 5 ? ++blue : blue})`;
            break;
        case 38:
            document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red}, ${green > 0 ? --green : green}, ${blue > 0 ? --blue : blue})`;
            break;
    }
    console.log(red);

}
window.addEventListener('keydown', changeColor)

const input = document.getElementById('pass');
const div = document.querySelector('.message');
const password = "eye is a portal";
const message = "Your system is secure";
const i = document.querySelector('i');

input.addEventListener('input', (e) => {
    // console.log(e.target.value);
    if (password === e.target.value) {
        div.textContent = message;
        e.target.value = '';
        i.style.opacity = "1";
        alert("Congrats! Your system is secure!")
        window.setTimeout(function () {
            window.location.href = "http://127.0.0.1:5500/index.html";
        }, 3000);

    } else {
        div.textContent = '';
    }
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})


inp.addEventListener('keydown', function (event) {
    if (event.key === '!') {
        setTimeout(function () {
            event.target.value += 'e';
        }, 4);
        event.preventDefault();
    };
    if (event.key === '@') {
        setTimeout(function () {
            event.target.value += 'y';
        }, 4);
        event.preventDefault();
    };
    if (event.key === '#') {
        setTimeout(function () {
            event.target.value += 'i';
        }, 4);
        event.preventDefault();
    };
    if (event.key === '$') {
        setTimeout(function () {
            event.target.value += 's';
        }, 4);
        event.preventDefault();
    };
    if (event.key === '%') {
        setTimeout(function () {
            event.target.value += 'a';
        }, 4);
        event.preventDefault();
    };
    if (event.key === '(') {
        setTimeout(function () {
            event.target.value += 'p';
        }, 4);
        event.preventDefault();
    };
    if (event.key === ')') {
        setTimeout(function () {
            event.target.value += 'o';
        }, 4);
        event.preventDefault();
    };
    if (event.key === '&') {
        setTimeout(function () {
            event.target.value += 'r';
        }, 4);
        event.preventDefault();
    };
    if (event.key === '^') {
        setTimeout(function () {
            event.target.value += 't';
        }, 4);
        event.preventDefault();
    };
    if (event.key === '.') {
        setTimeout(function () {
            event.target.value += 'l';
        }, 4);
        event.preventDefault();
    };
})