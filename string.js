//expression
// Ensure that you use template literal ` instead of '
let name='Deepti';
message=`How are you ${name}`
console.log(message);
//output: How are you Deepti

//next line \n
let address ='C24\nAyudh Vihar\nDwarka';
// Output UNix
// C24
//    Ayudh Vihar
//               Dwarka
console.log(address);

// next line with carriage return \n\r  backslash for escape 
let address2 ='C24\r\n  Ayudh Vihar\r\n Dwarka';
// C24
// Ayudh Vihar
// Dwarka
console.log(address2);

// Escape character \ to get C\24 in output 
let address3 ='C\\24\r\n  Ayudh Vihar\r\n Dwarka';
console.log(address3);

//r===REVERSE STRING=====
// Take the string
// Split it with `` it splits the string to an array
// Reverse the array formed
// Join the reversed array
let str="hello"
console.log(str[2]);
let str1=str.split(``).reverse().join('') ;
console.log(str1)


let str2="helloh1helloh1helloh1"
console.log(str2.split('h1'))
//[ 'hello', 'hello', 'hello', '' ]
console.log(str2.split('hello'))
//[ '', 'h1', 'h1', 'h1' ]
console.log(str2.split(''))
//[
//    'h', 'e', 'l', 'l', 'o',
//   'h', '1', 'h', 'e', 'l',
//    'l', 'o', 'h', '1', 'h',
//    'e', 'l', 'l', 'o', 'h',
//    '1'
//  ]

//=======================================
// reverse a string without using split operator 
//=======================================
let str_spread="hello hi 9871949444 hi 8768587609 oh"
//use spread operator to spread the string as an array
//use reverse and join operation on the array.
let str1_spread=[... str_spread].reverse().join('') ;
console.log("Reverse a string using Spread Operator");
console.log(str1_spread);
console.log([...str_spread]);

//=======================================
//Count number of characters in a string
//=======================================
let str_out=str_spread.length;
console.log("use string.length");
console.log(str_out);

// extract ph no. from a string
const str1_out=str_spread.match(/[0-9]{10}/g);
console.log("regex to find ph no");
console.log(str1_out);


//=======================================
//Count number of words in a string
//=======================================
let str4="Count number of words in a string"
// tokenise or split the string using ' '<space> as the delimiter
let str5=str4.split(' ');
// array.length is used to find the length of the array
console.log("Number of Words : " + str5.length);

//=======================================
//write a custom reverse function
//=======================================
function revStr(s){
    //Declare a variable to store reversed string
    let strRev=''
    //loop the input string to its length
    for(let i=s.length-1;i>=0;i--)
    {
        strRev+=s[i];
    }
    return(strRev);
}
//Testing the function
console.log(revStr("this is working"));

//=======================================
//Split following string based on ,
// string_name="one,two,three,four,five"
//=======================================
console.log("one,two,three,four,five".split(","));

//=======================================
//Split following string based on |
// string_name="one|two|three|four|five"
//=======================================
console.log("one|two|three|four|five".split('|'));

//====replace , in a string with -- ======
console.log("one,two,three,four,five".split(",").join('--'))

// "Hi my name is Deepti Singh. I work as a Team lead at HCL"
//splice a string from indices 0,10
console.log("Hi my name is Deepti Singh. I work as a Team lead at HCL".slice(0,11));
// splice a string from indices 10,15
console.log("Hi my name is Deepti Singh. I work as a Team lead at HCL".slice(10,16));
// splice a string from indices 15, to end of string 
console.log("Hi my name is Deepti Singh. I work as a Team lead at HCL".slice(15,));
// to convert string into toUpperCase.
console.log("Hi my name is Deepti Singh. I work as a Team lead at HCL".toUpperCase());
// to convert string into lower case
console.log("HI MY NAME IS DEEPTI".toLowerCase());
//to repeat string by 5 times
console.log("HI MY NAME IS DEEPTI".repeat(5));
//find string deepti in below string



// Find and Repalce in String 
// indexOf
// lastIndexOf
// includes
// match
// replace
// search
// RegExp
// To search if a substring exist in a strring
// includes retruns true or false of the substring exist or not
searchString="Hi my name is Deepti Singh.Deepti works as a Team lead at HCL"
console.log(searchString.includes("Deepti"));
//true
console.log(searchString.includes("Maya"));
//false
console.log(searchString.includes("deepti"));
//false : case sensitive
// to find the when the first time Deepti exists
console.log(searchString.lastIndexOf('Deepti'))
// Find total number of times Deepti appears in the string
// we will use string match function and RegEx
// match function returns an array with number of times the REgEx string was dound
console.log("CASE Sensitive Example")
arrayWithMatches=searchString.match(/Deepti/g);
console.log(arrayWithMatches)
//['Deepti','Deepti']
// NUmber of times Deepti has come in the sting
console.log(arrayWithMatches.length);
//2
//Case insensitive search ignore case
console.log("Ignore Case Example")
arrayWithMatchesIgnoreCase=searchString.match(/DEEPTI/gi);
console.log(arrayWithMatchesIgnoreCase)
console.log(arrayWithMatchesIgnoreCase.length);
// to replace Deepti with maya in searchstring
console.log(searchString.replace(/DEEPTI/ig,'Maya'));

//capitalize first letter of each word of string
var search1="Case insensitive search ignore case";
// First Split the string in words using split with ' '
var res_search=search1.split(' ');
// Create a new array to store the results
let ch=[];
// Take one word at a time 
// Get postion of first character using charAt(0)
// Convert to upper
// Get the rest of the word using slice
// concatenate upper case character + rest of the word
for(let i=0;i<res_search.length;i++)
{
   
ch.push(res_search[i].charAt(0).toUpperCase() +res_search[i].slice(1,));
console.log(ch);
}
// Join the array with ' ' between each word
console.log(ch.join(' '));

//Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

 //I am a "double quoted" string inside "double quotes".
 const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
 console.log(myStr);

 //Build myStr1 over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.
 let myStr1 = "This is the first sentence. ";
 myStr1 += "This is the second sentence.";

 //const ourName = "freeCodeCamp";
//const ourStr = "Hello, our name is " + ourName + ", how are you?";
const myName = "Deepti";
const myStr2 = "My name is "+myName +" and I am well!";
console.log(myStr2);
//In JavaScript, String values are immutable, which means that they cannot be altered once created.
//For example, the following code:

//let myStr = "Bob";
//myStr[0] = "J";
//cannot change the value of myStr to Job

//Use Bracket Notation to Find the Nth-to-Last Character in a String

//For example, you can get the value of the third-to-last letter of the const firstName = "Augusta" string by using firstName[firstName.length - 3]

//Example:

const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
console.log(thirdToLastLetter); 

// Write a program to extract phone number from following string
// "My Name is Deepti. My phone number is 9871949565"


let str10 = "Please locate where 'locate' occurs!";
console.log(str10.match(/locate/gi));   // match returns array of matched string
console.log(str10.indexOf("locate")) // returns first found index position else -1 .DOESNOT SUPPORT REGEX
console.log(str10.search("locate"))  //search is similar to indexOf but it supports regex .return first index position
console.log(str10.search(/LOcate/i));