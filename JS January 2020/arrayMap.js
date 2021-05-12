const people = [
    {
        firstName: 'Johnny',
        lastName: 'Harris'
    },
    {
        firstName: 'Bela',
        lastName: 'Szalai'
    }
]

const names = people.map(person => `${person.firstName} ${person.lastName}`);

console.log(names);  //  [ 'Johnny Harris', 'Bela Szalai' ]
