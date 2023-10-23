import {
  getRandomArrayItem,
  generateRandomText,
  generatePerson,
  generateRandomDate,
} from "../utils";

import {EMOJIS} from "../constants";
// Генерируем комментарий
const generateComment = () => {
  return {
    emoji: getRandomArrayItem(EMOJIS),
    text: generateRandomText(1, 1),
    autor: generatePerson(),
    date: generateRandomDate(2010, 2022),
  };
};

// Генерируем массив комментариев
export const generateComments = (commentCount) => {
  return new Array(commentCount).fill(``).map(generateComment);
};
