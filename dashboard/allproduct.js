let productData=localStorage.getItem("productdata");
let container=document.querySelector(".container");
if(productData){
    productData=JSON.parse(productData);
    container.innerHTML="";
    productData.forEach(element => {
        console.log(element);
        let productId=element.ProductId;
        let pname=element.Name;
        let catagory=element.Catagory;
        let qty=element.Quantity;
        let Price=element.Price;
        createProduct(productId,pname,catagory,qty,Price);
    });
}
function createProduct(pid,n,c,q,p){
    let div=document.createElement("div");
    div.classList.add("productContainer");
    div.innerHTML=`
    <div class="name">${n}</div>
    <div class="catagory">${c}</div>
    <div class="prodcutID">${pid}</div>
    <div class="quantity">${q}</div>
    <div class="price">${p}</div>
    <button class="delete">delete</button>`;
    container.append(div);
    
}
container.addEventListener("click",(ev)=>{
    let classname=ev.target;
    console.log(classname);
    let deletequantity=prompt("enter the value");
    let pid=ev.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    console.log(pid);
    console.log(deletequantity);
    productData.forEach((element,indx) => {
        if(element.ProductId==pid){
            productData[indx].Quantity-=deletequantity;
        }
    });
    localStorage.setItem("productdata",JSON.stringify(productData));  
});