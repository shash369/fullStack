// // //  function myPromise(a,b){

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


