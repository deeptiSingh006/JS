//when we return a function from a function it returns inner function defination + its lexical scope and it holds value of variables in its lexical scope between exececutions.
//so closure is basically bundled down of a function with ite parents lexical scope. 
//closure is created when a function is returned from a function.

function outer(){
    let counter =0;
    function inner(){
        console.log(`counter is ${counter}`);
        counter++
    }
    return inner;
}
let fn=outer();
fn();
fn();
fn();
//output is 0,1,2 because inner function is a closure that means if outer function is over ,inner function has the access to the value of variables present in its parent's lexical scope so variable counter doesnot vanished  
//Defination of inner is stored with reference of counter to get the latest value i.e value of counter persisits .

//CURRYING
function Sum(a,b,c){
    return(a+b+c);
}
function currySum(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }
}

let s= currySum(Sum);
const result=s(3)(3)(3);
console.log(typeof(result));

//Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

//Currying doesn’t call a function. It just transforms it.