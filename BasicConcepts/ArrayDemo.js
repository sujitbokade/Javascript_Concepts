
var myArray = ["a", "b", "c"];
console.log(myArray.length);
myArray[3] = "d"
console.log(myArray.length);
// myArray[100] = "e"
// console.log(myArray.length);
myArray["5"] = "f"
console.log(myArray.length);

for (const element of myArray) {
    console.log(element);
}

for (const i in myArray) {
   console.log( myArray[i])
}