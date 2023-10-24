let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red","yellow","green","purple"];
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress",function() {
    if(started == false)
    {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randClo = btns[randIdx];
    let randBtn = document.querySelector(`.${randClo}`);
    gameSeq.push(randClo);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        let high = 0;
        if(level > high){
            high = level;
            h3.innerHTML = `Your Highest Score is : <b>${high}</b>`
        }
        h2.innerHTML = `Game Over! Your Score is <b>${level}</b> <br/>  Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },1000);
        reSet();
    }
}

function btnPress() {
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn)
{
    btn.addEventListener("click",btnPress);
}

function reSet() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}