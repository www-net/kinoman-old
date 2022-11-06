import {
  getRandomArrayItem,
  getRandomBool,
  getRandomInt,
  getRandomDecimal,
  textSource,
} from "../utils";

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
const ageVariants = [0, 6, 12, 16, 18, 21];

//Генератор заголовка
const generateTitle = () => {
  const titleFirstWords = [`Great`, `Spider`, `Starship`, `Star`, `Time`, `Little`, `Universal`, `Lost`];
  const titleSecondWords = [`Gatsby`, `Man`, `Troopers`, `Wars`, `Machine`, `China`, `Soldier`, `Ark`];

  return `${getRandomArrayItem(titleFirstWords)} ${getRandomArrayItem(titleSecondWords)} ${(getRandomBool() ? `${getRandomInt(2, 8)}` : ``)}`;
};

// Генератор персоны
const generatePerson = () => {
  const firstNames = [`James`, `John`, `Ben`, `Leonardo`, `Jennifer`, `Cortney`, `Cillian`, `Tom`];
  const secondNames = [`Cameron`, `Carpenter`, `Affleck`, `DiCaprio`, `Aniston`, `Cox`, `Murphy`, `Hardy`];

  return {
    firstName: getRandomArrayItem(firstNames),
    secondName: getRandomArrayItem(secondNames),
  };
};

//Возвращает массив персон
const getPersonsList = (count) => {
  let generatedPersons = [];
  for (let i = 0; i < count; i++) {
    generatedPersons.push(generatePerson());
  }
  return generatedPersons;
}

//Генерация случайной даты релиза
const generateRandomDate = (minYear, maxYear, withTime = false) => {
  const date = new Date();
  const year = getRandomInt(minYear, maxYear + 1);
  const month = getRandomInt(0, 11);
  const day = getRandomInt(1, 29);
  date.setFullYear(year, month, day);
  if (withTime) {
    date.setHours(getRandomInt(0, 24), getRandomInt(0, 60));
  }
  return date;
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

//Возвращает случайный текст с количеством предложений заданном из диапазона
export const generateRandomText = (minSentencesQty, maxSentencesQty) => {
  const sentencesQty = getRandomInt(minSentencesQty, maxSentencesQty);
  const sentences = textSource.split(`.`).map((it) => it.trim());
  sentences.pop();

  let text = ``;
  for (let i = 0; i < sentencesQty; i++) {
    text = `${text} ${getRandomArrayItem(sentences)}. `;
  }

  return text.trim();
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
    isWatched,
    isInWatchList: isWatched ? false : getRandomBool(),
    isFavorite: isWatched ? getRandomBool() : false,

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
  };
};

//Создание временных данных (моков) видеокарточек
const generateMovieCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateMovieCard);
}

export { generateMovieCard, generateMovieCards };
