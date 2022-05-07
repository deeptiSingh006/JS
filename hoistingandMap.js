
console.log(x);
var x=2;
console.log("hello js world", 5 + 2, "i can do this"); //hello js world 7 i can do this

let map1=new Map([
    ['a',1],
    ['b',2],
    ['c',3]
]);
let map2=new Map([
    ['a',3],
    ['b',4],
    ['f',3]
   
]);

let spread_map=new Map([...map1,...map2]); //map will be formed with unique keys and map2 keys value override the map1 keys value
console.log(spread_map.size);
for(let i of spread_map){   //for iteration for of is used
   console.log(i); // outp
}

/*Maps‌ ‌
A‌ ‌map‌ ‌is‌ ‌a‌ ‌key-value‌ ‌pairs‌ ‌collection‌ ‌that‌ ‌can‌ ‌apply‌ ‌any‌ ‌data‌ ‌type‌ ‌as‌ ‌a‌ ‌key,‌ ‌ maintaining‌ ‌the‌ ‌sequence‌ ‌of‌ ‌its‌ ‌entries.‌

Maps‌ ‌contain‌ ‌both‌ ‌elements‌ ‌of‌ ‌objects‌ ‌and‌ ‌array.‌ ‌But,‌ ‌conceptually,‌ ‌they‌ ‌are‌ ‌similar‌ ‌to‌ ‌objects.‌

The‌ ‌primary‌ ‌distinction‌ ‌is‌ ‌that‌ ‌maps‌ ‌allow‌ ‌any‌ ‌type‌ ‌of‌ ‌keys.‌

The‌ ‌main‌ ‌properties‌ ‌and‌ ‌methods‌ ‌of‌ ‌maps‌ ‌are‌ ‌the‌ ‌following:‌

new‌ ‌Map()‌‌ ‌‌–‌ ‌creating‌ ‌the‌ ‌map.‌
map.set(key,‌ ‌value)‌‌ ‌–‌ ‌storing‌ ‌the‌ ‌value‌ ‌by‌ ‌the‌ ‌key.‌
map.get(key)‌‌ ‌–‌ ‌returning‌ ‌the‌ ‌value‌ ‌by‌ ‌the‌ ‌key,‌ ‌‌undefined‌‌ ‌‌if‌ ‌no‌ ‌‌key‌‌ ‌exists‌ ‌in‌ ‌the‌ ‌map.‌
map.has(key)‌‌ ‌–‌ ‌returning‌‌ ‌‌true‌‌ ‌if‌ ‌there‌ ‌exists‌ ‌a‌ ‌‌key‌,‌ ‌and‌ ‌‌false‌‌ ‌otherwise.‌
map.delete(key)‌‌ ‌–‌ ‌removing‌ ‌the‌ ‌value‌ ‌by‌ ‌the‌ ‌key.‌
map.clear()‌‌ ‌–‌ ‌removing‌ ‌everything‌ ‌from‌ ‌the‌ ‌map.‌
map.size‌‌ ‌–‌ ‌returning‌ ‌the‌ ‌current‌ ‌element‌ ‌count.‌*/
let priceMap = new Map([
    ['banana', 250],
    ['apple', 150],
    ['peach', 200]
  ]);
  // running the function for each pair (key, value)
  priceMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // banana, 250 etc
  });