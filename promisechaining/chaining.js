function chopping(vegetables,quality){
    return new Promise(function(resolve,reject){
        if(quality<50){
            return reject(vegetables+"khrab khana ");
        }
        setTimeout(()=>resolve("chopping done"),2000);
    })
}
function cooking(){
    return new Promise(function(resolve,reject){
        // if(true){
        //     return reject("sabzi nhi banegi");
        // }
        setTimeout(()=>resolve("cooking done"),2000);
    })
}
// chopping("potato").then((data)=>{
//     console.log(data);
//     return cooking(data);
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
 //async/await
// async function myTask(){
// let data=await chopping("potato",75);
// console.log(data);
// let data2=await cooking(data);
// console.log(data2);
// }
// myTask();

//try{}catch(){}block
async function myTask(){
    try{
        let data=await chopping("potato",75);
        console.log(data);
        let data2=await cooking(data);
        console.log(data2);
    }catch(err){
        console.log(err);
    }
}
myTask();