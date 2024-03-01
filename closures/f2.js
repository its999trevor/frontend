function outer(){
    var a=10;
    function inner(){
        a++;
        function innermost(){
            a++;
            console.log(a);
        }
        return innermost;
    }
    return inner;
}
let f1=outer();
let f11=f1();
let f12=f1();

f11();
f11();
f12();
f12();