/*let stu_obj=[{name:"ds",age:30},{name:"js",age:33}];
function enroll_student(student,callback){
    setTimeout(function(){
     stu_obj.push(student);
     console.log("student enrolled");
     callback();   // callback is a function inside function and used to hold the function execution ...here when push command executes than only callback() will execute
    },3000)
}

function get_student(){
    setTimeout(function(){
     stu_obj.forEach(student => {
         console.log(student.name);
        
     });
     console.log("student list");
    },1000)
}
// Callbacks in JavaScript are functions that are passed as arguments to other functions. This is a very important feature of asynchronous programming,
 and it enables the function that receives the callback to call our code when it finishes a long task, while allowing us to continue the execution of the code.
function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    // TODO: print out sentence
    console.log(`printin line ${sentence}`);
}

// TODO: execute useCallback with the callback as the argument
useCallback(callback);


It is also possible to define callbacks as anonymous functions, like so:

setTimeout(function() {
    console.log("Done!");
}, 5000);
it is also possible to define callbacks as regular functions also Like regular functions, callbacks can receive arguments and be executed more than once.



enroll_student({name:"as",age:13},get_student);*/

//=========Above can also be written using promise ===========

let stu_obj=[{name:"ds",age:30},{name:"js",age:33}];
function enroll_student(student){
   return new Promise(function(resolve,reject){  //promise has a function to perform which has two functions as argements 1. resolve 2. reject===in place of callback we are changing promise state to resolve or reject
   
    setTimeout(function(){
        stu_obj.push(student);
        console.log("student enrolled");
        let error=false  ;
        if(!error){
            resolve("promise resolved"); //if no error than call resolve
        }
        else{
            reject("promise reject");
        }
   } ,5000) ;
}      
)
}

function get_student(){
    //setTimeout(function(){
     stu_obj.forEach(student => {
         console.log(student.name);
        
     });
     console.log("student list");
   // },1000)
}


enroll_student({name:"as",age:13}).then(function(message){   //hold resolve in .then and it has function which performs task on resolving of task
   console.log(message);
    get_student();
}).catch(function(message){   //hold reject in .catch  and it has function which handles error
console.log(message)
}).finally(()=>{console.log("finally understand the promise")});
