const searchFilmInput = document.querySelector(".js-top-film__input-search-film");
const searchFilmBtn = document.querySelector(".js-top-film__btn-search-film");
const noneFilm = document.querySelector(".js-content-film__noy-film");
const wrapperFilm = document.querySelector(".js-content-film__list");

searchFilmBtn.addEventListener("click", (event) => {
  const inputValue = String(searchFilmInput.value);
  
  disablePreventDefault(event);

  fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=7587814c`)
    .then((data) => data.json())
    .then((response) => {
      notMovieFound(response);

      const searchResponseFilm = response.Search;
      wrapperFilm.innerHTML = "";

      searchResponseFilm.forEach((resFilm) => {
        addListMovieFromSearch(resFilm);
      });

      resetSearchMovieInputValue();
    });
});

function notMovieFound(response) {
  if (response.Response === "False") {
    resetSearchMovieInputValue();
    return (wrapperFilm.innerHTML = `<p class="content-film__noy-film js-content-film__noy-film">Фильмы не найдены</p>`);
  }
}

function resetSearchMovieInputValue() {
  return (searchFilmInput.value = "");
}

function addListMovieFromSearch(resFilm) {
  return (wrapperFilm.innerHTML += `
          <li class="content-film__item js-content-film__item" onclick="location.href='film.html?id=${resFilm.imdbID}'">
              <img
                  src="${resFilm.Poster}"
                  alt="${resFilm.Title}"
                  class="content-film__image"
              />
              <div class="content-film__contetn-item content-item-film">
                  <h2 class="content-item-film__title">${resFilm.Title}</h2>
                  <p class="content-item-film__year">${resFilm.Year}</p>
                  <p class="content-item-film__category">Фильм</p>
              </div>
          </li>
  `);
}

function disablePreventDefault(event) {
  event.preventDefault();
}