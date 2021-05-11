let name = 'Tomek';
let day = "Friday";
let temp = 23;

const message =
`Hi ${name},
I hope you have a great ${day}!
It's "currently" ${temp} degree outside today.`;

console.log(message);


// tagged template literals

const language = "Javascript"
const month = "May";

function tag(strings, ...values){
    console.log(strings);
    console.log(values);

    return strings[0] + values.join("");
}

tag `#${language}${month}`;

//Output

// Hi Tomek,
// I hope you have a great Friday!
// It's "currently" 23 degree outside today.

// [ '#', '', '' ]
// [ 'Javascript', 'May' ]
