const fetch = require("node-fetch");

// fetch API to get to do list with id 20

fetch("https://jsonplaceholder.typicode.com/todos/20")
.then(response => response.json())
.then(json => console.log(json))