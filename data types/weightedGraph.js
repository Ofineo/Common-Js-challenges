class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push(new Edge(vertex1,weight));
      this.adjacencyList[vertex2].push(new Edge(vertex2,weight));
  }
}
let b = new WeightedGraph();
b.addVertex('A');
b.addVertex('B');
b.addVertex('C');
b.addEdge('A','B',210);