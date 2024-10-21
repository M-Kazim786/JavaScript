// console.log("Hello World");

// let input=prompt("Enter your name: ");
// console.log("My name is",input);
/************************************************************************************** */
// Write a program that takes two numbers as input and prints their sum.

// let x=prompt("Enter 1st number:");
// let y=prompt("Enter 2nd number:");

// x=parseInt(x);
// y=parseInt(y);

// let sum=x+y;
// console.log("The sum of",x,"and",y ,"is",sum);

/***************************************************************************************** */

//Write a program that prints the multiplication table (up to 10) of a given number.

// let num=parseInt(prompt("Enter a number:"));
// for(let i=1;i<=10;i++) {
//      console.log(`${num}*${i}=${num*i}`);  // by using ${} i can write everytghing as a string and calculate


// }
/******************************************************************************************** */

//Write a program to find the factorial of a given number.

// let num=parseInt(prompt("Enter a number"));
// let factorial=1;
// for(let i=num;i>=1;i--) {
//     factorial *= i;
// }
// console.log(`The factorial of ${num} is ${factorial} `);

/******************************************************************************************** */

//Write a program to check if a given string is a palindrome or not.

// function palindrome(str) {
//     str=str.toLowerCase();
//     let reversedStr = str.split('').reverse().join(''); //Reversed a string
    
//     return str===reversedStr;
// }
// let user=prompt("Enter any String:")
// if(palindrome(user)) {
// console.log("The string is palindrome");
// } else{
//     console.log("The string is not palindrome");
// }

/********************************************************************************************* */

//Write a program that counts the number of vowels in a given string.

// function vowels(str) {
// let vowelcount=0;

// for(let i=0;i<=str.length;i++) {
//     if(['a', 'e', 'i', 'o', 'u'].includes(str[i])) {
//         vowelcount++;
//     }
// }
// return vowelcount;
// }

// let user=prompt("Enter a String:");

// console.log("Vowels in the given string are",vowels(user));

/******************************************************************************************** */


//Write a program to check if a given number is prime or not.

// input=parseInt(prompt("Enter a number:"));

// if(input%2==0){
//     console.log("The number is even");
// } else if(input%2==1) {
//     console.log("The number is prime");

// }

/******************************************************************************************** */

//Write a program to find the sum of all elements in an array.

// let arr=[2,4,8,6];
// let sum=0;
// arr.push(20);
// for(let i=0;i<arr.length;i++) {
//      sum=sum+arr[i];
// }
// console.log(`The sum of all elements in the array is ${sum}`);

/********************************************************************************************* */

//Write a program that converts temperature from Celsius to Fahrenheit or vice versa, based on user input.

// console.log("Choose 1 to convert from Celcius to Farhenheit and 2 for vice versa: ");
// input=parseInt(prompt("Choose the operation:"));

// input2=parseInt(prompt("Enter a number: "));

// switch(input) {
//   case 1: num=(input2 * 9/5) + 32;
//        break;

//   case 2: num=(input2 - 32) * 5/9;
//        break;
       
// }

// console.log(`The number after conversion is ${num}`);

/***************OR *********************************/

console.log("Choose 1 to convert from Celcius to Farhenheit and 2 for vice versa: ");

input=parseInt(prompt("Enter an Operation: "));
input2=parseFloat(prompt("Enter a number: "));

if(input===1){

    result=toFar(input2);
    console.log(`${input2}°C is equal to ${result}°F`);

} else if(input===2) {

    result=toCel(input2);
    console.log(`${input2}°F is equal to ${result}°C`);
}


function toFar(input2){
    return (input2 * 9/5) + 32;
}
function toCel(input2) {
    return (input2 - 32) * 5/9;
}