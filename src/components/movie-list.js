// Отрисовка карточки фильма
const createMovieCardMarkup = (movie) => {
  const {
    title,
    rating,
    releaseDate,
    duration,
    genres,
    poster,
    description,
    comments,
    isInWatchList,
    isWatched,
    isFavorite,
  } = movie;

  const watchListButtonInactiveClass = isInWatchList ? `` :
    `film-card__controls-item--disabled`;
  const watchedButtonInactiveClass = isWatched ? `` :
    `film-card__controls-item--disabled`;
  const favoriteButtonInactiveClass = isFavorite ? `` :
    `film-card__controls-item`;

  return (
    `<article class="film-card">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${rating}</p>
            <p class="film-card__info">
                <span class="film-card__year">${releaseDate}</span>
                <span class="film-card__duration">${duration}</span>
                <span class="film-card__genre">${genres}</span>
            </p>
            <img src="./images/posters/${poster}" alt="" class="film-card__poster">
                <p class="film-card__description">${description}</p>
                <a class="film-card__comments">${comments}</a>
                <form class="film-card__controls">
                    <button class="film-card__controls-item button
                      film-card__controls-item--add-to-watchlist ${watchListButtonInactiveClass}"
                      >Add to watchlist</button>
                    <button class="film-card__controls-item button
                      film-card__controls-item--mark-as-watched" ${watchedButtonInactiveClass}
                      >Mark as watched</button>
                    <button class="film-card__controls-item button
                      film-card__controls-item--favorite ${favoriteButtonInactiveClass}"
                      >Mark as favorite</button>
                </form>
        </article>`
  );
};

// Отрисовка контейнера для списка фильмов
const createMovieListTemplate = () => {
  return (
    `<section class="films">
            <section class="films-list">
                <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
                <div class="films-list__container">

                </div>
            </section>
        </section>`
  );
};

export { createMovieListTemplate, createMovieCardMarkup };
