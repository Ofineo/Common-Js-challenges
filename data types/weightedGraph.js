import PriorityQueue from "./naivePriorityQueue";

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
    this.adjacencyList[vertex1].push(new Edge(vertex1, weight));
    this.adjacencyList[vertex2].push(new Edge(vertex2, weight));
  }
  find(startVertex, endingVertex) {
    let distances = {};
    let queue = new PriorityQueue();
    let previous = {};
    let current;
    let path = [];

    for (const vertex in this.adjacencyList) {
      if (vertex === startVertex) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (queue.values.length) {
      current = queue.dequeue().values;
      if (current === endingVertex) {
          while(previous[current]){
              path.push(current);
              current = previous[current];
          }
          break;
      };
      for (const neighbour in this.adjacencyList[current]) {
        let nextNode = this.adjacencyList[current][neighbour];
        //calculate disctance to neighbouring node.
        let temp = distances[current] + nextNode.weight;
        if (temp < distances[nextNode.node]) {
          //updating new smallest discance to neighbour
          distances[nextNode.node] = temp;
          //updating previous; How we got to neighbour
          previous[nextNode.node] = current;
          //enqueue in proirity queue with current priority
          queue.enqueue(nextNode.node, temp);
        }
      }
    }
    return path.concat(current).reverse();
  }
}
let b = new WeightedGraph();
b.addVertex("A");
b.addVertex("B");
b.addVertex("C");
b.addVertex("D");
b.addEdge("A", "B", 210);
b.addEdge("A", "C", 110);
b.addEdge("C", "B", 90);
b.addEdge("C", "D", 30);
