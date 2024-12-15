let gameSeq = [];
let userSeq = [];
let started = false;

let level = 0;
let h2 = document.querySelector('h2');

let btns = ["purple","green","yellow","red"];

document.addEventListener("keypress", () => {
    if(started == false){
        console.log("game started");
        started = true;
    }

    levelUp();
})

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout( function (){
        btn.classList.remove('flash');
    }, 250)
}

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout( function (){
        btn.classList.remove('userflash');
    }, 250)
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let idx = Math.floor(Math.random() * 4);
    let rndcolor = btns[idx];
    let rndbtn = document.querySelector(`.${rndcolor}`);
    // console.log(idx);
    // console.log(rndcolor);
    // console.log(rndbtn);
    gameSeq.push(rndcolor);
    console.log(gameSeq)

    gameFlash(rndbtn);
}

function checkAns(idx){
    // console.log(`curr level: ${level}`);
    // console.log(userSeq);
    // console.log(gameSeq);

    // let idx = level - 1;

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        h2.innerHTML = `gameOver! Yor score was <b>${level}</b> <br>  press any key to restart.`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute('id');    
    userSeq.push(userColor);    

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
