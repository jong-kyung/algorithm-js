//* 덱(Deque)은 스택과 큐의 기능을 모두 가진 자료구조이다.

export class Deque {
  // 공간 복잡도 O(n)
  arr = [];

  push(value) {
    return this.arr.push(value);
  }

  pop() {
    return this.arr.pop();
  }

  shift() {
    return this.arr.shift();
  }
  unshift(value) {
    return this.arr.unshift(value);
  }
  peek() {
    return this.arr.at(0);
  }

  get length() {
    return this.arr.length;
  }
}

const deque = new Deque();
deque.push(1);
deque.push(3);
deque.push(5);
deque.unshift(2);
deque.unshift(4);
console.log(deque.length); // 5
deque.pop(); // 5
deque.shift(); // 4
console.log(deque.peek());
