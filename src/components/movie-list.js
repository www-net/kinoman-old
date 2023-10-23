import {formatDuration, clipText} from "../utils";

// Шаблон карточки фильма
export const createMovieCardMarkup = (movie) => {
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

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseDate.getFullYear()}</span>
        <span class="film-card__duration">${formatDuration(duration)}</span>
        <span class="film-card__genre">${genres[0]}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${clipText(description, 100)}</p>
        <a class="film-card__comments">${comments.length} ${comments.length > 1 ? `comments` : `comment`}</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isInWatchList ? `film-card__controls-item--active` : ``}"
            >Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isWatched ? `film-card__controls-item--active` : ``}"
            >Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite ? `film-card__controls-item--active` : ``}"
            >Mark as favorite</button>
        </form>
    </article>`
  );
};

// Создание общего контейнера для всех списков фильмов
export const createMovieListContainer = () => {
  return (
    `<section class="films"></section>`
  );
};

// Создание списка фильмов
export const createMovieListTemplate = (title, isExtra = false) => {
  return (
    `<section class="films-list${isExtra ? `--extra` : ``}">
      <h2 class="films-list__title ${isExtra ? `` : `visually-hidden`}">${title}</h2>
      <div class="films-list__container">
      </div>

      ${isExtra ? `` : `<button class="films-list__show-more">Show more</button>`}
    </section>`
  );
};
