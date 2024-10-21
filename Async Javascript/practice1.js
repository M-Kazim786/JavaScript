let startBtn=document.querySelector("#start");
let stopBtn=document.querySelector("#stop");
let head=document.querySelector("h1");

let setIn;

 startBtn.addEventListener("click",()=>{
    setIn=setInterval(()=>{
       head.innerText="JS With Super-Sayian";
    },3000)
});

stopBtn.addEventListener("click",()=>{
    clearInterval(setIn); 
})
