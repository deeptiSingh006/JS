let person={};        // creating an empty object
person.fname="d";     // adding property to empty object
person.lname="singh"; // adding property and value to an object
person.age=26;        //adding property and value to an object
//console.log(person);
person.fname="js";    //Modifying propert's value of an object 
console.log(person['fname']);   // use [] notion for accessing object property
console.log(person.age);  // using .notion for accessing object property

delete person.lname;      // deleting property from an object

console.log(person);

console.log('age' in person);  // to check whether property present in the object by using in operator

function greet(){       //creating function greet
console.log("hello");
}

person.greet=greet;  // creating greet property of object and assigning function greet to it
person.greet();   // calling greet function using person object.

person.grade="a1";

for(let prop in person) //in operator is used to enumerate the object .prop is conaining each property of person object
{
    console.log(prop +':'+ person[prop] ) //o/p is display property name: value of that property
}