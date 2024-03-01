/**setInterval() ---> Self calling
                        
     * */
let invl=setInterval(()=>{
    console.log("inside setInterval");
},2000); 
console.log(invl); 
let second=setInterval(()=>{
    console.log("second interval");
},2000);
console.log(second);
//returns id

setTimeout(()=>{
    clearInterval(invl);

},5000);
setTimeout(()=>{
    
    clearInterval(second);
},5000);
/**setTimeout and setinterval returns an id
    
   **/

