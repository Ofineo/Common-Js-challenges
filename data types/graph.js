class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    console.assert(
      this.adjacencyList.hasOwnProperty(vertex1),
      "Vertex 1 doesn't exists"
    );
    console.assert(
      this.adjacencyList.hasOwnProperty(vertex2),
      "Vertex 2 doesn't exists"
    );
    if (
      this.adjacencyList.hasOwnProperty(vertex1) &&
      this.adjacencyList.hasOwnProperty(vertex2)
    ) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    console.assert(
      this.adjacencyList.hasOwnProperty(vertex1),
      "Vertex 1 doesn't exists"
    );
    console.assert(
      this.adjacencyList.hasOwnProperty(vertex2),
      "Vertex 2 doesn't exists"
    );
    if (
      this.adjacencyList.hasOwnProperty(vertex1) &&
      this.adjacencyList.hasOwnProperty(vertex2)
    ) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
    }
    return true;
  }
  removeVertex(vertex) {
    console.assert(
      this.adjacencyList.hasOwnProperty(vertex),
      "Vertex doesn't exists"
    );
    if (this.adjacencyList.hasOwnProperty(vertex)) {
      let rmEdges = this.adjacencyList[vertex];
      rmEdges.forEach((vrtx) => {
        this.removeEdge(vertex, vrtx);
      });
    }
    delete this.adjacencyList[vertex];
    return true;
  }
}
let a = new Graph();
a.addVertex("London");
a.addVertex("Mexico");
a.addVertex("Barcelona");
a.addEdge("London", "Barcelona");
a.addEdge("London", "Mexico");
a.addEdge("Barcelona", "Mexico");
a.addEdge("Madrid", "Barcelona");
a.removeEdge("Mexico", "Barcelona");
