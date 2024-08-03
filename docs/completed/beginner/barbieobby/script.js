let startx = 0;
let starty = 0;
let leftbo = -1.5;
let rightbo = 1.5;

start();

function start() {
    moveables = document.getElementsByClassName("mable");
    for (i = 0; i < moveables.length; i++) {
        moveables[i].style.left = "" + startx + "in";
        moveables[i].style.bottom = "" + starty + "in";
        if (moveables[i].classList.contains("jump")) {
            moveables[i].style.left = "" + (startx + leftbo) + "in";
        }
        if (moveables[i].classList.contains("move")) {
            moveables[i].style.left = "" + (startx + rightbo) + "in";
        }
        if (moveables[i].classList.contains("turn")) {
            moveables[i].style.left = "" + (startx + rightbo) + "in";
        }
    }
}

function move(move, changeup, changeright) {
    startx += changeright;
    starty += changeup;
    moveables = document.getElementsByClassName("mable");
    for (i = 0; i < moveables.length; i++) {
        moveables[i].style.left = "" + startx + "in";
        moveables[i].style.bottom = "" + starty + "in";
        if (moveables[i].classList.contains("jump")) {
            moveables[i].style.left = "" + (startx + leftbo) + "in";
        }
        if (moveables[i].classList.contains("move")) {
            moveables[i].style.left = "" + (startx + rightbo) + "in";
        }
    }
}