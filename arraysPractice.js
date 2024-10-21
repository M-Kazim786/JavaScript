/* Q1---->For a given array with marks of student ->[85,97,44,37,76,60]
Find the average marks*/

// let arr=[85,97,44,37,76,60];
// let sum=0;
// // for(let i=0;i<arr.length;i++) {
// // sum=sum+arr[i];

// // }

// for(val of arr){
//     sum=sum+val;
// }
// let ave=sum/arr.length;
// console.log(`The Average of the marks -->[85,97,44,37,76,60] is ${ave}`);

/********************************************************************************************************/

/* Q2----> For a given arr with prices ->[250,645,300,900,50]. All items have an offer of 10% OFF on them
Change the arr to store the final price after applying offer*/

// let arr=[250,645,300,900,50];
// for(let i=0;i<arr.length;i++){
// let off=arr[i]/10;
// console.log(`The price is ${arr[i]}`);

// console.log(`The final price after discount is ${arr[i]-off}`);

// }

/*******************************************************************************************************/

/*Q3----> Create an array to store companies -->"Bloomberg ,Microsoft,Uber,IBM,Netflix"*/
let arr=["Bloomberg", "Microsoft", "Uber", "IBM", "Netflix"];

//remove the first company from the array
let val=arr.shift();
console.log(arr);

//remove IBM and add ola in its place

let newval=arr.splice(2,1,"ola");
console.log(arr);

//add amazon at the end
arr.push("amazon");
console.log(arr);