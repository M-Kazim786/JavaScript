/*for loops*/

// for(let i=1;i<=5;i++){
//     console.log("i=",i);
// }

/*while loop*/

// let i=1;
// while(i<=5){
//     console.log("Hello World");
//     i++;
// }

/*do-while loop*/

// let i=1;
// do{
//     console.log("I have a cat");
//     i++;
// } while(i<=10);

/*for-of loop (used to print each value of a string)*/

// let str="Kazim";
// let size=0;
// for(let val of str) {
//     console.log("value =",val);
//     size++;
// } 
// console.log("Size of string is",size);

/*for-in loop (used to print an object) */

let student={
name:"Muhammad Kazim",
age:19,
cgpa:3.0,
isPass:true,
}

for(let i in student){
    console.log("key=",i,",Value=",student[i]);
}