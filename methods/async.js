console.log("hi");
// function wait(){
//     let currentTime=new Date().getTime();
//     console.log("inside loop");
//     while(currentTime+5000>new Date().getTime()){
//     }
//     };
//     setTimeout(wait,1000);
setTimeout(function wait(){
        let currentTime=new Date().getTime();
        console.log("inside loop");
        while(currentTime+5000>new Date().getTime()){
        }
        },2000);
    console.log("function ke baad");
    sub(20,5);
    function sub(c,d){
        console.log(c-d);
    }

    

    