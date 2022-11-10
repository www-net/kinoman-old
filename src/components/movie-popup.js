import { formatDuration } from "../utils";
import { generateCommentsTemplate } from "./comments";

//Шаблон жанра
const generationGenresTemplate = (genres) => {
  return genres.map((genre) => {
    return (
      `<td class="film-details__cell">
      <span class="film-details__genre">${genre}</span>
    </td>`
    );
  })
    .join(`\n`)
};

//Шаблон строки с именем актера
const createActorsMarkup = (actors) => {
  const { firstName, secondName } = actors;
  return (
    `<td class="film-details__cell">${firstName} ${secondName}</td>`
  )
}

//Шаблон имени сценарита
const createWritersMarkup = (writers) => {
  const { firstName, secondName } = writers;
  return (
    `<td class="film-details__cell">${firstName} ${secondName}</td>`
  )
};

// Макет попапа
const createPopupTemplate = (movie) => {
  const {
    title,
    originalTitle,
    rating,
    director,
    writers,
    actors,
    releaseDate,
    duration,
    country,
    genres,
    description,
    age,
    poster,
    comments,
    isInWatchList,
    isWatched,
    isFavorite,
  } = movie;

  const actorsMarkup = actors.map((it) => createActorsMarkup(it)).join(`\n`);
  const writersMarkup = writers.map((it) => createWritersMarkup(it)).join(`\n`);

  return (
    `<section class="film-details">
            <form class="film-details__inner" action="" method="get">
                <div class="form-details__top-container">
                <div class="film-details__close">
                    <button class="film-details__close-btn" type="button">close</button>
                </div>
                <div class="film-details__info-wrap">
                    <div class="film-details__poster">
                    <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">

                    <p class="film-details__age">${age}</p>
                    </div>

                    <div class="film-details__info">
                    <div class="film-details__info-head">
                        <div class="film-details__title-wrap">
                        <h3 class="film-details__title">${title}</h3>
                        <p class="film-details__title-original">Original: ${originalTitle}</p>
                        </div>

                        <div class="film-details__rating">
                        <p class="film-details__total-rating">${rating}</p>
                        </div>
                    </div>

                    <table class="film-details__table">
                        <tr class="film-details__row">
                        <td class="film-details__term">Director</td>
                        <td class="film-details__cell">${director.firstName} ${director.secondName}</td>
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">Writers</td>
                        ${writersMarkup}
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">Actors</td>
                        ${actorsMarkup}
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">Release Date</td>
                        <td class="film-details__cell">${releaseDate.getFullYear()}</td>
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">Runtime</td>
                        <td class="film-details__cell">${formatDuration(duration)}</td>
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">Country</td>
                        <td class="film-details__cell">${country}</td>
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">${genres.length > 1 ? `Genres` : `Genre`}</td>
                          ${generationGenresTemplate(genres)}
                        </tr>
                    </table>

                    <p class="film-details__film-description">
                        ${description}
                    </p>
                    </div>
                </div>

                <section class="film-details__controls">
                    <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
                    <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

                    <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
                    <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

                    <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
                    <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
                </section>
                </div>

                <div class="form-details__bottom-container">
                  ${generateCommentsTemplate(comments)}
                </div>
            </form>
        </section>`
  );
};

export { createPopupTemplate };
