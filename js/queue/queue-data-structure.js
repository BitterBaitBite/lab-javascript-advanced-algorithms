class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl.length < this.MAX_SIZE;
  }

  isEmpty() {
    return this.queueControl.length <= 0;
  }

  enqueue(item) {
    if (this.canEnqueue()) this.queueControl.unshift(item);
    else throw new Error('QUEUE_OVERFLOW');

    return this.display();
  }

  dequeue() {
    if (!this.isEmpty()) return this.queueControl.pop();
    else throw new Error('QUEUE_UNDERFLOW');
  }

  display() {
    return this.queueControl;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
