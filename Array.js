let arr = [1, 2, 3, 4, 5, 7, 5, 1, 2, 1, 2]; // arrays are special kind of objects ..they have properties that no other objects have
//for each,push,map,filter,slice are functions Array
//reduce always returns the accumulated result
// this accumulated result is the first parmaeter of the call back function
// specified in reduce
// the second parameter is the current value of the array on which reduce is working

// Program to get the addition of all the elements in the array
const o= {a:'1',b:5};
console.log("object test" +JSON.stringify(o));


let add = arr.reduce(function (sum, curr) {
  sum = sum + curr;
  return sum;
}, 0); /*initial; value of the accumulator / return */

console.log(add);

let answer = arr.reduce(function (mul, curr) {
  mul = mul * curr;
  return mul;
}, 1 /*initia; value of the accumulator / return in case of multiplication it will be 1*/);

console.log(answer);

// Program to get the number of times each element is repeated in the array
// Convert a JavaScript object into a string with
// JSON.stringify
let ans = arr.reduce(
  function (acc, curr) {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  },
  {} /*Define acc as a JSON object*/
);
console.log("answer is " + JSON.stringify(ans));

//find a program to find unique values in array
const arr_out = arr.reduce(function (acc, curr) {
  if (acc.indexOf(curr) === -1) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log("output");
console.log(arr_out);

//unique value can also be get from creating set with array. let s=new Set(arr);

//Mapping values - It helps to generate new array from existing array
let count_array = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seventeen",
  "thousand",
];
// Output number of characters in each string
// [3,3,4,4,4,3,9,7]
let c = 0;
const count_array1 = count_array.map((i) => {
  c = i.length;
  return c;
});
console.log("counting array of string");
console.log(count_array1);

/* above program using reduce
 let a=count_array.reduce(function(acc,curr){
   
     acc.push(curr.length); //  The push() method returns the new array length: so return statement in front of acc.push(curr.length) throws error
     return acc;

  },[])
  console.log(a);
 */

//to find even numbers of array in array of numbers[1,2,1,4,56,8,10,5,3,2]
let in_arr = [1, 2, 1, 4, 56, 8, 10, 5, 3, 2];
let fil_arr1 = in_arr.filter((i) => {
  return i % 2 === 0;
});
console.log(fil_arr1);

let fil_arr2 = in_arr.filter((i) => i % 2 == 0);
console.log(fil_arr2);

//find the number greater then 8 in given  array
let fil_arr3 = in_arr.filter((i) => {
  return i > 8;
});
console.log("filter 3 program " + fil_arr3);

//write a program to list all objects with age <50
people = [
  {
    id: 1,
    name: "John",
    age: 28,
  },
  {
    id: 2,
    name: "Jane",
    age: 31,
  },
  {
    id: 3,
    name: "Peter",
    age: 55,
  },
];

let people_out = people.filter((i) => i.age < 50);
console.log(people_out);

//sorting arrays - to sort an array default sorting will be based on unicode points as a string
// sort fucntion takes 3 values
// -1 if item 1 < item 2
// 0 ig item1=item2
// 1 if item1>item2
//Any function that can return these three values can be used in sort for sorting values

//default sort if unicode / Ascii comparison whichever
//Ascii value comes first will be smaller that the Ascii values that come later

let arr_s=[1,4,10,32,51,13,19,20,20];
console.log( arr_s.sort());// sorting based on unicode ..not correct result for ascending a-b and descending b-a

console.log(arr_s.sort((a,b)=>{return a-b})); // ascending order
console.log(arr_s.sort((a,b)=>{return b-a}));  //descending order


let sort_arr = ["a", "b", "c", "ed", -1, -4, 34, "E", "R"];
console.log(sort_arr.sort());

let sort_arr1 = ["a", "b", "c", "E", "F", "G", "o", "z", "j", "k"];
console.log(sort_arr1.sort());

//Alphabetical Sort
// Many times in array you may have numbers hence in sort fuction
// you need to convert the element in string using toString
// once the string is there use localeCompare
// this ensures that E > a
let sort_arr2 = ["a", "b", "c", "E", "F", "G", "h", "i", "j", "k", 1, 2].sort(
  (a, b) => {
    //toString() is required so that numbers are converted to string before they are localeComapre
    // since only String has the function localeCompare()
    return a.toString().localeCompare(b);
  }
);
console.log("ALPHABETICAL SORT : " + sort_arr2);

// Sort the array based on the length of the strings in descending order
let animal_array_ds = ["zebras", "dogs", "elephants", "penguins"];
let animal_array_ds1 = ["zebras", "dogs", "elephants", "penguins"];
animal_array_ds.sort(function (a, b) {
  return a.length - b.length;
});
console.log("SORT BASED ON LENGTH OF ELEMENTS DESC :" + animal_array_ds);

// Sort the array based on the length of the strings in ascending order
let animal_array_asc = ["zebras", "dogs", "elephants", "penguins"];

animal_array_ds1.sort(function (a, b) {
  return b.length - a.length;
});
console.log("SORT BASED ON LENGTH OF ELEMENTS ASC : " + animal_array_ds1);

//Numerical Sort (ascending)
let num_arr_asc = [143, 1000, 10, 10000, 1];
console.log("NUMERICAL SORT");
console.log(
  num_arr_asc.sort(function (a, b) {
    return a - b;
  })
);

// Numerical Sort(descending)
let num_arr_des = [100, 1000, 10, 10000, 241];
console.log("NUMERICAL SORT");
console.log(
  num_arr_des.sort(function (a, b) {
    return b - a;
  })
);

//Sorting array by even and odd numbers
//let even_odd_arr = [10, 21, 4, 15, 7, 99, 0, 12];

const arr=["arun","rishi","shivam","raj"] ;
console.log(arr.sort())    //output [ 'arun', 'raj', 'rishi', 'shivam' ]

// Date Sorting
var dates = [
  new Date(2007, 11, 10),
  new Date(2014, 2, 21),
  new Date(2009, 6, 11),
  new Date(2016, 7, 23),
];
console.log("DATE SORT");
console.log(
  dates.sort(function (a, b) {
    return a - b;
  })
);

// Use While loop to print elements of an array
// If you run this look on value then as soon as null value is encountered//falsy value in js are null,undefined,0,empty string,0,false
// the loop will exit
let wl = [9, 3, 6, 2, 7, 8, 9, 0, undefined, 0, null, 22, 1];
let key = 0;
let value;
//while(value=wl[key++]){// this would have exited when null value is encountered
while (key < wl.length) {
  console.log(wl[key]);
  //console.log(value)
  key++;
}

// LOOP: for in : for iterating though the indexes //also used in object iterate in properties
// LOOP: for of : for iterating though the values  // alo used in set and map values

// for in : iterating through the indexes
let index = 0;
for (index in wl) {
  console.log(
    "Using for..in we get Indexes " + index + "  Value : " + wl[index]
  );
}

//for of : interating through the values
let values = 0;
for (values of wl) {
  console.log("Using for..of we ger Value  : " + values);
  // console.log("indexOf : " + wl.indexOf(values));
  // Do not use this if there are duplicate items it qill give error.
}

// Adding the key : value  in the array
// for in will pick the key
// for of will pick the value
wl.foo = "bar";
console.log(wl);

for (index in wl) {
  console.log("Using for..in we get Indexes :" + index);
}

for (values of wl) {
  console.log("Using for..of we ger Value : " + values);
}

// to iterate over array indexes using for..of // used in map and set also
let myArray = [11, 12, 13, 14];
console.log("Using for..of to get indexes/keys");
for (let i of myArray.keys()) {
  console.log("Using myArray.keys() Index :" + i + " Value: " + myArray[i]);
}


// for each
for_each_arr = [11, 12, 133, 4, 8, 7, 6];
for_each_arr.forEach(function (value, index, arr) {
  console.log(
    "Index in forEach: " +
      index +
      "  Value in forEach: " +
      value +
      "  IN array: " +
      arr
  );
});


for_each_arr.forEach(((value,i)=>{console.log("hi trying for each again"+value)}));
// How to compare if two Arrays are equal
// Hint: JSON.stringify()
let arr_check1 = [1, 3, 5, 7];
let arr_check2 = [1, 3, 5, 7];
if (JSON.stringify(arr_check1) === JSON.stringify(arr_check2))
  console.log("matched");
else console.log("unmatched");

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach(number => {
  console.log(number);  
});

/* 
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- array spread operator
*/

// Reduce program for finding number of times a city is
// repeated in an array
const arr=["pune","mumbai","mumbai","jaipur","pune"];
// reduce 
// acc: accumulator to accumulate output
// curr: current item on the array
const output = arr.reduce(function(acc,curr){
if(acc[curr]){
  acc[curr]= ++acc[curr];
  }
  else {
  acc[curr]=1;
  }
  return acc;

},{});
console.log(output);

//merging 3 arrays .Concat returns new array after concatenation
const arr13 = ["Cecilie", "Lone"];
const arr23 = ["Emil", "Tobias", "Linus"];
const arr33 = ["Robin", "Morgan"];
const myChildren = arr13.concat(arr23, arr33);

//write a program to find min number..its not good idea to sort whole array for finding min value.

let count_array1 = [3,-2,11,-22,34,100,99];

 let min=Infinity;    // start min with infinity
 for(let i=0;i<count_array1.length;i++){
     if(count_array1[i]<min)
     {
         min=count_array1[i];
     }

 }
 console.log(min);

 //reduce to find length of each string with name of string
 const arr1=["abc","red","blue"];
 const arr2= arr1.reduce((acc,curr)=>{
            
           acc[curr]=curr.length;
           return acc;
     
 },{});
 console.log(arr2);

 var arr_each = [1, 2, 4, 6, 19];
 arr_each.forEach(function (element, index, arr) {
   console.log(element, (element += 2), index, arr[index]);
 });