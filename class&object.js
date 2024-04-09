 const gods={
    ram:"god1",
    shyam:"god2",
    bhole:"prime god"
}

// console.log(gods['bhole'])
// console.log(gods.bhole)

// clsass start

//remember date is a allredy defind class

class animal{
    constructor(name,legs,food,speaks){
        this.name=name,
        this.legs=legs,
        this.food=food,
        this.speaks=speaks
    } 
     bolo(params) {
        console.log(`${this.name} speakes ${this.speaks}`);
    }
}
 
let dog=new animal("tommy",4,"rotti","bow bow");//sjgk

dog.bolo()