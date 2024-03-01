let arr=[1,2,3,4,5];
//forEach
arr.forEach(myFunc);
function myFunc(value,indx,arr){
    console.log(value);
}

arr.forEach(function(value,indx,arr){
    console.log(value);
})

arr.forEach(value =>{
   console.log(value); 
});
let sum=0;
arr.forEach(element=> {
    sum+=element;
});
console.log(sum);
console.log("//map");
//map
let arr1=[1,2,3,4,5,6,8,9];
let mul2=arr1.map((val,indx,arr)=>{
    return val*2;
})
console.log(arr1);
console.log(mul2);
let ev=arr1.map((val,indx,arr)=>{
    if(val%2==0){
        return val;
    }
})
console.log(ev);
//map never changes the length pf an array

//filter method
let evn=arr1.filter((val,indx,arr)=>{
    if(val%2==0){
        return val;
    }
})
console.log(evn);
//reduce   //reduce into a single value

let total=arr1.reduce((acc,val,indx,arr)=>{ 
    return acc+val; 
})
console.log(total);

let prod=arr1.reduce((acc,val,indx,arr)=>{ 
    return acc*val; 
})
console.log(prod);

//sort
let unsort=[213,34,56,756,76,87,54,324];
unsort.sort();
console.log(unsort);
unsort.sort(function(a,b){
    return a-b; //decending b-a
});
console.log(unsort);
