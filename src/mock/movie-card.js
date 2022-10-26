const movieTitles = [
  `made-for-each-other`,
  `popeye-meets-sinbad`,
  `sagebrush-trail`,
  `santa-claus-conquers-the-martians`,
  `the-dance-of-life`,
  `the-great-flamarion`,
  `the-man-with-the-golden-arm`
];

const getRandomcount = (min, max) => {
  return Math.floor(Math.random() * titles.length);
}

const generateMovieTitle = () => {
  return movieTitles.map((it) => {
    return ` `
  })
}

// Создание объекта для генерации мока видеокарточки
const generateMovieCard = () => {
  return {
    title: `title`,
    rating: `rating`,
    releaseDate: `releaseDate`,
    duration: `00:00`,
    genres: `genres`,
    poster: `sagebrush-trail.jpg`,
    description: `Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Cras aliquet`,
    comments: `comments`,
    isInWatchList: true,
    isWatched: true,
    isFavorite: true,
  };
};

//Создание временных данных (моков) видеокарточек
const generateMovieCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateMovieCard);
}

export { generateMovieCard, generateMovieCards };
