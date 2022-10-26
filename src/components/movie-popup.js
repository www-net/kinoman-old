//Создание мока для попапа
const generationGenresTemplate = (genres) => {
  return genres
    .map((genre) => {
      return (`<span class="film-details__genre">${genre}</span>`);
    })
    .join(`\n`)
};

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

const getGenresPlural = (genres) => {
  if (genres.length > 1) {
    return (
      `Genres`
    )
  }
  return `Genre`;
}

const generatePopupCard = () => {
  return {
    poster: `sagebrush-trail.jpg`,
    title: `Непрактичный выбор цвена брюк в условиях дикого запада`,
    originalTitle: `Sagebrush trail`,
    rating: `8.3`,
    director: `Гайдай`,
    writers: `Стивен Кинг`,
    actors: `Иннокентий Смоктуновский`,
    releaseDate: `releaseDate`,
    duration: `00:00`,
    country: `Austria`,
    genres: [`frfrfr`, `ololo`],
    fullDescription: `Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit.`,
    ageRating: `18+`,
    comments: [
      {
        emoji: `smile.png`,
        comment: `Interesting setting and a good cast`,
        autor: `Tim Macoveev`,
        date: `2019/12/31 23:59`,
      },
      {
        emoji: `smile.png`,
        comment: `Interesting setting and a good cast`,
        autor: `Tim Macoveev`,
        date: `2019/12/31 23:59`,
      }
    ],
    countComments: `5`,
    isInWatchList: true,
    isWatched: true,
    isFavorite: true,
  }
};

// Отрисовка попапа
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
                        <td class="film-details__cell">${director}</td>
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">Writers</td>
                        <td class="film-details__cell">${writers}</td>
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">Actors</td>
                        <td class="film-details__cell">${actors}</td>
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">Release Date</td>
                        <td class="film-details__cell">${releaseDate}</td>
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">Runtime</td>
                        <td class="film-details__cell">${duration}</td>
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">Country</td>
                        <td class="film-details__cell">${country}</td>
                        </tr>
                        <tr class="film-details__row">
                        <td class="film-details__term">${getGenresPlural(genres)}</td>
                        <td class="film-details__cell">
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

export { createPopupTemplate, generatePopupCard };


                    // <li class="film-details__comment">
                    //     <span class="film-details__comment-emoji">
                    //     <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
                    //     </span>
                    //     <div>
                    //     <p class="film-details__comment-text">Booooooooooring</p>
                    //     <p class="film-details__comment-info">
                    //         <span class="film-details__comment-author">John Doe</span>
                    //         <span class="film-details__comment-day">2 days ago</span>
                    //         <button class="film-details__comment-delete">Delete</button>
                    //     </p>
                    //     </div>
                    // </li>
                    // <li class="film-details__comment">
                    //     <span class="film-details__comment-emoji">
                    //     <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
                    //     </span>
                    //     <div>
                    //     <p class="film-details__comment-text">Very very old. Meh</p>
                    //     <p class="film-details__comment-info">
                    //         <span class="film-details__comment-author">John Doe</span>
                    //         <span class="film-details__comment-day">2 days ago</span>
                    //         <button class="film-details__comment-delete">Delete</button>
                    //     </p>
                    //     </div>
                    // </li>
                    // <li class="film-details__comment">
                    //     <span class="film-details__comment-emoji">
                    //     <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
                    //     </span>
                    //     <div>
                    //     <p class="film-details__comment-text">Almost two hours? Seriously?</p>
                    //     <p class="film-details__comment-info">
                    //         <span class="film-details__comment-author">John Doe</span>
                    //         <span class="film-details__comment-day">Today</span>
                    //         <button class="film-details__comment-delete">Delete</button>
                    //     </p>
                    //     </div>
                    // </li>
