function abc(a,b,...c){

    console.log(arguments); // arguments is an object provided by dafault with functions but arrow function does not have arguments object
   Object.values(arguments).map((i)=>{console.log(i)})//here values is creating array of values and map is used to iterate those value array
 // error  const arr= arguments.map((i)=>{return i}) // "argumnet is Array-like" object means that arguments has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach() or map().pop() etc
 let args = [...arguments];
console.log(args);  //output is [1,2,3,4,5,6]
}
abc(1,2,3,4,5,6);

const f = (arg1, arg2 ,...arg3) => { console.log(arg1+" " + arg2+" "+arg3);}  //in arg3 we are using rest operator .rest operator is used in destructuring
const a = [1,2,4,5];
f(...a);   // spread operator is used here to send array elements as argumnents.spread is used to make copy or expanding
