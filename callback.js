//revision 
function squae(n){
//    console.log('square is called');
    return n*n;
}
function cube(n){
    return n*n*n; 
} 
function calculat(a,b,fun){
    let alp1=fun(a);
    let alp2=fun(b);

    return alp1+alp2;
}
console.log(calculat(10,5,squae));