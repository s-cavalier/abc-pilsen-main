let ballleft = -60;
let ballbottom = -130;
let fireoffset_left = 60;
let fireoffset_bottom = 140;

let firesize = 0.0;

fire = document.getElementById("fire");
ball = document.getElementById("ball");
wintext = document.getElementById("wintext");
wintext.style.fontSize = "0pt";

ball.style.left = (ballleft + "px");
ball.style.bottom = (ballbottom + "px");

fire.style.left = (ballleft + fireoffset_left) + "px";
fire.style.bottom = (ballbottom + fireoffset_bottom) + "px";

fire.style.transform = "scale(0)";



window.onkeydown = function(key) {
    if (key.keyCode === 38 && !started) {
        firesize += 0.05;
        fire.style.transform = "scale(" + firesize + ", " + firesize + ")";
        fire.style.bottom = (ballbottom + fireoffset_bottom -  5 * firesize) + "px";
    }
}

// 795, -20

let started = false;

let vx = 0;
let g = -490;
let vy = 0;

window.onkeyup = function(key) {
    if (key.keyCode === 38 && !started) {
        started = true;
        vx = 100 * firesize;
        vy = 100 * firesize;
    }
}

let time = 0.0;
let start;
let ended = false;

window.requestAnimationFrame(position);

function position(timeStamp) {
    let ypos = g * time * time + vy * time + ballbottom;
    if (started && !ended && ypos > -180) {
        if (start === undefined) {
            start = timeStamp;
        }
        time = (timeStamp - start) / 1000;
        let xpos = ballleft + time * vx;
        ball.style.left = xpos + "px";
        ball.style.bottom = ypos + "px";
        fire.style.left = xpos + fireoffset_left + "px";
        fire.style.bottom = ypos + fireoffset_bottom - 5*firesize + "px";

        if (Math.sqrt( (795 - xpos) * (795 - xpos) + (-20 - ypos)*(-20 - ypos) ) < 30) {
            ended = true;
            wintext.style.fontSize = "40pt";
        }

    }
    window.requestAnimationFrame(position);
}