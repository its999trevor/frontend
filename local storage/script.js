let product=[{
    pname:"mobile",
    pquant:20,
    price:30000
},{
    pname:"laptop",
    pquant:20,
    price:6000
}];


// function print(){
//     let span=document.createElement("span");
        
//         for(let j=0;j<product.length;j++){
//             span.innerHTML=`${Object.entries(product[j])}`;
//             container.append(span);
//         }
    

// }
// print();


//add

let productJSON=JSON.stringify(product);
localStorage.setItem("products",productJSON);

//get
let productfromlocalstorage=localStorage.getItem("products");
let productobj=JSON.parse(productfromlocalstorage);
// console.log(productobj);
// console.log(productobj[0]);

//user data

// let user=[
//     {
//         name:"abc",
//         age:"23",
//         gender:"M"
//     },
//     {
//         name:"zxc",
//         age:"20",
//         gender:"F"
//     },
//     {
//         name:"jkl",
//         age:"19",
//         gender:"M"
//     }

// ];
// let userdata=JSON.stringify(user);
// localStorage.setItem("userdata",userdata);

// let userlocal=localStorage.getItem("userdata");
// let userobj=JSON.parse(userlocal);