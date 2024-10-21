const form=document.querySelector("form");

form.addEventListener("submit",function(e) {
    e.preventDefault();
   const height= parseInt(document.querySelector("#height").value);
   const weight= parseInt(document.querySelector("#weight").value);
   const result= document.querySelector("#results");
   const guide=document.querySelector("#weight guide")
  
   let bmi;
   if (height==="" || height<0 || isNaN(height)) {
       result.innerHTML=`Please enter a valid height ${height} `;
   } else if (weight==="" || weight<0 || isNaN(weight)) {
    result.innerHTML=`Please enter a valid weight ${weight} `;
}
else {
   bmi=  (weight /((height*height)/10000)).toFixed(2);
  //show result
  result.innerHTML=`<span>${bmi}</span>`;


//weight Guide
if (bmi < 18.6) {
    const guide = document.querySelector("#weightGuide");
    const newGuide=document.createElement("p") ;
    newGuide.textContent="You are underweight";
    guide.replaceWith(newGuide);
} 
else if (bmi>18.6 && bmi<24.9) {
    const guide=document.querySelector("#weightGuide");
    const newGuide=document.createElement("p");
    newGuide.textContent="Normal Range";
    guide.replaceWith(newGuide);
    
}
  else if (bmi>24.9) {
    const guide=document.querySelector("#weightGuide");
    const newGuide=document.createElement("p");
    newGuide.textContent="You are overweight";
    guide.replaceWith(newGuide);
  }  

}
})