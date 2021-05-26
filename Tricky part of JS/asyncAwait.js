(async () => {
    const serverResult = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonResult = await serverResult.json();
    console.log(jsonResult);
})()


const helloPromise = new Promise((resolve, reject) => {
    resolve('Hello');
  });
  const worldPromise = new Promise((resolve, reject) => {
    resolve('World');
  });
  
  (async () => console.log(await helloPromise + ' ' + await worldPromise))();