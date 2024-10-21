let btn=document.querySelector("#btn");
let bcolor=document.querySelector("body");
let mode="light";

btn.addEventListener("click",()=>{
  if (mode==="light") {
    mode="dark";
    bcolor.classList.remove("light");
    bcolor.classList.add("dark");
  } else if (mode==="dark") {
    mode="light";
    bcolor.classList.remove("dark")
    bcolor.classList.add("light");
  }

  console.log(mode);
})


