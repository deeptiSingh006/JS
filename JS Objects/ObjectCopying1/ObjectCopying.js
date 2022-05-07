"use strict";

var myCar = {

    make: "Volvo",
    model: "S60",
    price: 42000,
    color: "Grey",

    seats: {
        material: "Leather",
        color: "Brown"
    }
}

//console.log("My car: ", myCar);

var yourCar = myCar;
//console.log("Your car: ", yourCar);

yourCar.tyres = "Pirelli";
yourCar.seats.color = "Grey";

//console.log("Your car: ", yourCar);

//console.log("My car: ", myCar);

var hisCar = Object.assign({}, myCar);

hisCar.color = "Red";
hisCar.seats.color = "Neon Green";

//console.log("The effect of Object.assign():");
//console.log("His car: ", hisCar);
//console.log("My car: ", myCar);

var herCar = {...myCar};

//console.log("Her car: ", herCar);

herCar.seats.color = "Black";

//console.log("The effect of the spread syntax:");
//console.log("Her car: ", herCar);
//console.log("My car: ", myCar);

myCar = {

    make: "Volvo",
    model: "S60",
    price: 42000,
    color: "Grey",

    seats: {
        material: "Leather",
        color: "Brown"
    }
}

yourCar = JSON.parse(JSON.stringify(myCar));

yourCar.tyres = "Pirelli";
yourCar.seats.color = "Purple";

console.log("The effect of JSON.parse() and JSON.stringify(): ");
console.log("Your car: ", yourCar);
console.log("My car: ", myCar);
























