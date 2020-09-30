

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

    //function that accepts a starting node
    //create a list to store end result, return at end
    //object to store visited vertices
    //helper function return early if the vertex is empty
    //the heper function accepts a vertex
    //return early if the vertex is empty
    //place the vertex into the visited object and push that vertex into the result array
    //loop over all of the values in the adjacency list for that vertex.
    //if any of those values have not been visited, recursively invoke the helper function with that vertex
    //invoke the helper function with the starting vertex

    dfsRecursive(start) {
        let listResult = []
        let visited = {}
        let adjacencyList = this.adjacencyList
        function depth(vertex) {
            if (!vertex) {
                return null
            }
            visited[vertex] = true
            listResult.push(vertex)
            for (let i = 0; i < adjacencyList[vertex].length; i++) {
                if (!visited[adjacencyList[vertex][i]]) {
                    return depth(adjacencyList[vertex][i])
                }
            }

        }
        depth(start)

        return listResult
    }
    //accept a starting node
    //create a stack to keep track of vertices (use a list/array)
    //create a list to store the end result, to be returned at the very end
    //create an object to store visited vertices
    //add the starting vertex to the stack & mark it visited
    //while the stack has something in it -- pop the next vertex from the stack -- if that one hasn't been visited yet
    //mark it as visited, add it to the result list
    //push all of its neighbors into the stack
    dfsIterative(start) {
        let stackOfVertices = [start]
        let listResult = []
        let visited = {}
        let adjacencyList = this.adjacencyList
        let nextVertex
        visited[start] = true
        while (stackOfVertices.length !== 0) {
            nextVertex = stackOfVertices.pop()
            listResult.push(nextVertex)
            if (!visited[nextVertex]) {
                visited[nextVertex] = true
                stackOfVertices.push(...adjacencyList[nextVertex])
                //or adjacencyList.forEach(neighbor => {
                //     if (!visited[neighbor]){
                //         visited[neighbor] = true
                //         stackOfVertices.push(neighbor)
                //     }
                // })
            }
        }
        return listResult
    }
    //accept a starting vertex
    //create a queue (array) and place starting vertex in it
    //create an array to store visited nodes
    //create an objec tto store visited nodes
    //mark starting vertex as visted
    //loop through while queue
    //remove first vertex from queue and push to array that stores visted nodes
    //loop over each vertex in the list for the vertex you are visiting
    //if it's not inside the object, mark it as visited and enqueue that vertex
    //once you have finished looping, return the array of visited nodes

    breadthFirst(start) {
        let queue = [start]
        let returnArray = []
        let visited = {}
        visited[start] = true
        let currentVertex
        while (queue.length) {
            currentVertex = queue.shift()
            returnArray.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return returnArray
    }

}




