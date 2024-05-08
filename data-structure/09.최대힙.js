//* 힙(Heap)

// 힙은 최댓값과 최솟값을 빠르게 찾기 위해 고안된 완전 이진 트리(Complete Binary Tree)이다. 이는 배열로 표현할 수 있다.

// 힙은 최대 힙(Max Heap)과 최소 힙(Min Heap)으로 나뉜다.
// 최대힙은 부모 노드가 자식 노드보다 크거나 같다.
// 최소힙은 부모 노드가 자식 노드보다 작거나 같다.
// 힙은 트리 모양이 다양하게 나올 수 있다.

// 힙의 공간 복잡도는 O(n)이다.
// 힙의 삽입,삭제(root만 삭제함) 시간 복잡도는 O(logN), 조회 시간 복잡도는 O(n), heapify 시간 복잡도는 O(N)이다.

// 힙 정렬(Heap Sort)의 시간 복잡도는 O(NlogN)이다.

class MaxHeap {
  // 최대힙
  arr = [];

  #reheapUp(index) {
    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.arr[index] > this.arr[parentIndex]) {
        // 부모 노드와 자식 노드를 교체
        const temp = this.arr[index];
        this.arr[index] = this.arr[parentIndex];
        this.arr[parentIndex] = temp;
        this.#reheapUp(parentIndex);
      }
    }
  }

  insert(value) {
    const index = this.arr.length;
    this.arr[index] = value;
    this.#reheapUp(index);
  }

  #reheapDown(index) {
    const leftIndex = index * 2 + 1;
    if (leftIndex < this.arr.length) {
      const rightIndex = index * 2 + 2;
      const bigger = this.arr[leftIndex] > this.arr[rightIndex] ? leftIndex : rightIndex;
      if (this.arr[index] < this.arr[bigger]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[bigger];
        this.arr[bigger] = temp;
        this.#reheapDown(bigger);
      }
    }
  }

  remove() {
    // root 노드를 삭제
    if (this.arr.length === 0) {
      return false;
    }
    if (this.arr.length === 1) {
      return this.arr.pop();
    }
    const root = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.#reheapDown(0);
    return root;
  }

  sort() {
    // 힙 정렬
    const sortedArray = [];
    while (this.arr.length > 0) {
      sortedArray.push(this.remove());
    }
    return sortedArray;
  }

  search(value) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === value) {
        return i;
      }
    }
    return null;
  }

  update(value, newValue) {
    const index = this.search(value);
    if (index === null) {
      return false;
    }
    this.arr[index] = newValue;
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      this.#heapify(i);
    }
  }

  removeValue(value) {
    // 삭제할 값을 찾은 후 삭제
    const index = this.search(value);
    if (index === null) {
      return false;
    }
    this.arr.splice(index, 1);
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      this.#heapify(i);
    }
  }

  #heapify(index) {
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    const bigger = (this.arr[leftIndex] || 0) > (this.arr[rightIndex] || 0) ? leftIndex : rightIndex;
    if (this.arr[index] < this.arr[bigger]) {
      const temp = this.arr[index];
      this.arr[index] = this.arr[bigger];
      this.arr[bigger] = temp;
    }
  }
}

const heap = new Heap();
heap.insert(8);
heap.insert(19);
heap.insert(23);
heap.insert(32);
heap.insert(45);
heap.insert(56);
heap.insert(78);
heap.removeValue(32);
console.log("fin");
