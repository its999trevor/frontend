//to perform async task into sync
 function chopping(cb){
        console.log("katt rha");
        setTimeout(()=>{
            console.log("katt gya lmfaoo");
            cb(roti);
        },5000);
 }
 function cooking(cb){
    console.log("LET HIM COOK!!!");
    setTimeout(()=>{
        console.log("COOKED!!!");
        cb(serve);
    },3000)
 }
 function roti(cb){
    console.log("ROTI COOKING");
    setTimeout(()=>{
        console.log("L ROTI FR!!");
        cb();
    },4000)
 }
 function serve(){
    console.log("SERVING CUNT IN A VERY HONORABLE WAY!!!");
    setTimeout(()=>{
        console.log("SERVED TBH!!");
    },1000)
 };
//  chopping();
//  cooking();
//  roti();
//  serve();
chopping(cooking);