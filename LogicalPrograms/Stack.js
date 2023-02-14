class Stack{
    constructor() {
        this.array = [];
    }

    push(data) {
        this.array.push(data)
    }

    pop() {
        if(this.array.length === 0){
            return 'Stack underflow'
        }
        return this.array.pop()
    }
    
    peek() {
        return this.array[this.array.length - 1];
    }

    show() {
       console.log(this.array);
    }
    isEmpty() {
        return this.array.length === 0
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.show();
myStack.pop();
myStack.show();
console.log(myStack.peek());
console.log(myStack.isEmpty());