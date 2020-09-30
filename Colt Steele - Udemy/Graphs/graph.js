class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1, v2) {
        if (this.adjacencyList[v1]) this.adjacencyList[v1].push[v2]
        if (this.adjacencyList[v2]) this.adjacencyList[v2].push[v1]
    }

    removeAnEdge(v1, v2) {
        if (this.adjacencyList[v1].includes(v2) && this.adjacencyList[v2].includes(v1)) {
            this.adjacencyList[v1] = this.adjacencyList[v1].filter((value) => value !== v2)
            this.adjacencyList[v2] = this.adjacencyList[v2].filter((value) => value !== v1)
        }
    }

    removeAVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList.pop()
            this.removeAnEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]

    }
}