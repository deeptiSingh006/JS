let arr=[1,2,3,4,5,7,5,1,2,1,2];
//for each,push,map,filter,slice are functions Array
//reduce always returns the accumulated result 
// this accumulated result is the first parmaeter of the call back function 
// specidied in reduce 
// the second parameter is the current vale of the array on which reduce is working

// Program to get the addition of all the elements in the array
let add=arr.reduce( function(sum,curr){
    sum=sum+curr;
    return sum;
},0/*initia; value of the accumulator / return */);

console.log(add);


let answer=arr.reduce( function(mul,curr){
    mul=mul*curr;
    return mul;
},1/*initia; value of the accumulator / return in case of multiplication it will be 1*/);

console.log(answer);

// Program to get the number of times each element is repeated in the array
// Convert a JavaScript object into a string with
// JSON.stringify
let ans=arr.reduce(function(acc,curr){

if(acc[curr]){
    acc[curr]=acc[curr]+1;
}else{
    
    acc[curr]=1;
}
return acc;
},{}/*Define acc as a JSON object*/);
console.log("answer is " + JSON.stringify(ans))

//find a program to find unique values in array
const arr_out=arr.reduce(function(acc,curr){
    if(acc.indexOf(curr)===-1)
    {
        acc.push(curr);
    }
    return acc;
},[]);
console.log("output");
console.log(arr_out);

//Mapping values - It helps to generate new array from existing array       
count_array=['one','two','three','four','five','six','seventeen', 'thousand']
// Output number of characters in each string 
// [3,3,4,4,4,3,9,7]
let c=0
const count_array1=count_array.map((i)=>{
c=i.length;
return c;
});
console.log("counting array of string")
console.log(count_array1);

//to find even numbers of array in array of numbers[1,2,1,4,56,8,10,5,3,2]
let in_arr=[1,2,1,4,56,8,10,5,3,2];
let fil_arr1=in_arr.filter((i)=>{
    return i%2===0;
});
console.log(fil_arr1);

let fil_arr2=in_arr.filter(i=> i%2==0);
console.log(fil_arr2);

//write a program to list all objects with age <50
people = [{
 id: 1,
 name: "John",
 age: 28
}, {
 id: 2,
 name: "Jane",
 age: 31
}, {
 id: 3,
 name: "Peter",
 age: 55
}];

let people_out = people.filter((i)=>i.age<50);
console.log(people_out);

//sorting arrays - to sort an array default sorting will be based on unicode points as a string
//default sort
let sort_arr=['a','b','c','ed',-1,-4,34,'E','R'];
console.log(sort_arr.sort());

let sort_arr1=['a','b','c','E','F','G','o','z','j','k'];
console.log(sort_arr1.sort());

//Alphabetical Sort
let sort_arr2=['a','b','c','E','F','G','h','i','j','k',1,2].sort((a,b)=>{
    //toString() is required so that numbers are converted to string before they are localeComapre
    // since only String has the function localeCompare()
    return a.toString().localeCompare(b);
})
console.log(sort_arr2);


animal_array=["zebras", "dogs", "elephants", "penguins"]
