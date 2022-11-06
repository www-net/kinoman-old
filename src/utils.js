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
