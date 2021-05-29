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

fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=<your-API-key-goes-here>`)
.then(function(response) {
    return response.json();
}).then(addArticles)
.catch(e => requestError(e, 'articles'));

function addArticles () {
    let htmlContent = '';

    if (data && data.response.docs && data.response.docs.length > 1) {
        const articles = data.response.docs;
        htmlContent = '<ul>' + articles.map(article + `<li class="article">
        <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
        <p>${article.snippet}</p>
        </li>`).join('') + '</ul>'
            
    } else {
        htmlContent = '<div class="error-no-articles">No articles found.</div>'
    }

    responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
}

})();
