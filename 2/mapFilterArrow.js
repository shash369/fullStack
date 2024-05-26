//arrow

const sum=(a,b)=>{
    return a+b;
}
//console.log(sum(5,10))

//map=> 
let arr=[1,5,10,11]
function transform(i){
   return i*3;
}
// let z=arr.map(transform);
let z=arr.map((i)=>
             i*4)
console.log(z)

//filtter
let arr2=[10,2,4,5,10]
let m=arr.filter((i)=>
i==10)
// console.log(m);