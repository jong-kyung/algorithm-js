//* 연결리스트(Linked List)

class LinkedList {
  length = 0;
  head = null;

  add(value) {
    if (this.head) {
      // head가 있으면
      let current = this.head;
      while (current.next) {
        // current.next가 null이 될때까지 반복
        current = current.next; // next가 null인 노드를 찾아서 current로 지정
      }
      current.next = new Node(value); // 마지막 노드에 새로운 노드를 추가
    } else {
      this.head = new Node(value); // head가 없으면 새로운 노드를 만들어서 head로 지정
    }
    this.length++;
    return this.length;
  }

  serach(index) {
    return this.#search(index)[1]?.value;
  }

  #search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return [prev, current];
  }

  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      // index가 0일때
      this.head = current.next;
      this.length--;
      return this.length;
    }
    // 삭제하고자 하는 대상이 없을 때
    // 아무것도 실행하지 않음
  }
}

class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();
ll.length;

ll.add(1); // 1
ll.add(2); // 2
ll.add(3); // 3
ll.add(4); // 4
ll.add(5); // 5
ll.add(6); // 6
ll.remove(4);
ll.remove(4);
