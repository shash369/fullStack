// //sync->one at a time
// //async->multitask

// // let date =new Date();
// // console.log(date.getSeconds());

// // async function to(){
// //     for (let index = 0; index < 1000000000; index++) { 
// // }}
// // to();
// // let date2 =new Date();
// // console.log(date2.getSeconds());


// // const data=fs.readFileSync("a.txt","utf-8");
// // console.log(data);

// const { log } = require('console');
// const fs=require('fs');

// fs.readFile("a.txt","utf-8",(err,data)=>{
//     if (err) {
//         console.error("Error reading file:", err);
//     } else {
//         console.log(data);
//     }
// })
// log('hello');


// const fs=require('fs')

// function ReadFile1(){
//     return new Promise(function(resolve){
//         fs.readFile('a.txt','utf-8',(err,data)=>{
//             resolve(data);
//         })
//     })
// }

// function print(data){
//     console.log (data);
// }

// ReadFile1().then(print);


const { error } = require('console')
const fs=require('fs')

function ReadFile1(){
    return new Promise(function(resolve){
        fs.readFile("a.txt",'utf-8',(error,data)=>{
            resolve(data);
        })
    })
}

function print(data){
    console.log(data);
}

ReadFile1().then(print);