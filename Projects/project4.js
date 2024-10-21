let btns= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turnO=true;
let count=0;

const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],


];
let resetGame=()=>{
    turnO=true;
    for (let btn of btns) {
        btn.innerText="";
        enableBtn();
        msgContainer.classList.add("hide");
    }
};

let showWinner=(winner)=>{
   msg.innerText=`The winner is ${winner}`;
   msgContainer.classList.remove("hide");
};

let enableBtn=()=>{
    for (let btn of btns) {
        btn.disabled=false;
    }
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if (turnO) {
           btn.innerText="O";
           turnO=false; 
        } else{
            btn.innerText="X";
            turnO=true;
        }
        btn.disabled=true;
        count++;
        checkWinner();
    })
})

const checkWinner=()=>{
  for (let pattern of winPatterns) {
     let pos1=btns[pattern[0]].innerText;
     let pos2=btns[pattern[1]].innerText;
     let pos3=btns[pattern[2]].innerText;

     if (pos1 !="" && pos2 !="" && pos3 !="") {
        if (pos1===pos2 && pos2===pos3) {
           showWinner(pos1);
        } else if (count===9) {
            msg.innerText="DRAW";
            msgContainer.classList.remove("hide");
        }
     }
  }
};


resetBtn.addEventListener("click",resetGame);
newGBtn.addEventListener("click",resetGame);
