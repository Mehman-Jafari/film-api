const infoFilm = document.querySelector(".js-contetn-info-film");

const urlParams = new URLSearchParams(location.search);
const id = urlParams.get("id");

fetch(`https://www.omdbapi.com/?i=${id}&apikey=7587814c`)
  .then((data) => data.json())
  .then((response) => {
    addInfoMovieToHTML(response);
  });

function addInfoMovieToHTML(response) {
  return (infoFilm.innerHTML = `
            <img src="${response.Poster}" alt="Batman Begins" class="contetn-info-film__image">
            <div class="contetn-info-film__body body-content-film">
                <h1 class="body-content-film__title">${response.Title}</h1>
                <ul class="body-content-film__list">
                    <li class="body-content-film__item">Год: <span>${response.Year}</span></li>
                    <li class="body-content-film__item">Рейтинг: <span>${response.Rated}</span></li>
                    <li class="body-content-film__item">Дата выхода: <span>${response.Released}</span></li>
                    <li class="body-content-film__item">Продолжительность: <span>${response.Runtime}</span></li>
                    <li class="body-content-film__item">Жанр: <span>${response.Genre}</span></li>
                    <li class="body-content-film__item">Режиссер: <span>${response.Director}</span></li>
                    <li class="body-content-film__item">Сценарий: <span>${response.Writer}</span></li>
                    <li class="body-content-film__item">Актеры: <span>${response.Actors}</span></li>
                </ul>
            </div>
    `);
}
