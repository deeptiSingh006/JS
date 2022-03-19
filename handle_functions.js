// program to use arguments variable of function to get arguments sent at the time of function calling.

function add(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){   //arguments is an array with all arguments present in it
        
      //  console.log(arguments[i]);
        sum = sum + arguments[i];
        console.log(sum);
    }
    console.log(sum);
    return sum;
}
console.log(add(1,2,3));
console.log(add(2,4,6,9));