// function add(a=10,b=20){
//     return a+b; 
// }
// console.log(add(undefined,30));
// var a=10;
// function foo(){
//     console.log(a);
//     var a=20;
//     function foo1(){
//         a++;
//         console.log(a);
//         var a=10;
//         console.log(a);

//     }
//     // foo1();
// }
// foo();
// function foo1(){
//     a++;
//         console.log(a);
//         var a=10;
//         console.log(a);

// }
// foo1();

function outerfun(fun){
    console.log(fun);
    console.log("inside outerfunction"+fun());
}
function anotherfun(){
    console.log("inside another fun");
}
outerfun(anotherfun);
