// const fs=require('fs')
// function ReadFile1(){
//     return new Promise(function(resolve){
//         fs.readFile('a.txt','utf-8',(err,data)=>{
//             resolve(data);
//         })
//     })
// }

// function Print(data){
//     console.log(data);
// }
// ReadFile1().then(Print)
// // In this case, Print() is immediately invoked before then() is called. This is because the parentheses () after Print cause it to be executed. Since Print doesn't return anything, then() would be invoked on undefined, which is not what you want.
// // ReadFile1.then(Print):

// // Here, ReadFile1 is a function, but then() is not being called on it. then() is a method of promises, and it needs to be called on the result of ReadFile1(), which is a promise. So this syntax is incorrect.
// // ReadFile1().then(Print):

// // This is the correct syntax. ReadFile1() returns a promise, and then() is called on that promise to handle the result asynchronously. Print is passed as a callback function to then(), which will be invoked with the result of ReadFile1() when it resolves.

setTimeout(() => {
    console.log("hi there");
}, 5000);

console.log('afte call back');



