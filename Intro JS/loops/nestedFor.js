
// seat number in eam hall

var row = 0;  // initial value of the row
var seat = 0; // initial value of the seat within a row

// One loop inside another is called Nested loop.
// Outer `for` loop, to iterate over the rows
for (row = 0; row <= 6; row++){

    // Inner `for` loop, to iterate over the seats within a row
    // In this loop, the value of `row` variable would change only after 5 iterations
    for(seat = 0; seat <= 4; seat++){
        console.log(row+"-"+seat);
    }
}