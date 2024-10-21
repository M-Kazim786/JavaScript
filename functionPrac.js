/*For a given array of number ,print the squareof each value using the forEach loop*/

let arr=[1,2,3,4,5];
arr.forEach((num) => {
    console.log(num*num);
});

//another way which uses a little C lang concept
let array=[6,7,8,9,10];

const calSqu=(number)=>(console.log(number*number));
array.forEach(calSqu);