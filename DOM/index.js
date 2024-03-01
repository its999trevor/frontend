let h3=document.querySelector("h3");
console.dir(h3);
let parent=h3.parentElement;
console.log(parent);
let h1=document.querySelector("h1");
let p2=h1.parentElement.parentElement;
console.log(p2);
//pervsibling
let prev=h1.previousElementSibling;
console.log(prev);
let nex=h1.nextElementSibling;
console.log(nex);
let nn=h1.parentElement.nextElementSibling;
console.log(nn);
//childs
let head=document.querySelector("header");
console.log(head);
let child=head.children;
console.log(child);
let firstc=head.firstElementChild;
console.log(firstc);
let lastc=head.lastElementChild;
console.log(lastc);
let ul=document.querySelector("ul");
let str=ul.innerHTML;
console.log(str);
str+=`<li class="listitem">ai</li>`;
ul.innerHTML=str;


//createelement
let li=document.createElement("li");
console.log(li);
li.innerText="smthsmth";
//append
ul.append(li);
// ul.append("e");

//removechild
ul.removeChild(li);

//remove
let heading=document.querySelector("h1");
heading.remove();



