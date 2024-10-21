let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let cities = ["karachi", "lahore", "islamabad", "multan"];
// for(let j=0;j<cities.length;j++){
// console.log(cities[j]);
// }
console.log("\n");
for (let val of cities) {
  console.log(val.charAt(0).toUpperCase() + val.slice(1));
}



