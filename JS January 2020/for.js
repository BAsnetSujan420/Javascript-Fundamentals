const numbers = [10,9,8,7,6,5]

for (let i =0; i< numbers.length; i++){
    console.log(numbers[i]);
     // 10, 9, 8, 7, 6, 5    
}

const arr = [[1,2],[3,4],[5,6]];

for( let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr[i].length; j++){
        console.log(arr[i][j]);
        // 1, 2, 3, 4, 5, 6
    }
} 
