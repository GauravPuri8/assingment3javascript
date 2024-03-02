//use call method
const person1= {name :"divyu",age:20};
const person2= {name :"chimu",age:19};
function introduce(){
    console.log("hello,I am ${this.name},and my age is ${this.age}.");
}
introduce.call(person2);
