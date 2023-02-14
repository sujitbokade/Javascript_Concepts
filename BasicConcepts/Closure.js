function favFunction() {
    var a = 7;
    function anotherFunction() {
        console.log(a);
    }
    anotherFunction();
}
favFunction();

// ============================

function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z);
z();
