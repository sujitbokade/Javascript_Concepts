console.clear()

console.log("Hello World")

console.log('a')
setTimeout(() => {
    console.log('b')
}, 1000)
console.log('c')


const checkUnderAge = (age) => new Promise((resolve, reject) => {
        if (age > 18) {
            resolve("success")
        }else {
            reject("error")
        }
});

checkUnderAge(34)
.then((data) => console.log(data))
.catch((e) => console.log(e))

console.log("==========================");

this.str= "sujit"

function favFunction() {
    console.log(this.str);
}

favFunction.call(this);


