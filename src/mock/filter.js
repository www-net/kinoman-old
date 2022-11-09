import { FILTER_NAMES } from "../constants";
import { increaseInt } from "../utils";

const EMPTY_FILTERS = [
  { name: FILTER_NAMES.ALL, count: 0 },
  { name: FILTER_NAMES.WATCHLIST, count: 0 },
  { name: FILTER_NAMES.HISTORY, count: 0 },
  { name: FILTER_NAMES.FAVORITES, count: 0 },
];

//Данные для элемента навигации
export const generateFilters = (movies) => {
  return movies.reduce((acc, movie) => {
    const [all, watchlist, history, favorites] = acc.map((it) => it.count);
    console.log(all, watchlist, history, favorites);
    return [
      {
        name: FILTER_NAMES.ALL,
        label: `All movies`,
        count: increaseInt(all),
      },
      {
        name: FILTER_NAMES.WATCHLIST,
        label: `Watchlist`,
        count: movie.isInWatchList ? increaseInt(watchlist) : watchlist,
      },
      {
        name: FILTER_NAMES.HISTORY,
        label: `History`,
        count: movie.isWatched ? increaseInt(history) : history,
      },
      {
        name: FILTER_NAMES.FAVORITES,
        label: `Favorites`,
        count: movie.isFavorite ? increaseInt(favorites) : favorites,
      },
    ];
  }, EMPTY_FILTERS)
};
