// create mao to store contact information

const contactMap =new Map();

contactMap.set("sanju",{age:19,email:"sanjugoswami@gmail.com",location:"pali"});
contactMap.set("divya",{age:18,email:"divyavyas@gmail.com",location:"jodhpur"});
contactMap.set("lekhika",{age:20,email:"lekhikamali@gmail.com",location:"pali"});
function getContact(name){
    return contactMap.get(name);
}
console.log(getContact("divya"))

//out put
//{ age: 18, email: 'divyavyas@gmail.com', location: 'jodhpur' }