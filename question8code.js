//using the array of numbers , use the foreach method and store only the even numbers in a new array
let originalNumbers =[2,5,8,10,3];
let evenNumber=[];
originalNumbers.forEach(number=>{
    if (number%2===0){
        evenNumber.push(number);

    }
});
console.log("even numbers:",evenNumber);
