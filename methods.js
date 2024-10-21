//Array Methods

let arr=[2,4,6,8,10];
arr.push(56,55);
newArr=arr.map((value)=> {
     return value*value ;  
})

console.log(newArr);


let arr2=["goku","kazim","milo","super sayian"];
arr2.join(",")
newArr2=arr2.filter((str)=>{
    return str.includes('a')
})
console.log(newArr2);

let arr3=[1,3,5,7,9,11];
newArr3=arr3.reduce((val1,val2)=>{
    return val1+val2;
})
console.log(newArr3);