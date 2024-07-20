async function sleep(time){
    return new Promise((resolve)=>{
        setTimeout(resolve, time);
    })
}

let time=Date.now();
sleep(100).then(()=>{
    console.log(Date.now()-time)
}) 