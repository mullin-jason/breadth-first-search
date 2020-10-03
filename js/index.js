// 16 * 9 grid
var map =   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
             1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
             1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,
             1,0,0,0,1,0,2,1,0,0,0,0,0,0,0,1,
             1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,
             1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,
             1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
             1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
             1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

// declare variables
var startIndex = get_start(map);
var goalIndex = get_goal(map);
let frontier = new Queque();
let cameFrom = new Dict();

 
// add start postion into visted set and frontier
frontier.enqueque(startIndex);
cameFrom.fill(startIndex, null);


// start our frontier search
while(frontier.length() != 0){
    var current = frontier.dequeque();
    check_neighbours(map ,current, cameFrom, frontier);
}

let path = get_path(goalIndex,startIndex,cameFrom);
console.log(path);
/*
    check neighbour function:
    pass our current current for our queque 
    ignore walls and and out of bounds currentes.
    check all 8 neighbouring cells
    add all unvisted cells into our data structures
*/ 
function check_neighbours(map, current, cameFrom, frontier){
    // check all neighbours

    // right
    if(cameFrom.has(current + 1) == false && (map[current + 1]) != null && (map[current + 1]) != 1)
    {
        frontier.enqueque(current + 1);
        cameFrom.fill(current + 1, current);
    }
    // left
    if(cameFrom.has(current - 1) == false && (map[current - 1]) != null && (map[current - 1]) != 1)
    {
        frontier.enqueque(current - 1);
        cameFrom.fill(current - 1, current);
    }
    // up
    if(cameFrom.has(current - 16) == false && (map[current - 16]) != null && (map[current - 16]) != 1)
    {   
        frontier.enqueque(current - 16);
        cameFrom.fill(current - 16, current);
    }
    // down
    if(cameFrom.has(current + 16) == false  && (map[current + 16]) != null && (map[current + 16]) != 1)
    {
        frontier.enqueque(current + 16);
        cameFrom.fill(current + 16, current);
    }
    // down left
    if(cameFrom.has(current + 15, cameFrom.size()) == false  && (map[current + 15]) != null && (map[current + 15]) != 1) 
    {
        frontier.enqueque(current + 15);
        cameFrom.fill( current + 15, current);
    }
    // up left
    if(cameFrom.has(current - 15) == false  && (map[current - 15]) != null && (map[current - 15]) != 1)
    {
        frontier.enqueque(current - 15);
        cameFrom.fill(current - 15, current);
    }
    // down right
    if(cameFrom.has(current + 17) == false  && (map[current + 17]) != null && (map[current + 17]) != 1)
    {
        frontier.enqueque(current + 17);
        cameFrom.fill(current + 17, current);
    }
    // up right
    if(cameFrom.has(current - 17) == false && (map[current - 17]) != null && (map[current - 17]) != 1)
    {
        frontier.enqueque(current - 17);
        cameFrom.fill(current - 17, current);
    }
    return cameFrom, frontier;
};

function get_path(goalIndex, startIndex, cameFrom){
    var current = goalIndex;
    let path = [];
    while(current != startIndex){
        path.push(current);
        current = cameFrom.get(current);
    }
    path.reverse();

    return path;
}

// helper function to get start location on map
function get_start(map){
    var start_current;
    for(var i = 0; i < map.length; i++){
            if(map[i] == 2)
            {
                start_current = i;
            }
    }
    return start_current;
};
// helper function to get goal location on map
function get_goal(map){
    var goal_current;
    for(var i = 0; i < map.length; i++){
        if(map[i] == 3)
        {
            goal_current = i;
        }
    }
    return goal_current;
}


