const promiseOne=new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log("Async task is completed");
    resolve();
   },2000);   
});
promiseOne.then(function(){
    console.log("Promise is consumed");
})

//direct way to make a new promise
new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("2nd Async task is completed");
        resolve();
     },3000)
}).then(()=>{
    console.log("2nd promise is consumed");
})

//passing values in the resolve method
const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Kazim",email:"mkaazim13@gmail.com"});
    },3000)
})
promiseThree.then((parameters)=>{
    console.log(parameters);
})

//using then and catch for error handling
const promiseFour=new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let error=false;
        if (!error) {
            resolve({Name:"Muhammad Kazim",Job:"Web-Developer",Salary:"500k"});
        } else {
            reject("ERROR: Something went wrong");
        }
     },4000)
})
promiseFour.then((data)=>{
    console.log(data.Name);
      console.log(data.Job);
      return data.Salary;
      
}).then((Salary)=>{
    console.log(Salary);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

// wolverine example

function async1(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error) {
            resolve({name:"Calverine",hero:"Wolverine variant"});
        }else if(error) {
            reject("We will treat you better than those shit fucks down the block");
        }
    },3000);
});}
function async2(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error) {
            resolve({name:"Omega X",villain:"Wolverine variant"});
        }else if(error) {
            reject("deadpool mission falied");
       }
    },3000);
})}
async1().then((data)=>{
    console.log(data.name);
    console.log(data.hero);
    return async2();
}).then((data2)=>{
    console.log(data2.name);
    console.log(data2.villain);

}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Going to the next timeline")
});


//Async await

// (same example of wolverine)

function async1(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error) {
            resolve({name:"Calverine",hero:"Wolverine variant"});
        }else if(error) {
            reject("To the next....");
        }
    },3000);
});}
function async2(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error) {
            resolve({name:"Omega X",villain:"Wolverine variant"});
        }else if(error) {
            reject("deadpool mission falied");
       }
    },3000);
})}

// IIFE.....
(async function () {
 try{
     const result1=await async1();
     console.log("Result from async1 is: ",result1)
     
     const result2=await async2();
     console.log("Result from async2 is: ",result2);
 } catch (err){
     console.log(err);
 } finally {
     console.log("We will treat you better than those shit fucks down the block");
 }
}) ();
//saveMultiverse(); (not needed if using IIFE)

//................

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if (!error) {
            resolve({username:"Milo",password:"1234"});
        } else {
            reject("Error hai Bhaiiii!!!");
        }
    },4000)
})
async function consumePromiseFive() {
    try {
        const response=await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();