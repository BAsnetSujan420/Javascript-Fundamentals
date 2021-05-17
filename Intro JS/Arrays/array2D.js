let donutBox = [
    ["glazed", "chocolate glazed", "cinnamon"],
    ["powdered", "sprinkled", "glazed cruller"],
    ["chocolate cruller", "Boston creme", "creme de leche"]
  ];
  
  // donutBox.length refers to the number of rows of donuts
  for (let row = 0; row < donutBox.length; row++) {
    for( let col = 0; col < donutBox[row].length; col++){
        console.log(donutBox[row][col]);
    }
  }
