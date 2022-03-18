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