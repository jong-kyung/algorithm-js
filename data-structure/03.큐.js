//* 큐(Queue)

// 큐는 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out)구조로 저장하는 자료구조이다.
// 큐는 push와 shift로 데이터를 넣고 빼는 동작을 수행한다.

export class Queue {
  // 공간 복잡도 O(n)
  arr = [];

  enqueue(value) {
    // O(1)
    return this.arr.push(value);
  }

  dequeue() {
    // O(1)
    return this.arr.shift();
  }

  peek() {
    // 처음 요소를 반환
    return this.arr[0];
  }

  get length() {
    return this.arr.length;
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(3);
// queue.enqueue(5);
// queue.enqueue(2);
// queue.enqueue(4);
// queue.length; // 5
// queue.dequeue();
// queue.peek(); // 3
