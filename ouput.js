function test() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
    return 2;
    }
    }
test();

console.log(new String("yes")===new String("yes"));
console.log("yes"==="yes");


const test=(incrementer)=>{
    if(incrementer<0){
        return;
    }
    console.log('first:'+incrementer);
    incrementer--;
    test(incrementer);
    console.log('second:'+incrementer);
}
test(2);