function memozied() {
var cache = {};

return function(num) {
    if(num in cache) {
        console.log("cached value");
        return cache[num]
    }
    else {
        cache[num] = num + 25;
        return cache[num];
    }
  }
}

var memoziedFun = memozied();
memoziedFun(29); // Normal return
memoziedFun(29); // cached return