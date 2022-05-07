let person={};        // creating an empty object
person.fname="d";     // adding property to empty object
person.lname="singh"; // adding property and value to an object
person.age=26;        //adding property and value to an object
//console.log(person);
person.fname="js";    //Modifying propert's value of an object 
console.log(person['fname']);   // use [] notion for accessing object property..must be string
console.log(person.age);  // using .notion for accessing object property

/*delete person.lname;      // deleting property from an object

console.log(person);

console.log('age' in person);  // to check whether property present in the object by using in operator

function greet(){       //creating function greet
console.log("hello");
}

person.greet=greet;  // creating greet property of object and assigning function greet to it
person.greet();   // calling greet function using person object.

person.grade="a1";*/

for(let prop in person) //in operator is used to enumerate the object .prop is conaining each property of person object
{
    console.log(prop +':'+ person[prop] ) //o/p is display property name: value of that property
}

const output = Object.values(person); //values method returns array of values of properties only
console.log( "output array holds value of person object " +output); //using Object 

const output1 = Object.keys(person); //keys method provide array of keys only
console.log( "output array holds keys of person object " +output1); //using Object 

const output2 = Object.entries(person); //keys method provide array of enteries only
console.log( "output array holds enteries of person object " +output2); //using Object ..output is js,lname,singh,age,26

var person1={
    firstName:"Jack",
    lastName:"Smith",
    age:19
};
person1["employed"]=true;



for(let props in person1){
    if(person1.hasOwnProperty(props)){
       console.log(`property is ${props} and value is ${person1[props]}`);
       }
}

 //its possible to convert array into object using spread operator,output is { '0': 22, '1': 3, '2': 44 } because array is a special kind of object here index values of array is used keys. vice versa is not possible
const a=[22,3,44];
const arrTry={...a};
console.log(arrTry);  //output { '0': 22, '1': 3, '2': 44 }

