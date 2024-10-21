// TEMPLATE LITERALS

// let obj={
//     item: "pen",
//     price: 10,
//     gst :0.5,
// }
// console.log(`The cost of ${obj.item} is ${obj.price+ obj.gst}`);

/******************************************************************************************/

//STRING METHODS

let str="Muhammad Kazim";
str=str.toUpperCase(); /**********str.toUpperCase*/////////
console.log(str);

str=str.toLowerCase(); /**********str.toLowerCase*******/
console.log(str);

//str.slice(start,end)
console.log(str.slice(0,8));

//str1.concat(str2)
let str1="Milo ";
let str2="baby";

console.log(str1.concat(str2));

//Another way for concatenation
console.log(str1+str2);

//To replace a string  **************str.replace(searchVal,newval)************************

let string="hello";
console.log(string.replace("h","y"));

console.log(string.charAt(0));
