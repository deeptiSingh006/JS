//import axios from 'axios';
async function get_data()
{
    const response = await fetch('https://api.github.com/users/1');
    console.log(response);
    const data = await response.json();
    console.log(data);
     return data;
} 
//console.log("i am using axios");
get_data().then(()=>{console.log(data);})
//let a=get_data();
//console.log(a);

// need to debug the same. 