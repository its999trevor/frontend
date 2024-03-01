console.log(add(3,4));
function add(a,b){
    return a+b;
}
var sub= function(a,b){ 
    return a-b;
}
// var sub=sub(5,3);
// console.log(sub);
//func by default is undefined 

//default parameter
function add1(a=10,b=20){
    return a+b;
}
console.log(add1());
console.log(add1(50,50));
