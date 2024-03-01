function mul(value){
    if(typeof value=='undefined'){
        return 0;
    }
    function inner(nextvalue){
        if(typeof nextvalue=='undefined'){
            return value;
        }
        value*=nextvalue;
        return inner;
    }
return inner;
    
}
console.log(mul(1)(2)(3)(4)(5)());