//tasks
// 1 : create a calculateor object
 const calculator={
    add:function (a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply:function (a,b){
    return a*b;
    },
    // calculate method in tha calculator object
    calculate :function(operation,a,b){
        if (operation ==='add'){
            return this.add(a,b);
        }else if (operation ==='subtract'){
            return this.subtract(a,b);
        }else if (operation=== 'multiply'){
            return this.multiply(a,b);
        }
    }
 }
 // use call to perform and addtion operation
 const additionResult = calculator.calculate.call(calculator,'add',7,9);
 console.log('addition Result: ${additionResult}');
 
 //use apply to perform a multiplication operation with argument as an array
 const multiplicationResult = calculator.calculate.apply(calculator,['multiply',3,6]);
 console.log('multiplication Result: ${multiplicationResult})');
 
 //create the discountCalculator object
 const discountCalculator={
    discountPercentage :10,
    applyDiscount:function(amount){
        return amount -(amount*this.discountPercentage)/100;
    },
 };

 // use bind to create a new function bound to discountcalculator
 const calculateDiscount=
 discountCalculator.applyDiscount.bind(discountCalculator);
 const discountAmount = calculateDiscount(100);
 console.log('Discounted Amount: ${discountedAmount}');
