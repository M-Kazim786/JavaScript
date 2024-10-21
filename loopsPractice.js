//print all even numbers from 0 to 100
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

/*******************************************************************************************************/

/*Create a game where you start with any random game numvber.Ask the user to keep guesiing 
the game number ubntil the user guessesd the corretc number */

let num=20;
let user=prompt("enter a number");

// Convert user input to a number
user = parseInt(user);
while(user!=num) {
  user=prompt("Try again");
}
console.log("You guessed the correct number");
