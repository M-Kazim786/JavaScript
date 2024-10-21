//sum function
function sum(a,b){
    return a+b;
}
console.log(sum(5,2));

//example
function hello(){
    console.log("Hello World!!!");
}
hello();

//ARROW FUNCTIONS

//sum arrowFunction
const arrowSum=(a,b)=>{console.log(a+b)}
arrowSum(5,6);

//multiply arrowFunction
const arrowMul=(x,y)=>(console.log(x*y));

//print arrowFunction
const printHello=()=>(console.log("Hello!!!!!!"));

//forEach loop
 let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// })

//same task with arrow function
arr.forEach((val,idx,arr) => {
    console.log(val,idx,arr);    
});