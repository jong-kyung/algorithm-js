//* 연결리스트로 큐 구현

class QueueLinkedList {
  length = 0;
  head = null;
  tail = null;

  enqueue(value) {
    if (this.head) {
      this.tail.next = new Node(value);
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
    } else {
      this.head = new Node(value);
      this.tail = this.head;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    if (this.length !== 0) {
      this.head = this.head?.next;
      this.length--;
      return this.head?.prev;
    }
  }

  peek() {
    if (this.head) {
      return this.head;
    }
  }
}

class Node {
  next = null;
  prev = null;
  constructor(value) {
    this.value = value;
  }
}

const queue = new QueueLinkedList();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.dequeue();
queue.peek();
console.log(queue.peek());
