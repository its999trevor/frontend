let productid=document.querySelector("#productID");
let pname=document.querySelector("#Name");
let catagory=document.querySelector("#catagory");
let qty=document.querySelector("#quantity");
let price=document.querySelector("#price");
let form=document.querySelector(".prodForm");

console.log(productid,pname,catagory,qty,price,form);
form.addEventListener("submit",(ev)=>{
    ev.preventDefault();
    
    let productData=localStorage.getItem("productdata") || [];
    if(productData.length>0){
        productData=JSON.parse(productData);
    }
    let flag=false;
    productData.forEach((element,index) => {
        if(element.ProductId==productid.value){
            productData[index].Quantity==qty.value;
            flag=true;
        }
    })
    if(flag){
        localStorage.setItem("productdata",JSON.stringify(productData));  
    }
    let newProduct={
        ProductId:productid.value,Name:pname.value,Catagory:catagory.value,Quantity:qty.value,Price:price.value
    };
    productData.push(newProduct);
    localStorage.setItem("productdata",JSON.stringify(productData));
}
)

