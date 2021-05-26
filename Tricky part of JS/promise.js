const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Error!: ' + err));

// const callAPI = (url) => {
//     return new Promise((resolve, reject) => {
//       $.ajax({
//         url,
//         type: 'GET',
//         success: function(data) {
//           resolve(data)
//         },
//         error: function(error) {
//           reject(error)
//         },
//       })
//     })
//   }

// callAPI('http://google.com')
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });