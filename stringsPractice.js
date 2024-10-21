/* Prompt the user to enter there fullname .Generawte a username 
for them based on the input .Start username with @,followed by their full name length*/

let user=prompt("Enter your name");
let str1="@";
let str2=user.length;

let str3=str1+user+str2;
console.log(`your username is ${str3}`);