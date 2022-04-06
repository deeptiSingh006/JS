
async function get_data()
{
    const response = await fetch('https://api.github.com/users/1');
    console.log(response);
    const data = await response.json();
    console.log(data);
     return data;
} 

get_data().then(()=>{console.log(data);})
//let a=get_data();
//console.log(a);

 


//in normal async function whatever value we return is handled by .then as a resolved value.
async function getBlogPost() {
    return 'works here too!';  
  }
  
  getBlogPost().then(value => console.log(value));

//here value is handled by .then which is returned by async. Async always return a promise 

//previously have to write then 2 times but with async await we pause the code until promise is resolved
// const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
//   .then(response => response.json())
//   .then(data => console.log(data));
async function getPost() {
    const response=await fetch('https://jsonplaceholder.typicode.com/posts/1') ; 
    const data= await response.json();
    console.log(data);
  }
  getPost();


  //handling errors with try catch 

  async function getPerson(){
    try{
    const response=await fetch('https://jsonplaceholder.typicode.com/users/3');
    if (!response.ok) {
          throw new Error(response.status);  
        }
    const data=await response.json();
    console.log(`${data.name} works for ${data.company.name}`)
    }catch(error){
      console.log(error)
    }
    
  }
  
  getPerson();