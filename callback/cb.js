function starter(cb){
    console.log("eating panner tikka frfr!!");
    setTimeout(()=>{
        console.log("ate");
        cb(maincourse);
    },2000)
 }
 function drink(cb){
    console.log("beeeeeeeeer");
    setTimeout(()=>{
        console.log("HUNGOVER AF NEVER AGAIN!!");
        cb(desert);
    },1000)
 }
 function maincourse(cb){
    console.log("fooooood");
    setTimeout(()=>{
        console.log("W maincouse FR!!!");
        cb(bill);
    },4000)
 }
 function desert(cb){
    console.log("DESERT YUMMM");
    setTimeout(()=>{
        console.log("SWEET!!");
        cb();
    },5000)
 }
 function bill(){
    console.log("PAYING BILL");
    setTimeout(()=>{
        console.log("BROKE AF NIGGA!!");
    },1000)
 }
 starter(drink);
 