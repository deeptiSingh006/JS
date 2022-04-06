let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 300);
});
p.then((result) => {
  console.log(result);
  return result*2;
}).then((result) => {
    console.log(result);
    return result * 3;
});

//=====promise rejection is handle by .catch and fullfilled state is handled by .then
 new Promise((resolve,reject)=>{
   setTimeout(()=>{
     reject(Error('promise failed'))
   },1000)
 })
 .then(()=>{})
 .catch((error)=>{console.error(error)})

 

 

 