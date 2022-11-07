import {
  getRandomArrayItem,
  generateRandomText,
  generatePerson,
  generateRandomDate,
} from "../utils";

//Смайлы
const emojis = [
  {
    emotion: `smile`,
    image: `./smile.png`
  },
  {
    emotion: `angry`,
    image: `./angry.png`
  },
  {
    emotion: `sleeping`,
    image: `./sleeping.png`
  },
  {
    emotion: `puke`,
    image: `./puke.png`
  },
];

//Текст

//Автор

//Дата


//Данные комментрария
export const generateComments = (count) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(
      {
        emoji: getRandomArrayItem(emojis),
        text: generateRandomText(1, 1),
        autor: generatePerson(),
        date: generateRandomDate(2010, 2022),
      }
    );
  }

  return comments;
};
