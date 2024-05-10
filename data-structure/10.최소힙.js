class MinHeap {
  // 최소힙
  arr = [];

  #reheapUp(index) {
    if (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.arr[index] < this.arr[parentIndex]) {
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
      const smaller = this.arr[leftIndex] > this.arr[rightIndex] ? leftIndex : rightIndex;
      if (this.arr[index] > this.arr[smaller]) {
        const temp = this.arr[index];
        this.arr[index] = this.arr[smaller];
        this.arr[smaller] = temp;
        this.#reheapDown(smaller);
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
    const smaller = (this.arr[leftIndex] || 0) > (this.arr[rightIndex] || 0) ? leftIndex : rightIndex;
    if (this.arr[index] > this.arr[smaller]) {
      const temp = this.arr[index];
      this.arr[index] = this.arr[smaller];
      this.arr[smaller] = temp;
    }
  }
}

const heap = new MinHeap();
heap.insert(78);
heap.insert(56);
heap.insert(45);
heap.insert(32);
heap.insert(23);
heap.insert(19);
heap.insert(8);
heap.removeValue(32);
console.log("fin");
