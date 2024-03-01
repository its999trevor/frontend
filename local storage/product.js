let productdata=localStorage.getItem("productdata");
if(productdata.length>0){
    productdata=JSON.parse(productdata); 
}
else{
    productdata=[];
}

let form=document.querySelector(".myForm");
let pname=document.querySelector(".name");
let qty=document.querySelector(".qnty");
let price=document.querySelector(".price");
form.addEventListener("submit",function(ev){
    console.log(ev);
    ev.preventDefault();
    console.log(pname.value,qty.value,price.value);

    productdata.push({pname:pname.value,
        pquant:qty.value,
        price:price.value});
    
    localStorage.setItem("productdata",JSON.stringify(productdata));
    show();
});

function show(){
    let pdata=localStorage.getItem("productdata");
    pdataobj=JSON.parse(pdata);
    
    let container=document.querySelector(".container");
    container.innerHTML="";
    for(let i=0;i<pdataobj.length;i++){
        let pitem=pdataobj[i];
        console.log(pitem);
        let div=document.createElement("div");
        div.classList.add("productitem");
    div.innerHTML=`
    <span class="pname">${pitem.pname}</span>
    <span class="pqty">${pitem.pquant}</span>
    <span class="pprice">${pitem.price}</span>`;
    container.append(div);
}
}
show() ;
// console.log(product);