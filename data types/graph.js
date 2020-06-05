class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    console.assert(this.adjacencyList.hasOwnProperty(vertex1),'Vertex 1 doesn\'t exists');
    console.assert(this.adjacencyList.hasOwnProperty(vertex2),'Vertex 2 doesn\'t exists');
    if (
      this.adjacencyList.hasOwnProperty(vertex1) &&
      this.adjacencyList.hasOwnProperty(vertex2)
    ) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
  }
}
let a = new Graph();
a.addVertex('London');
a.addVertex('Mexico');
a.addVertex('Barcelona');
a.addEdge('London', 'Barcelona');
a.addEdge('Madrid', 'Barcelona');


