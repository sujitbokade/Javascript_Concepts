class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0]
    }

    getSize() {
        return this.items.length;
    }

    isEmpty() {
        return this.getSize() === 0;
    }
    show() {
        console.log(this.items);
     }
}

const myQueue = new Queue();
myQueue.enqueue(10)
myQueue.enqueue(30)
myQueue.enqueue(50)

myQueue.show();

myQueue.dequeue();
myQueue.show();
