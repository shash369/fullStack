// function myset(callback ,duration){
//     setTimeout(callback,duration);
// }

// myset(()=>{
//     console.log("hello");
// },2000);

// function promiseMyset(duration){//dont expect a callback
   
//     const p=new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     });

//     return p;
// }
// const ans=promiseMyset(5000);

// ans.then(()=>{
//     console.log("hello");
// });

// function returnPromise(duration){
//     const p=new Promise(function(resolve){
//         setTimeout(resolve,duration)
//     })
//    return p;
// }
// const p=returnPromise(2000).then(()=>{
//     console.log("using promise");
// })


function add (a,b){
    const t=new Promise(function(resolve){
        resolve(a*b);
    })
    return t;
}

add(4,5).then((data)=>{
    console.log(data);
})


