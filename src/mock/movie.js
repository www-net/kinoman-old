import {
  getRandomArrayItem,
  getRandomBool,
  getRandomInt,
  getRandomDecimal,
  generateRandomText,
  generatePerson,
  generateRandomDate,
} from "../utils";

import { generateComments } from "./comment";

//Пути к постерам
const posters = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
]

//Массив жанров
const genres = [`Musical`, `Western`, `Drama`, `Mystery`, `Cartoon`, `Action`, `Thriller`];

//Страны
const countries = [`Russia`, `USA`, `India`, `France`, `Italy`, `Canada`];

//Вараинты ограничений по возрасту
const ageVariants = [`0+`, `6+`, `12+`, `16+`, `18+`, `21+`];

//Генератор заголовка
const generateTitle = () => {
  const titleFirstWords = [`Great`, `Spider`, `Starship`, `Star`, `Time`, `Little`, `Universal`, `Lost`];
  const titleSecondWords = [`Gatsby`, `Man`, `Troopers`, `Wars`, `Machine`, `China`, `Soldier`, `Ark`];

  return `${getRandomArrayItem(titleFirstWords)} ${getRandomArrayItem(titleSecondWords)} ${(getRandomBool() ? `${getRandomInt(2, 8)}` : ``)}`;
};

//Возвращает массив персон
const getPersonsList = (count) => {
  let generatedPersons = [];
  for (let i = 0; i < count; i++) {
    generatedPersons.push(generatePerson());
  }
  return generatedPersons;
}

//Генерируем массив жанров
const getGenresList = (count) => {
  let movieGenres = [];
  for (let i = 0; i < count; i++) {
    const getRandomGenre = () => {
      const randomGenre = getRandomArrayItem(genres);
      if (movieGenres.find((it) => it == randomGenre)) {
        getRandomGenre();
      } else {
        movieGenres.push(randomGenre);
      }
    }
    getRandomGenre();
  }
  return movieGenres;
};

// Создание объекта для генерации мока видеокарточки
const generateMovieCard = () => {
  const title = generateTitle();
  const originalTitle = title;

  const isWatched = getRandomBool();

  return {
    title,
    originalTitle,
    director: generatePerson(),
    writers: getPersonsList(getRandomInt(1, 3)),
    actors: getPersonsList(getRandomInt(3, 5)),
    country: getRandomArrayItem(countries),
    rating: getRandomDecimal(5, 10),
    releaseDate: generateRandomDate(1930, 2022),
    duration: getRandomInt(60, 180),
    genres: getGenresList(getRandomInt(1, 4)),
    poster: getRandomArrayItem(posters),
    description: generateRandomText(1, 5),
    age: getRandomArrayItem(ageVariants),
    isWatched,
    isInWatchList: isWatched ? false : getRandomBool(),
    isFavorite: isWatched ? getRandomBool() : false,

    comments: generateComments(getRandomInt(1, 10)),
    countComments: getRandomInt(1, 5),
  };
};

//Создание временных данных (моков) видеокарточек
const generateMovieCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateMovieCard);
}

export { generateMovieCard, generateMovieCards };
