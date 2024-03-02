/**  create a simple java script function named displayinfo that takes two parameters and logs a massag
use call
use apply 
create another function
use bind to create new function*/

function displayInfo(name,role){
    console.log(`name: ${name},Role: ${role}`);
}

displayInfo.call(null,"Sanju","Developer");

displayInfo.apply(null,["Gaurav","SDE"]);
function greet(){
    console.log(`Hello,${this.name}!`);
}
const user ={name:"SB"};
const boundGreet = greet.bind(user);
boundGreet();