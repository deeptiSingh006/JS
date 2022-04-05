
//Objet.keys(),Object .values(),Object.enteries() gives array. then we can chain includes or reduce or map 

const users = {
    '2345234': {
      name: "John",
      age: 29
    },
    '8798129': {
      name: "Jane",
      age: 42
    },
    '1092384': {
      name: "Fred",
      age: 17 
    }
  };
   console.log(Object.entries(users));
  const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {   // we are doing array destuctring of curr as Object.enteries gives output of array of arraya of key and value
    if (user.age > 20) {
      acc.push({ ...user, id });   //pushing an object in empty array which has name,age,id
    }  
    return acc;
  }, []);
  console.log(usersOver20);

  //find the data with age age above 20...of comples object stucture above