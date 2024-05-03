//* 스택(stack)

// 스택은 데이터를 제한적으로 접근할 수 있는 구조이다. 그 접근 방법은 언제나 가장 나중에 쌓은 데이터를 가장 먼저 빼낼 수 있는 데이터 구조이다. 이 스택은 LIFO(Last In, First Out) 또는 FILO(First In, Last Out) 방식으로 데이터를 저장하고 관리한다.
// 스택은 push와 pop으로 데이터를 넣고 빼는 동작을 수행한다.

class Stack {
  // 공간 복잡도 O(n)
  arr = [];

  push(value) {
    // O(1)
    return this.arr.push(value);
  }

  pop() {
    // O(1)
    return this.arr.pop();
  }

  top() {
    return this.arr.at(-1); // at(-1)은 배열의 마지막 요소를 반환
  }

  get length() {
    return this.arr.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(2);
stack.push(4);
stack.length; // 5
stack.pop();
stack.top(); // 2
