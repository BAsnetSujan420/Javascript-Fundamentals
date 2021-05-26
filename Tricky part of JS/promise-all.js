const user1 = document.querySelector(".user1");
const user2 = document.querySelector(".user2");

Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()),
    fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json()),
    new Promise((resolve, reject) => {
      document.getElementById('btn')
      .addEventListener('click', () => resolve('CLICKED!'));
    })
  ]).then(result => {
    console.log(result);
    user1.innerText = `UserID = ${result[0].id}  Title = ${result[0].title}`;
    user2.innerText = `UserID = ${result[1].id}  Title = ${result[1].title}`;
  }).catch(error => {
    console.log(error);
  });