let sel = selector => document.querySelector(selector);
let block = document.getElementsByClassName('block');


function showMe() {
    sel('.blocks').style.display = 'block';

}

function pics() {
    for (let i = 0; i < block.length; i++) {
        block[i].classList.add(`pic${i}`);
    }
}

function col() {
    for (let i = 0; i < block.length; i++) {
        block[i].classList.remove(`pic${i}`);
    }
}

function back() {
    if (sel('.color')) {
        document.body.style.backgroundColor = event.target.style.backgroundColor;


    }
    if (sel('.picture')) {
        document.body.style.backgroundImage = getComputedStyle(event.target).backgroundImage;
        document.body.style.backgroundSize = 100 + '%', 100 + '%';

    }

}

sel('.color').addEventListener('click', showMe);
sel('.color').addEventListener('click', col);
sel('.picture').addEventListener('click', showMe);
sel('.picture').addEventListener('click', pics);