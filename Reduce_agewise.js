//Reduce program for finding number of times each age comes in each object.
const arr=[{name:"d",lastname:"s" ,age:26},
           {name:"j",lastname:"m" ,age:36},
           {name:"a",lastname:"sm" ,age:26},
           {name:"t",lastname:"sm" ,age:9}];
// reduce 
// acc: accumulator to accumulate output
// curr: current item on the array
//reduce takes two arguments one is function with 2 parameters
//acc and curr and another argument of reduce is value to intialize the acc

const output = arr.reduce(function(acc,curr){
if(acc[curr.age]){
  acc[curr.age]= ++acc[curr.age];
  }
  else {
  acc[curr.age]=1;
  }
  return acc;

},{});
console.log(output);