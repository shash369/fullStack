// // //  function myPromise(a,b){

const { resolve } = require("styled-jsx/css")

// // //     return new Promise(function(resolve){
// // //         resolve(a+b+b);
// // //     })
// // //  }

// // //  myPromise(5,6).then((data)=>{
// // //     console.log(data);
// // //  })

// // function timedelay(del){
// //     return  new Promise(function(resolve){
// //         setTimeout(()=>{
// //             resolve();
// //         },del);
// //     })
// // }

// // timedelay(1000).then(()=>
// // {console.log("hello")}
// // )

// function add(x,y,m) {
//     return new Promise((resolve)=>{
//          resolve(x+y+m);
//     })
// }
// function sub (x) {

//     return new Promise((resolve)=>{
//           resolve(x-20);
//     })
// }

// add(10,20,30).then((data)=>{
//    return sub(data);}).then((data)=>{
//     console.log(data);
// })
 
// function sub(x,y){
//     return new Promise(function (resolve) {
//         resolve(x-y);
//     })
// }
// sub(30,20).then((data)=>{
//     console.log(data);
// })
 
// let n=new Promise(function(resolve){
//     resolve();
// console.log(n);//=> primise is allready resolved
//                //so this wiil not be printed
//                //and function will be stuck
// })
// let n = new Promise((resolve)=>{
//     resolve('Resolved Value');
// });

// n.then((data) => {
//     console.log(data); // Log the resolved value
// });

// function hello(fn){
//     fn(3+2);
// }
// async function he(){
//     hello(function(value){
//         console.log(value);
//     })
// }
// he();

// function promi(duration){
//    return new Promise((resolve)=>{
//       setTimeout(resolve,duration);
//    })
// }
// promi(2000).then((data)=>{
//         console.log(3+5);
    
// })

                                                        //promise channing=>[]

// function promisifed(duration){
//     return new Promise((resolve)=>{
//         setTimeout(resolve,duration);
//     })
// }
// promisifed(2000).then(()=>{
//     console.log("after one promise");
//     return promisifed(4000);
// }).then(()=>{
//     console.log("after second promise");
// })

// function add(x,y){
//     return new Promise((resolve)=>[
//         resolve(x+y)
//     ])
// }
// add(3,7).then((data)=>{
//    console.log(data);
//    return add (15,data+5)
// }).then((data)=>{
//     console.log(data);
// })