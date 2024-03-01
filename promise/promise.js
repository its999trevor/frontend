 function klSePinaBnd(){
    return new Promise(function(resolve,reject){
        let accBalance=12000;
        if(accBalance<10000){
            resolve("AIN'T DRINKING NO MORE!! "+accBalance);
        }
        else{
            reject("WE GETTING WASTED BRO!!! "+accBalance)
        }
    })
 }
 //consume

 //1. then

 let p=klSePinaBnd();
 console.log(p);

//  p.then(
//     function(msg){
//         console.log("resolve: "+msg);
//     },
//     function(msg){
//         console.log("reject: "+msg);
//     }
//  )
//  klSePinaBnd().then(
//     function(msg){
//         console.log("resolve: "+msg);
//     },
//     function(msg){
//         console.log("reject: "+msg);
//     }
//  )

//.then.catch
klSePinaBnd().then((msg)=>{
    console.log(msg);
}).catch(err=>console.log(err));
