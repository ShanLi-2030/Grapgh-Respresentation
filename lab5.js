function convertToAdjlist(adjMatrix){
    var vertices = adjMatrix.length; // getting no of vertices
    var adjList = new Array(vertices); // creating an array to store adj list
  



//for each vertex in adj matrix we will trave and check if it it is connected to anyother vertex

// a vertex is connected if adj matrix consist of 1 at that position
    for(var i=0;i<vertices;++i){
        adjList[i] = [];
        for(var j=0;j<vertices;++j){
            if(adjMatrix[i][j] == 1)
                adjList[i].push(j);
        }
    }
    return adjList;
}

function test(){
    test1 = [[0, 1, 1],
             [0, 0, 1],
             [1, 0, 0]];
    test2 = [[0, 1, 0, 1],
             [0, 0, 1, 1],
             [1, 0, 0, 1],
             [0, 1, 0, 0]];
    console.log(convertToAdjlist(test1));
    console.log(convertToAdjlist(test2));
    }
    test();
