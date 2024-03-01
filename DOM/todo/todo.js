let form=document.querySelector(".myform");
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    console.log(ev);
    let inp=document.querySelector("#inp");
    console.log(inp.value);
    additem(inp.value);
    inp.value="";
});
function additem(value){
    let ul=document.querySelector(".tasklist");
    let li=document.createElement("li");
    li.classList.add("taskitem");
    li.innerHTML=`<input type="checkbox" class="complete">${value} <span><button class="up">⬆️</button><button class="down">⬇️</button><button class="delete">delete</button></span>`;
    ul.appendChild(li);
};
let tasklist=document.querySelector(".tasklist");
tasklist.addEventListener("click",function(ev){
    let currElement=ev.target;
    let className=ev.target.className;
    console.log(className);
    if(className=="delete"){
        let item=currElement.parentElement.parentElement;
        console.log(item);
        item.remove();  
    }
    if(className=="up"){
        let listItem=currElement.parentElement.parentElement;
        // console.log(listItem);
        let prevItem=listItem.previousElementSibling;
        // console.log(prevItem);
        //insetBefore //inserts item before another item
        tasklist.insertBefore(listItem,prevItem);
        
    }
    if(className=="down"){
        let listItem=currElement.parentElement.parentElement;
        // li.parentElement.append(li);
        // console.log(listItem);
        let nextItem=listItem.nextElementSibling;
        // console.log(nextItem);
        //insetBefore //inserts item before another item
        tasklist.insertBefore(nextItem,listItem);
    }
    if(className=="complete"){
        let listItem=currElement.parentElement ;
        listItem.classList.toggle("cut");
    }
});