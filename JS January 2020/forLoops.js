const posts = {
    'id': 1,
    'title': 'Post Title',
    'body': 'Post Body'
}

// for in loops for iterating over objects

for (let post in posts){
    console.log(post);
}  // id, title, body

for (let post in posts){
    console.log(posts[post]);
} // 1, Post Title, Post Body


const numbers = [1, 8, 3, 7, 5, 6]

for (number in numbers){
    console.log(number);
}  // 0, 1, 2, 3, 4, 5

// for of loop for iterating over array

for (number of numbers){
    console.log(number);
} // 1, 8, 3, 7, 5, 6  
