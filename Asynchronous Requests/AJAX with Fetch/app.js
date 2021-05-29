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


fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID 462d22cabc123'
    }
}).then(function(response) {
    return response.json();
}).then(addImage)
.catch(e => requestError(e, 'image'));

function addImage(data) {
    let htmlContent = '';

    if (data && data.results && data.results[0]) {
        const firstImage = data.results[0];
        htmlContent = `<figure>
            <img src="${firstImage.urls.small}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`;
    } else {
        htmlContent = '<div class="error-no-image">Unfortunately, no image was returned for your search.</div>'
    }
}
})();
