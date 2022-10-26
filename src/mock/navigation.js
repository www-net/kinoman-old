//Данные для создания элементов навигации
const generateNavigationItems = () => {
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
