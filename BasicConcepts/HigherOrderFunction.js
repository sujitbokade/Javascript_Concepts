
function higherOrder(fn) {
    fn();
  }
     
  higherOrder(function() { console.log("Hello world") });  

  
  function higherOrder2() {
    return function() {
      console.log("Do something");
    }
  }      
  var x = higherOrder2();
  x()   
  
