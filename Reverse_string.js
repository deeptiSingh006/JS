let str="hi am good . help me God. jai maa lakshmi";
const str1=str.split(' ').reverse().join(' ');
console.log(str1);

red1=["jai","k","l","jai","k","l"];
let ansred=red1.reduce(function(acc,curr){
    console.log(curr);
    if(acc[curr]){
        acc[curr]=acc[curr]+1;
    }
    else{
        acc[curr]=1;
    }
    return acc;
},{});
console.log(ansred);

const a = {...str};
console.log(a);
//==============Program to uppercase first letter after each full stops
const aa=str.split('. ');// split converts string into array
console.log(aa);
let ch=[];
for(let i=0;i<aa.length;i++)
{
 ch.push(aa[i].charAt(0).toUpperCase()+aa[i].slice(1,));
console.log(ch);
}

console.log(ch.join('. ')); //join converts array into string

// Write a program to extract phone number from following string
// "My Name is Deepti. My phone number is 9871949565"
strph="My Name is Deepti 8765723145. My phone number is 9871949565";
reg=/[0-9]{10}/g;
const ph=strph.match(/[0-9]{10}/g); // returns an array with value,index position ,and string
console.log(ph);
/*let ph1=reg.exec(strph);
console.log(ph1);
 ph1=reg.exec(strph);
console.log(ph1);
ph1=reg.exec(strph);
console.log(ph1);*/
let ph1;
while(ph1=reg.exec(strph)){
    console.log(ph1[0]);
}

//regex can be matched using regx.exec(str)-> returns array of single first found value, run exec again until null s come  , str.match(regx) returns array of matched value or null,regx.test(str) return true or false