// /*************setTimeout()******************/

// let setTime=setTimeout(printMsg=()=>{
//      console.log("Hello World");
// },3000);
// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",()=>{
//     clearTimeout(setTime);
// })


/***************setInterval********************/

let sayDate=(str)=>{
    console.log("Kazim",Date.now(),str); 
}

setInterval(sayDate,2000,"Hello"); 

