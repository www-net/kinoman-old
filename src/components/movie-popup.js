import { formatDuration } from "../utils";

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

//Шаблон комментария
const generateCommentTemplate = (comments) => {
  return comments
    .map((it) => {
      const {
        emoji,
        comment,
        autor,
        date,
      } = it;

      return (
        `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
        <img src="./images/emoji/${emoji}" width="55" height="55" alt="emoji-smile">
        </span>
        <div>
        <p class="film-details__comment-text">${comment}</p>
        <p class="film-details__comment-info">
            <span class="film-details__comment-author">${autor}</span>
            <span class="film-details__comment-day">${date}</span>
            <button class="film-details__comment-delete">Delete</button>
        </p>
        </div>
    </li>`
      )
    });
}

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
    fullDescription,
    ageRating,
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

                    <p class="film-details__age">${ageRating}</p>
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
                        <td class="film-details__term">Genres</td>
                          ${generationGenresTemplate(genres)}
                        </tr>
                    </table>

                    <p class="film-details__film-description">
                        ${fullDescription}
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
                <section class="film-details__comments-wrap">
                    <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments ? comments.length : `0`}</span></h3>

                    <ul class="film-details__comments-list">
                    ${generateCommentTemplate(comments)}
                    </ul>

                    <div class="film-details__new-comment">
                    <div for="add-emoji" class="film-details__add-emoji-label"></div>

                    <label class="film-details__comment-label">
                        <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
                    </label>

                    <div class="film-details__emoji-list">
                        <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
                        <label class="film-details__emoji-label" for="emoji-smile">
                        <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                        </label>

                        <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                        <label class="film-details__emoji-label" for="emoji-sleeping">
                        <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                        </label>

                        <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                        <label class="film-details__emoji-label" for="emoji-puke">
                        <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                        </label>

                        <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                        <label class="film-details__emoji-label" for="emoji-angry">
                        <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                        </label>
                    </div>
                    </div>
                </section>
                </div>
            </form>
        </section>`
  );
};

export { createPopupTemplate };
