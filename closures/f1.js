function outer(){
    var a=10;
    function inner(){
        var b=20;
        function innermost(){
            a++;
            b++;
            console.log(a);
            console.log(b);
        }
        return innermost;
    }
    return inner;
}
let f1=outer();
let f2=f1();
// console.log(f1);
f1();
f2();
