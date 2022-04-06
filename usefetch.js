//add this js file into script tag and run on live server to see the results
// get method is by default. 
fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response=>response.json())
 .then(data=>console.log(data.title));

 
//For posting data 
//step1:create a object which is to be post
//step 2 in fetch give 2 argumnets i.e url and data .In the body section if data which is to be posted is object then stringify it otherwise if string not neccesary to stringify 

  const blogPost = {
    title: "Cool post",
    body: "trying to post blog ..Jai maa lakshmi",
    userId: 666 
  }

  const data={
      method:"Post",
      header:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(blogPost)
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts',{data})
  .then(response=>response.json())
  .then(data_json=>console.log(data_json))
  
  fetch('https://jsonplaceholder.typicode.com/pots/1')
    .then(response => {
        if (!response.ok) {  //response.ok is aproperty used to throw error ...if range is  2xx fine then it will return true else false
          throw new Error(response.status);    
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error(error))


    // Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3


fetch('https://jsonplaceholder.typicode.com/users/3')
.then(response=>{
    if(!response.ok){
        throw new Error(response.status);
    }
   return response.json();
})
.then(data=>{console.log(`my name is ${data.name} and work in company ${JSON.stringify(data.company.name)}`)})
.catch(error=>{console.log(error);})
.finally(()=>{console.log("final run");});


   