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
