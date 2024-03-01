let grandfather=document.querySelector(".grandfather");
let father=document.querySelector(".father");
let mother=document.querySelector(".mother");
grandfather.addEventListener("click", function(){
    console.log("grandfather");
});
father.addEventListener("click", function(ev){
    console.log("father");
    ev.stopPropagation();

});
mother.addEventListener("click", function(){
    console.log("mother");
}); 