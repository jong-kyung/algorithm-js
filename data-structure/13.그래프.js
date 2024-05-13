//* 그래프(Graph)

// 그래프는 정점(Vertex)과 간선(Edge)으로 이루어진 자료구조이다.

class Graph {
  vertices = [];
  matrix = [];

  insertVertex(name) {
    // name 겹치는지 중복검사
    this.vertices.push(new Vertex(name));
    this.matrix.push([]);
  }

  #serachVertex(name) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].name === name) {
        return i;
      }
    }
    return null;
  }

  insertArc(from, to, value, capacity) {
    const fromV = this.#serachVertex(from);
    const toV = this.#serachVertex(to);
    if (fromV === null || toV === null) {
      throw new Error("Vertex not found");
    }
    this.matrix[fromV][toV] = new Arc(value, capacity);
  }
}

class Vertex {
  constructor(name) {
    this.name = name;
  }
}

class Arc {
  constructor(value, capacity) {
    this.value = value;
    this.capacity = capacity;
  }
}

const g = new Graph();
g.insertVertex("a");
g.insertVertex("b");
g.insertVertex("c");
g.insertArc("a", "b", 3);
g.insertArc("a", "c", 2);
g.insertArc("c", "a", 4);
g.insertArc("b", "c", 1);
