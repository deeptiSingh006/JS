const customerDishes = [
    "Chicken Wings",
    "Fish Sandwich",
    "Beef Stroganoff",
    "Grilled Cheese",
    "Blue Cheese Salad",
    "Chicken Wings",
    "Reuben Sandwich",
    "Grilled Cheese",
    "Fish Sandwich",
    "Chicken Pot Pie",
    "Fish Sandwich",
    "Beef Stroganoff"
  ];
  
  const set1=new Set(customerDishes);   // converting array to set  step1
  console.log(set1.size);
  for(const i of set1){
      console.log(i);
  }

  console.log(new Set([[1], [1], [3]]).size);  //array is object type so  every [1] is unique so give result 3

  //to convert set into array  step2

  const newArray=[...set1];
  console.log(newArray);

  // TO find the unique elements from array and create new array 
  
  const dish= [...new Set(customerDishes)]
  console.log(dish);

  // finding how many time each item is present in array
  const reduceTest=customerDishes.reduce((acc,curr)=>{
      if(acc[curr]){
          acc[curr]=acc[curr]+1
      }else{
          acc[curr]=1;
      }
     return acc; 
  },[])
  //Object.keys(reduceTest).includes('Grilled Cheese')
  // Using keys method and includes
  console.log( Object.keys(reduceTest).includes('Grilled Cheese'));

  //Use 

