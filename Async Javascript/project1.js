//Generate a random color
let randomColor=()=>{
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++) {
     color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
//console.log(randomColor());
let startBtn=document.querySelector("#start");
let stopBtn=document.querySelector("#stop");
let intervalId;

const startChangingColor=()=>{
    intervalId=setInterval(()=>{
    document.body.style.backgroundColor=randomColor();
    },1000)
}
const stopChangingColor=()=>{
    clearInterval(intervalId);
    intervalId=null;
}

startBtn.addEventListener("click",startChangingColor);
stopBtn.addEventListener("click",stopChangingColor);