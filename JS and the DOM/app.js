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


//Removing Content from Parent element
const cardContainer = document.querySelector('.hero__module');
const firstChild = cardContainer.firstElementChild;
//cardContainer.removeChild(firstChild);
firstChild.remove();


// Modifying an Element's Style Attribute

const communityHeading = document.querySelector("h6.text-center");

communityHeading.style.backgroundColor = "gray";
communityHeading.style.cssText = "color: orange; font-size: 2em";

// add an ID attribute to the heading's sibling element
communityHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// use the newly added ID to access and style that element
document.querySelector('#heading-sibling').style.backgroundColor = 'lightblue';

//add and remove class for element
communityHeading.classList.remove("text-center");

communityHeading.classList.toggle("text-center");



// Respond to Events - Adding and removing event listeners

function increaseTextSize(){
    this.style.fontSize = "2em";
}
mainHeading.addEventListener('mouseenter', increaseTextSize, true);

mainHeading.removeEventListener('mouseleave', increaseTextSize, true);

document.body.addEventListener('keypress', function(event){
    console.log("removing first child");
    event.preventDefault();
    console.log(event.key);
 document.querySelector("#contain-all").firstElementChild.remove();
});


// Phases of Events

//By default, when .addEventListener() is called with only two arguments, the method defaults to using the bubbling phase.


