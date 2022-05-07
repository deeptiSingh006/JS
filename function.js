//currying
let result=function sum(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}
console.log(result(2)(2)(3));

let dt1= new Date(2021, 2, 3, 10);
console.log(dt1);
var date8 = new Date("3-2-2015");
console.log(date8);
var date = new Date('4-1-2015'); // M-D-YYYY

var d = date.getDate();
var m = date.getMonth() + 1;
var y = date.getFullYear();

var dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y;
console.log(dateString);
var date2 = new Date("February-2015-3");
console.log(date2);
var date1 = new Date("09 july 2015");
console.log(date1);




/*Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.
In other terms, currying is when a function — instead of taking all arguments 
at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.*/

/*

Why should I use currying?
There are several reasons why currying is ideal:

Currying is a checking method to make sure that you get everything you need before you proceed
It helps you to avoid passing the same variable again and again
It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
It is used in functional programming to create a higher-order function
*/

function addSum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(addSum(3)(3)(3));