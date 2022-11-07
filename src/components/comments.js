import { formatTime } from "../utils";

//Шаблон комментария
const generateCommentMarkup = (comments) => {
  return comments
    .map((it) => {
      const {
        emoji,
        text,
        autor,
        date,
      } = it;

      return (
        `<li class="film-details__comment">
          <span class="film-details__comment-emoji">
            <img src="./images/emoji/${emoji.image}" width="55" height="55" alt="emoji-${emoji.emotion}">
          </span>
          <div>
            <p class="film-details__comment-text">${text}</p>
            <p class="film-details__comment-info">
              <span class="film-details__comment-author">${autor.firstName} ${autor.secondName}</span>
              <span class="film-details__comment-day">${formatTime(date)}</span>
              <button class="film-details__comment-delete">Delete</button>
            </p>
          </div>
        </li>`
      )
    }).join(`\n`);
}

//Разметка блока с комментариями
export const generateCommentTemplate = (comments) => {
  return (
    `<section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">
      ${comments ? comments.length : `0`}</span></h3>

      <ul class="film-details__comments-list">
        ${generateCommentMarkup(comments)}
      </ul>

      <div class="film-details__new-comment">
        <div for="add-emoji" class="film-details__add-emoji-label"></div>

        <label class="film-details__comment-label">
          <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here"
            name="comment"></textarea>
        </label>

        <div class="film-details__emoji-list">
          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile"
            value="smile">
          <label class="film-details__emoji-label" for="emoji-smile">
            <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping"
            value="sleeping">
          <label class="film-details__emoji-label" for="emoji-sleeping">
            <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke"
            value="puke">
          <label class="film-details__emoji-label" for="emoji-puke">
            <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
          </label>

          <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry"
            value="angry">
          <label class="film-details__emoji-label" for="emoji-angry">
            <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
          </label>
        </div>
      </div>
    </section>`
  );
};
