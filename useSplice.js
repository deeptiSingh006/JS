let arr=[8,9,10,11,12,13,14];
let removedArr=arr.splice(2,3); //splice returns removed element ...splice(index position,no. of elements to be deleted,elements itself to add) <- arguments of splice
//splice is used to remove or add elements in array. source array got change after splice
console.log(arr);
console.log(removedArr); //in above code 10,11,12 is removed fromm arr and results got store in removedArr

// now if we want to add elemnet also in between we can add also

let result=arr.splice(2,0,22,33,44);
console.log(arr);    // in arr[2] position 22,33,44 elemnets got added and 0 means no element will be deleted 
console.log(result); //is empty because we have not deleted any item..splice returns array of deleted items


result=arr.splice(2,2,true,'hi','maa','VL');
console.log(arr);    // in arr[2] position 22,33,44 elemnets got added and 0 means no element will be deleted 
console.log(result); // [22 ,33]