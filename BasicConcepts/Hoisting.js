// variable is declared after it is initialized
hoistedVariable = 10;
console.log(hoistedVariable);   	
var hoistedVariable;

//function is declared after calling
hoistedFunction();  

function hoistedFunction(){ 
  console.log("Hello world");
} 

// Hoisting takes place in the local scope 
function doSomething(){
    x = 40;
    console.log(x);
    var x;
  }
  doSomething();

  // Outputs undefined since the initialization of x is not hoisted
  var x;
console.log(x); 
x = 23;

//To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

"use strict";
h = 25; // Gives an error since x is not declared
// var h;
console.log(h);