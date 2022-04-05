//add this js file into script tag and run on live server to see the results

fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response=>response.json())
 .then(data=>console.log(data.title));