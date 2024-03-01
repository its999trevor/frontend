function sub(c,d){
    console.log(c-d);
}
//arrow function
let sub2=(c,d)=>{
    console.log(c-d);
}

//if single arg no parenthises required
let mul=x=>{
    console.log("multiply by x");
}


//if only one line of code inside block

let mult2=x=>console.log("multiply by x");



//if { } return keyword is must
let sub3=(c,d)=>{
    return c-d;
}



// if no{}, then there is no need of return keyword
let sub4=(c,d)=>c-d;


let add=(a,b,c)=>{
    return a+b+c;
};
console.log(add(10,10,10));


// setTimeout(()=>{
//     let currentTime=new Date().getTime();
//     console.log("inside loop");
//     while(currentTime+5000>new Date().getTime()){
//     }
//     },2000);
// console.log("function ke baad");
// sub(20,5);
// function sub(c,d){
//     console.log(c-d);
// }