// setInterval(()=>{
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
// },1000);
let txt=document.querySelector("#txt");
setInterval(()=>{
    let time=new Date();
    time=time.toLocaleTimeString();
    txt.innerText=time;
},1000); 