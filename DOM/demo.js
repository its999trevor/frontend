const byId=document.getElementById("p1");
console.log(byId);
//classname
const byClass=document.getElementsByClassName("list")[0];
console.log(byClass);

//by tagname
const byTag=document.getElementsByTagName("p");
console.log(byTag);
// querySelector
const query1=document.querySelectorAll(".class26");
const myHello=document.querySelector(".hh");
console.log(myHello.innerHTML);
//dom properties
myHello.innerHTML="<div>hello0</div><p>adasjpdoajdpasj</p>";
myHello.innerText="hello world!!";
myHello.textContent="hell0000";

//styling
myHello.style.color="#ffa359";
myHello.style.fontSize="54px";


//get atr
console.log(myHello.getAttribute("id"));

//set atr
myHello.setAttribute("class","newclass");

//class list
//1.add
//2.remove
//3.toggle
const mydiv=document.querySelector(".new");
mydiv.classList.add("mydiv");
const btn=document.getElementsByClassName(".btn")[0];
const myfrm=document.querySelector(".frm");
btn.addEventListener("click", function(){
    myfrm.classList.add(".hide");
});
