// Испточник предложений для случайного текста
export const textSource = (
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Cras aliquet varius magna, non porta ligula feugiat eget.
Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.
Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
Sed sed nisi sed augue convallis suscipit in sed felis.
Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.
In rutrum ac purus sit amet tempus.`
);

// Генерация натурального числа из массива
export const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower; //Максимум и минимум включаются
  return Math.floor(result);
};

//Увеличение числа на заданное значение addingValue
export const increaseInt = (int, addingValue = 1) => {
  return int + addingValue;
};

//Возвращаем случайный элемент массива
export const getRandomArrayItem = (array) => array[getRandomInt(0, array.length - 1)];

//Возвращает случайное значение boolean
export const getRandomBool = (probability = 0.5) => Math.random() <= probability;

//Возвращает псевдослучайное десятичное число из интервала min-max
export const getRandomDecimal = (min, max, precision = 1) => (min + Math.random() * (max - min)).toFixed(precision);

//Форматирует длительность фильма для отображения
export const formatDuration = (duration) => `${Math.floor(duration / 60)}h ${duration % 60}m`;

//Обрезка строки до заданного лимита
export const clipText = (text, limit) => text.length > limit ? `${text.slice(0, limit)}...` : text;

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

// Генератор персоны
export const generatePerson = () => {
  const firstNames = [`James`, `John`, `Ben`, `Leonardo`, `Jennifer`, `Cortney`, `Cillian`, `Tom`];
  const secondNames = [`Cameron`, `Carpenter`, `Affleck`, `DiCaprio`, `Aniston`, `Cox`, `Murphy`, `Hardy`];

  return {
    firstName: getRandomArrayItem(firstNames),
    secondName: getRandomArrayItem(secondNames),
  };
};

//Генерация случайной даты
export const generateRandomDate = (minYear, maxYear, withTime = false) => {
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

//Добавление нуля к числам в датах
const castDateTimeFormat = (value) => value < 10 ? `0${value}` : String(value);

//Форматирование времени
export const formatTime = (date) => {
  const year = date.getFullYear();
  const month = castDateTimeFormat(date.getMonth() + 1);
  const day = castDateTimeFormat(date.getDate());
  const hours = castDateTimeFormat(date.getHours());
  const minutes = castDateTimeFormat(date.getMinutes());

  return `${year}/${month}/${day} ${hours}:${minutes}`;
};

//Событие по нажатию наклавишу Esc
export const isEscapeEvent = (evt, action) => {
  if (evt.key == `Escape`) {
    action();
  }
};
