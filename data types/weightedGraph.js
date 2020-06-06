import PriorityQueue from './naivePriorityQueue';

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
  find(startVertex, endingVertex){
      let distances = {};
      let queue = new PriorityQueue();
      let previous = {};

      for(const vertex in this.adjacencyList){
          if(vertex === startVertex) continue;
          distances[vertex] = Infinity;
          previous[vertex] = null;
          queue.enqueue(vertex,Infinity);
          let current;

          while(queue.length){
            current = queue.dequeue();
            if (current===endingVertex) return distances;
            this.adjacencyList[current].forEach(element => {
                
            });

          }
      }


  }
}
let b = new WeightedGraph();
b.addVertex('A');
b.addVertex('B');
b.addVertex('C');
b.addVertex('D');
b.addEdge('A','B',210);
b.addEdge('A','C',110);
b.addEdge('C','B',90);
b.addEdge('C','D',30);