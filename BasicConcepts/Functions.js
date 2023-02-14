this.name = "sujit";

const regFunc = function(){    // Regular Function have its own this.
    this.age = 25;
    console.log(this.name, this.age);

    const arrFun = () => {
        console.log(this.name, this.age);
    };
    arrFun();
};

regFunc();

const arrowFun = () => {        // ArrowFunction haven't their own this, It refer from their Parent.
    console.log(this.name);
};

arrowFun();


function myFunction() {
    console.log(this.name);
};

myFunction();


// ========================================================
// Function as a Parameter
function myFunc(name) {
    console.log("Hi "+ name)
}

var execute = function(fn, name){
    fn(name);
};

execute(myFunc, "sujit");

// ========================================================
//  object with a function

var myObj = {
    "prop": "Hello",
    "newProp2": function(){
        console.log("my name is sujit")
    }
}

myObj.newProp = function(){
    console.log("Sujit")
}
console.log(myObj.prop);
myObj.newProp();
myObj.newProp2();

// ========================================================
//  object with a function

var obj = {
    "firstName": "Sujit",
    "LastName":"Bokade",
    "getfullName": function() {
        return obj.firstName +" "+ obj.LastName
    }
};

var fullName = obj.getfullName();
console.log(fullName);

// ========================================================

var objc = {
    "fName": "Sujit",
    "lName": "Bokade",
    "age": 25
};

delete objc.age
console.log(objc);