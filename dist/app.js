// GET DATA 
document.querySelector(".movies").innerHTML = dataMovies
    .reduce((url, item) => (url + `<a class="poster" href="https://www.imdb.com/title/${item.imdbID}/" target="_blank"><img src="${item.Poster}" alt="Poster: ${item.Title}"></a>`), "");

// FILTERS
document.querySelectorAll('.nav-radio-buttons-option').forEach((filter) => {
    filter.onchange = (selection) => {
        if (selection.target.value === 'new') {
            document.querySelector(".movies").innerHTML = dataMovies
                .filter((data) => (parseInt(data.Year) >= 2016))
                .reduce((url, item) => (url + `<a href="https://www.imdb.com/title/${item.imdbID}/" target="_blank"><img src="${item.Poster}" alt="film poster ${item.Title}"></a>`), "");
        } else {
            document.querySelector(".movies").innerHTML = dataMovies
                .filter(data => data.Title.includes(selection.target.value))
                .reduce((url, item) => (url + `<a href="https://www.imdb.com/title/${item.imdbID}/" target="_blank"><img src="${item.Poster}" alt="film poster ${item.Title}"></a>`), "");
        }
    }
});

// SEARCH BAR
document.querySelector('.text').oninput = (search) => {
    document.querySelector(".movies").innerHTML = dataMovies
        .filter(data => data.Title.toLowerCase().includes(search.srcElement.value.toLowerCase()))
        .reduce((url, item) => (url + `<a href="https://www.imdb.com/title/${item.imdbID}/" target="_blank"><img src="${item.Poster}" alt="film poster ${item.Title}"></a>`), "");
}
