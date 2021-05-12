// fetch statement with async/await

const { default: fetch } = require("node-fetch");

async function getTodos(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/40");
    const json = await response.json();
    console.log(json);
}

getTodos();
