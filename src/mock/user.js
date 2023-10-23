import {FILTER_NAMES} from "../constants";

// Звания пользователя и количество просмотренных фильмов
const userRatings = {
  [`Novice`]: 1,
  [`Fan`]: 11,
  [`Movie Buff`]: 21,
};

// Получаем строку с рейтингом для пользователя
export const getRating = (filters) => {
  let movieCount = 0;
  filters.forEach((it) => {
    const {name, count} = it;
    if (name === FILTER_NAMES.HISTORY) {
      movieCount = count;
    }
  });
  let rating = ``;
  for (const key in userRatings) {
    if (movieCount >= userRatings[key]) {
      rating = key;
    } else {
      break;
    }
  }
  return rating;
};
