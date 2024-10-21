// let mode="white";
// let color;
// if(mode==="dark"){
//     color="black";
// }
// else if(mode==="white"){
//    color="white";
// }
// console.log("The page is in",color,"mode");


/*********************************************************************************************************/

//write a program to check if a number is even or odd

// let num=20;
// if(num%2===0){
//     console.log("The number",num,"is even");
// }else if(num%2===1){
//     console.log("The number",num,"is odd");
// }

/********************************************************************************************************/

//get a user to input number using prompt,check if a number is divisible by 5

// let num=prompt("Enter a number");
// console.log("The number is",num);

// if(num%5===0){
//     console.log("The",num,"is divisible by 5");
// }else{
//     console.log("The",num,"is NOT divisible by 5");
// }
/********************************************************************************************************/

let score=prompt("Enter a score");

if(score<=100 && score>=80){
    console.log("Grade A");
}
else if(score<80 && score>70){
    console.log("Grade B");
}
else if(score<70 && score>60){
    console.log("Grade C");
}
else if(score<60 && score>50){
    console.log("Grade D");
}else if(score<50 && score>0){
    console.log("Grade F");
}


