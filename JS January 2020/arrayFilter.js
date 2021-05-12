/**
 * Both Filter & Map method are accessor methods 
 * function call back has access to element, index and array
 * arr.filter(function(element, index, array));
 * 
 */

let numbers = [4, 7, 11, 8, 12, 9]

//filtering even numbers
let filtered = numbers.filter(n=> !(n%2));

console.log(filtered);  // [ 4, 8, 12 ]


// movie filter
const movies = [
    {title: 'Star Wars : Episode IV - A New Hope', year:1977},
    {title: 'Star Wars : Episode V - The Empire Strikes Back', year:1980},
    {title: 'Star Wars : Episode VI - Return of the Jedi', year:1983},
    {title: 'Star Wars : Episode I - The Phantom Menace', year:1999},
    {title: 'Star Wars : Episode II - Attack of the Clones', year:2002},
    {title: 'Star Wars : Episode III - Revenge of Sith', year:2005},
    {title: 'Star Wars : Episode VII - The Force Awakens', year:2015},
    {title: 'Star Wars : Episode VIII - The Last Jedi', year:2017},
    {title: 'Star Wars : Episode IX - The Rise of Skywalker', year:2019}
]

let latest = movies.filter(movie => movie.year >= 2015);

console.log(latest);
