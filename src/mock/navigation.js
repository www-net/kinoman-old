import { FILTER_NAMES } from "../constants";

const EMPTY_FILTERS = [
  { name: FILTER_NAMES.ALL, count: 0},
  { name: FILTER_NAMES.WATCHLIST, count: 0},
  { name: FILTER_NAMES.HISTORY, count: 0},
  { name: FILTER_NAMES.FAVORITES, count: 0},
]

//Генератор навигации
const generateNavigationItems = (movies) => {


  return [
    {
      name: `Watchlist`,
      href: `watchlist`,
      count: `12`,
    },
    {
      name: `History`,
      href: `history`,
      count: `4`,
    },
    {
      name: `Favorites`,
      href: `favorites`,
      count: `8`,
    },
  ]
};

export { generateNavigationItems };
