function gym(){
    return new Promise((resolve,reject)=>{
        let check=true;
        if(check){
            resolve("WE ARE SOOO BACK!!!");
        }
        else{
            reject("WE ARE SOO FINISHED!!");
        }
    });
}
let w=gym();
console.log(w);
w.then((msg)=>{
    console.log(msg);
},(msg)=>{
    console.log(msg);
});