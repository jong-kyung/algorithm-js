//* 레드블랙트리(Red-Black Tree)

// 레드블랙트리는 균형 이진 탐색 트리로서, 각 노드는 레드 또는 블랙의 색상을 가진다.
// 루트는 블랙이며, 새로 추가되는 노드는 레드로 추가된다.
// 레드는 연달아 두번 나타날 수 없다.(블랙은 가능)
// 레드의 자식은 모두 블랙이다.
// 루트와 리프 노드의 블랙 노드 수는 같다.

class RedBlackTree {
  root = null;
  length = 0;

  #insert(node, value) {
    if (node.value > value) {
      // 루트노드보다 작은 값이면
      if (node.left) {
        return this.#insert(node.left, value);
      } else {
        const newNode = new Node(value, "red");
        newNode.parent = node;
        node.left = newNode;
        return newNode;
      }
    } else {
      // 루트노드보다 큰 값이면
      if (node.right) {
        return this.#insert(node.right, value);
      } else {
        const newNode = new Node(value, "red");
        newNode.parent = node;
        node.right = newNode;
        return newNode;
      }
    }
  }

  #checkDoubleRed(node) {
    if (node.color === "red" && node.parent.color === "red") {
      if (node.getUncle().color === "red") {
        this.#recolor(node);
      } else if (node.getUncle().color === "black") {
        this.#restructure(node);
      } else if (!node.getUncle()) {
        this.#restructure(node);
      }
    }
  }

  #recolor(node) {
    if (node.parent) {
      node.parent.color = "black";
    }
    if (node.getUncle()) {
      node.getUncle().color = "black";
    }
    if (node.parent?.parent) {
      node.parent.parent.color = "red";
      if (node.parent.parent === this.root) {
        node.parent.parent.color = "black";
      }
    }
    this.#checkDoubleRed(node.parent?.parent);
  }

  #restructure(node) {
    let middle;
    const grandgarndpa = node.parent.parent.parent;
    const grandpa = node.parent.parent;
    const parent = node.parent;
    if (node.value > grandpa.value) {
      if (node.value > node.parent.value) {
        middle = node.parent;
      } else {
        middle = node;
      }
      if (middle === node) {
        node.left = grandpa;
        grandpa.parent = node;
        grandpa.right = null;
        node.right = parent;
        parent.parent = node;
        parent.left = null;
      } else {
        // 가운데 부모
        grandpa.right = parent.left;
        if (grandpa.right) {
          grandpa.right.parent = grandpa;
        }
        grandpa.right = null;
        parent.left = grandpa;
        parent.left.parent = parent;
        parent.right = null;
      }

      if (grandgarndpa.left === grandpa) {
        grandgarndpa.left = middle;
        middle.parent = grandgarndpa;
      } else {
        grandgarndpa.right = middle;
        middle.parent = grandgarndpa;
      }
    } else {
      // 노드가 할아버지보다 작을때
      if (node.value < node.parent.value) {
        middle = node.parent;
      } else {
        middle = node;
      }
      if (middle === node) {
        node.right = grandpa;
        grandpa.parent = node;
        grandpa.left = null;
        node.left = parent;
        parent.parent = node;
      } else {
        // 가운데 부모
        grandpa.left = parent.right;
        if (grandpa.left) {
          grandpa.left.parent = grandpa;
        }
        grandpa.left = null;
        parent.right = grandpa;
        parent.right.parent = parent;
      }
      if (grandgarndpa.left === grandpa) {
        grandgarndpa.left = middle;
        middle.parent = grandgarndpa;
      } else {
        grandgarndpa.right = middle;
        middle.parent = grandgarndpa;
      }
    }
    // 가장 위는 블랙
    middle.color = "black";
    if (middle.left) {
      middle.left.color = "red";
    }
    if (middle.right) {
      middle.right.color = "red";
    }
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value, "black");
    } else {
      const newNode = this.#insert(this.root, value);
      this.#checkDoubleRed(newNode);
    }
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
}

class Node {
  left = null;
  right = null;
  parent = null;
  constructor(value, color = "red") {
    this.value = value;
    this.color = color;
  }

  getUncle() {
    if (this.parent?.parent?.left === this.parent) {
      return this.parent?.parent?.right;
    } else if (this.parent?.parent?.right === this.parent) {
      return this.parent?.parent?.left;
    }
  }
}

const rb = new RedBlackTree();

// rb.insert(10);
// rb.insert(5);
// rb.insert(15);
// rb.insert(3);
