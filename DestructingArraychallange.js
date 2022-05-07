//Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips'];
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers'];

// Modify these four variables first
//let chefsFishDishes;
//let regularFishDishes;
const [chefsFishDishes,...regularFishDishes]=fishDishes; //destucturing using rest operator====>in console it will display as array
//let chefsMeatDishes;
//let regularMeatDishes;
const [regularMeatDishes,...chefsMeatDishes]=meatDishes ;
console.log({chefsFishDishes, regularFishDishes});
console.log({regularMeatDishes,chefsMeatDishes});

// Finally, use the spread operator to create these two arrays as well
let chefsDishes=[chefsFishDishes,...chefsMeatDishes]; //spread operator
let regularDishes=[...regularFishDishes,regularMeatDishes];
console.log({chefsDishes, regularDishes})// with key name individual arraya are displayed


//if array ahas single string and we use spread operator...it spreads single characters in array.If multiple strings are there then it spreads multiple strings in array.
// using console.log({ name of destructing variale increases readability and same name act as key})


// nested object are destructured this way
let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

//The following statement destructures the properties of the nested name object into individual variables:
let {name: {
    firstName,
    lastName
} } = employee;
console.log(firstName);
console.log(lastName);




