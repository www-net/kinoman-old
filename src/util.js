// Генерация числа из массива
const getRandomPositiveInteger = function (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower; //Максимум и минимум включаются
  return Math.floor(result);
};

export { getRandomPositiveInteger }
