// selects the DOM element with an ID of "sidebar"
const sidebarElement = document.getElementById('sidebar');

// searches within the "sidebar" element for any elements with a class of "sub-heading"
const subHeadingList = sidebarElement.getElementsByClassName('sub-heading');

// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return the first element with the class "header"
document.querySelector('.header');

// find and return the first <header> element
document.querySelector('header');

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// find and return a list of <header> elements
const allHeaders = document.querySelectorAll('header');

allHeaders.forEach( header => console.dir(allHeaders[header]));