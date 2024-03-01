let btn=document.querySelector(".btn");
console.log(btn);
btn.addEventListener("click", function(ev){
        console.log(ev);
        console.log("CLICK EVENT SUCCESS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}); 
function clickEvent(){
    console.log("SUPPPPPCUHHHHHHHHH!!!");
}
btn.addEventListener("click",clickEvent);
btn.addEventListener("click",function(){
    clickEvent();
});
btn.removeEventListener("click",clickEvent);    
function addElement(){
let li=document.createElement("li");
console.log(li);
li.innerText="digital marketing";

ul.append(li);
}
btn.addEventListener("click",addElement);
//del 
let del=document.querySelector(".del");
del.addEventListener("click", function(){
    let ul=document.querySelector("ul"); 
    ul.lastElementChild.remove();
});

//keypress
let inp=document.querySelector(".inp");
inp.addEventListener("keypress", function(ev){
    console.log(ev.key);

});

//submit
let form=document.querySelector(".myForm");
console.log(form);
form.addEventListener("submit", function(ev){
    ev.preventDefault();   
    let inpt=document.querySelector("#inpt");
    console.log(inpt.value);
    add(inpt.value);
    // console.log(ev);
});

function add(value){
    let ul=document.querySelector(".list");
    let li=document.createElement("li");
    console.log(li);
    li.innerText=`${value}`;
    
    ul.append(li);
    }