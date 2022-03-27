//currying
let result=function sum(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}
console.log(result(2)(2)(3));

let dt1= new Date(2021, 2, 3, 10);
console.log(dt1);
var date8 = new Date("3-2-2015");
console.log(date8);
var date = new Date('4-1-2015'); // M-D-YYYY

var d = date.getDate();
var m = date.getMonth() + 1;
var y = date.getFullYear();

var dateString = (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y;
console.log(dateString);
var date2 = new Date("February-2015-3");
console.log(date2);
var date1 = new Date("09 july 2015");
console.log(date1);

const arr=["arun","rishi","shivam","raj"] ;
console.log(arr.sort())