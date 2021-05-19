const nanoDegreeCard = document.querySelector('.card');
// nanoDegreeCard.textContent = "I will be the updated text for the nanodegreeCard element!";


const heading = document.querySelector('.testimonials h6');
heading.innerHTML = 'Our Amazing Community <em> ROCKS </em>!';


//textContent property returns all texts regardless of styles applied to them
//innerText property returns texts respecting styles being applied to them


//Adding Content as last child of element in The Page
const container  = document.createElement("span");
container.textContent = ", right now!";

const mainHeading = document.querySelector("h1");
mainHeading.appendChild(container);


//Inserting HTML In Other Locations
const htmlTextToAdd = '<p>Augmented Reality fun!</p>';
mainHeading.insertAdjacentHTML('beforeend', htmlTextToAdd);

//if an element already exists in the DOM and this element is passed to .appendChild(), the .appendChild() method will move it rather than duplicating it
//the .insertAdjacentHTML() method's second argument has to be text, you can't pass an element