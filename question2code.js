//array ages[19,22,19,24,20,25,26,24,25,24]
// sort array and find max and min age 
// find the median age 
// find the average age 
// find ths range of the ages 
// compare the value of (min average)and (max agerage),use abs ()method 

const ages =[19,22,19,24,20,25,26,24,25,24]
//first sort tha array 
ages.sort((a,b)=>a-b) ;
console.log('sorted ages:',ages);
 
// find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length-1];
console.log('min Age:',minAge);
console.log('max Age:',maxAge);

// find tha median age
let medianAge;
if (ages.length%2===0)
{
    const mid1 = ages[Math.floor(ages.length/2)-1];
    const mid2 = ages[Math.floor(ages.length/2)];
    medianAge =(mid1+mid2)/2;
}else{
    medianAge = ages[Math.floor(ages.length/2)];
}
console.log('Median Age:',medianAge);

// find the average age 
const sumAges =ages.reduce((sum,age)=>sum+age,0);
const averageAge =sumAges/ages.length;
console.log('Average Age:',averageAge);

// find the range of ages
const ageRange = maxAge-minAge;
console.log('Age Range:',ageRange);

//compare (min - average )and (max- average)
const minDifference=Math.abs(minAge- averageAge);
const maxDifference=Math.abs(maxAge- averageAge);
console.log('MIn -Average Difference:',minDifference);
console.log('Max -Average Difference:',maxDifference);


//output
/**sorted ages: [
  19, 19, 20, 22, 24,
  24, 24, 25, 25, 26
]
min Age: 19
max Age: 26
Median Age: 24
Average Age: 22.8
Age Range: 7
MIn -Average Difference: 3.8000000000000007
Max -Average Difference: 3.1999999999999993 */
