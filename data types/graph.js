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
  dfsRecursive(vertex) {
    console.assert(
      this.adjacencyList.hasOwnProperty(vertex),
      "Vertex doesn't exists"
    );
    let results = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return;
      results.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited.hasOwnProperty(neighbour)) dfs(neighbour);
      });
    }
    dfs(vertex);

    return results;
  }
  dfsIterative(vertex) {
    //make a stack; for simplicity I will use an array with push and pop;
    let stack = [];
    stack.push(vertex);
    let results = [];
    let visited = {};
    let vrtx;

    while (stack.length) {
      vrtx = stack.pop();
      if (!visited.hasOwnProperty(vrtx)) {
        visited[vrtx] = true;
        results.push(vrtx);
        this.adjacencyList[vrtx].forEach((neighbour) => {
          stack.push(neighbour);
        });
      }
    }
    return results;
  }
  bfs(vertex) {
    //make a queue; for simplicity I will use an array with push and shift;
    let queue = [];
    queue.push(vertex);
    let results = [];
    let visited = {};
    let vrtx;

    while (queue.length) {
      vrtx = queue.shift();
      if (!visited.hasOwnProperty(vrtx)) {
        visited[vrtx] = true;
        results.push(vrtx);
        this.adjacencyList[vrtx].forEach((neighbour) => {
          queue.push(neighbour);
        });
      }
    }
    return results;
  }
}
let a = new Graph();
// a.addVertex("London");
// a.addVertex("Mexico");
// a.addVertex("Barcelona");
// a.addEdge("London", "Barcelona");
// a.addEdge("London", "Mexico");
// a.addEdge("Barcelona", "Mexico");
// a.addEdge("Madrid", "Barcelona");
// a.removeEdge("Mexico", "Barcelona");
// a.removeVertex("London");
//     A
//   /   \
//  B    C
//  |    |
//  D----E
//   \  /
//     F
//test recursive DFS

a.addVertex("A");
a.addVertex("B");
a.addVertex("C");
a.addVertex("D");
a.addVertex("E");
a.addVertex("F");

a.addEdge("A", "B");
a.addEdge("A", "C");
a.addEdge("B", "D");
a.addEdge("C", "E");
a.addEdge("D", "E");
a.addEdge("D", "F");
a.addEdge("E", "F");
a.dfsRecursive("A");
a.dfsIterative("A");
a.bfs("A");
