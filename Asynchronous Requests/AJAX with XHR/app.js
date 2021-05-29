(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
    });

    const imgRequest = new XMLHttpRequest();
imgRequest.onload = addImage;
imgRequest.onerror = function(err){
    requestError(err, 'image');};

imgRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
imgRequest.setRequestHeader('Authorization', 'Client-ID 44dbceabc1234');
imgRequest.send();

function addImage(){
    const data = JSON.parse( this.responseText ); // convert data from JSON to a JavaScript object
    console.log(data);
}
})();

