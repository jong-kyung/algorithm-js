//* 이진탐색트리(Binary Search Tree)

// 이진탐색트리는 이진트리의 일종으로, 각 노드의 왼쪽 자식은 해당 노드보다 작은 값, 오른쪽 자식은 해당 노드보다 큰 값을 가지는 트리이다.
// 이진탐색트리는 이진트리의 특성을 가지고 있기 때문에, 이진탐색트리의 모든 노드는 중복된 값을 가질 수 없다.

// 조회, 삭제, 삽입을 O(logN)의 시간복잡도로 수행할 수 있다.

// 이진트리의 종류로는 Full, Perfect, Complete, Degenerate, Balanced 등이 있다.
// Full(정) : 자식 노드가 0개 또는 2개인 트리
// Perfect(포화) : 모든 레벨이 꽉 차있는 트리
// Complete(완전) : 마지막 레벨을 제외하고 모든 노드가 채워져 있는 트리
// Degenerate(변질) : 모든 노드가 하나의 자식만 가지고 있는 트리
// Balanced(균형) : 모든 노드의 왼쪽 서브트리와 오른쪽 서브트리의 높이 차이가 1 이하인 트리

export class BinarySearchTree {
  root = null;
  length = 0;

  #insert(node, value) {
    if (node.value > value) {
      // 루트노드보다 작은 값이면
      if (node.left) {
        this.#insert(node.left, value);
      } else {
        node.left = new Node(value);
        this.length++;
      }
    } else if (node.value < value) {
      // 루트노드보다 큰 값이면
      if (node.right) {
        this.#insert(node.right, value);
      } else {
        node.right = new Node(value);
        this.length++;
      }
    } else {
      throw new Error("중복된 값은 허용되지 않습니다.");
    }
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      this.length++;
    } else {
      this.#insert(this.root, value);
    }
    return this.length;
  }

  #search(node, value) {
    if (node.value > value) {
      if (!node.left) {
        return null;
      }
      if (node.left.value === value) {
        return node.left;
      }
      return this.#search(node.left, value);
    } else {
      if (!node.right) {
        return null;
      }
      if (node.right.value === value) {
        return node.right;
      }
      return this.#search(node.right, value);
    }
  }

  search(value) {
    // 찾으면 해당 노드를 반환, 못찾으면 null 반환
    if (!this.root) {
      return null;
    }
    if (this.root.value === value) {
      return this.root;
    }
    return this.#search(this.root.left, value);
  }

  #remove(node, value) {
    if (!node) {
      // 삭제할 노드가 없으면 에러
      return null; // 삭제할 노드가 없으면 null 반환
    }

    if (node.value === value) {
      // 자식 입장
      // 삭제할 값을 찾은 경우
      if (!node.left && !node.right) {
        // 자식이 없을 때
        this.length--;
        return null;
      } else if (!node.left) {
        // 오른쪽 자식만 있을 때
        this.length--;
        return node.right;
      } else if (!node.right) {
        // 왼쪽 자식만 있을 때
        this.length--;
        return node.left;
      } else {
        // 양쪽 자식이 있을 때
        let exchange = node.left;
        while (exchange.right) {
          exchange = exchange.right;
        }
        const temp = node.value;
        node.value = exchange.value;
        exchange.value = temp;
        node.left = this.#remove(node.left, exchange.value);
        return node;
      }
    } else {
      // 부모입장
      if (node.value > value) {
        node.left = this.#remove(node.left, value);
        return node;
      } else {
        node.right = this.#remove(node.right, value);
        return node;
      }
    }
  }

  remove(value) {
    // 삭제할 노드가 없으면 에러
    // 삭제할 노드가 루트노드일 때
    // 삭제할 노드가 자식이 없을 때
    // 삭제할 노드가 자식이 하나일 때
    // 삭제할 노드가 자식이 둘일 때
    this.root = this.#remove(this.root, value);
    return this.length;
  }
}

class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}

// const bst = new BinarySearchTree();
// bst.insert(8);
// bst.insert(10);
// bst.insert(3);
// bst.insert(1);
// bst.insert(14);
// bst.insert(6);
// bst.insert(7);
// bst.insert(4);
// bst.insert(13);
// console.log(bst.search(7));
// console.log(bst.search(5));
// bst.remove(8);
// bst.remove(10);
// console.log(bst.search(15)); // null
// bst.remove(4);
