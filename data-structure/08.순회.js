//* 순회(Traversal)

// 순회는 트리 자료구조에 포함된 모든 노드를 방문하는 것을 의미한다.
// 순회의 종류 : 전위 순회(pre-order), 중위 순회(in-order), 후위 순회(post-order)

// 순회는 DFS(Depth First Search)와 관련이 있다.

import { BinarySearchTree } from "./07.이진탐색트리.js";
import { Queue } from "./03.큐.js";
import { Stack } from "./02.스택.js";

function bfs(tree) {
  // 큐와 함께 사용
  const queue = new Queue();
  queue.enqueue(tree.root);
  while (queue.length > 0) {
    const node = queue.dequeue();
    console.log(node.value);
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
}

function dfs(tree) {
  // 스택과 함께 사용
  // 전위 순회(PRE-ORDER)
  const stack = new Stack();
  stack.push(tree.root);
  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node.value);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}

function preOrder(node) {
  if (!node) return;
  console.log(node.value);

  preOrder(node.left);
  preOrder(node.right);
}

function inOrder(node) {
  if (!node) return;
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

function postOrder(node) {
  if (!node) return;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}

const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
// bfs(bst);
// dfs(bst);
// preOrder(bst.root);
// inOrder(bst.root);
postOrder(bst.root);
