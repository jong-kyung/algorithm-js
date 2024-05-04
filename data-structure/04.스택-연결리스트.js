//* 연결리스트로 스택 구현하기

class StackLinkedList {
  length = 0;
  head = null;
  tail = null;

  push(value) {
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

  pop() {
    this.tail = this.tail.prev;
    this.length--;
    return this.tail.next;
  }

  top() {
    return this.head;
  }
}

class Node {
  next = null;
  prev = null;
  constructor(value) {
    this.value = value;
  }
}

const stack = new StackLinkedList();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
stack.top();
console.log(stack.top()); // 2
