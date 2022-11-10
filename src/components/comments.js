import { formatTime } from "../utils";
import { EMOJIS } from "../constants";

//Шаблон комментария
const createCommentMarkup = (comment) => {
  const {
    emoji,
    text,
    autor,
    date,
  } = comment;

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
};

//Шаблон смайла
const createEmojiMarkup = (emoji) => {
  const { emotion, image } = emoji;
  return (
    `<input class="film-details__emoji-item visually-hidden"
        name="comment-emoji"
        type="radio"
        id="emoji-${emotion}"
        value="${emotion}">
      <label class="film-details__emoji-label" for="emoji-${emotion}">
        <img src="./images/emoji/${image}" width="30" height="30" alt="emoji">
    </label>`
  )
}

//Разметка блока с комментариями
export const generateCommentsTemplate = (comments) => {
  const generateComments = comments.map(createCommentMarkup).join(`\n`);
  const generateEmojis = EMOJIS.map(createEmojiMarkup).join(`\n`);

  return (
    `<section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">
      ${comments ? comments.length : `0`}</span></h3>

      <ul class="film-details__comments-list">
        ${generateComments}
      </ul>

      <div class="film-details__new-comment">
        <div for="add-emoji" class="film-details__add-emoji-label"></div>

        <label class="film-details__comment-label">
          <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here"
            name="comment"></textarea>
        </label>

        <div class="film-details__emoji-list">
          ${generateEmojis}
        </div>
      </div>
    </section>`
  );
};
