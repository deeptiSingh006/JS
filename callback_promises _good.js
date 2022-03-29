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
