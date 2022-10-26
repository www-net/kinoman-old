//Создание элемента навигации
const createNavigationMarkup = (nav) => {
  const { name, href, count } = nav;

  return (
    `<a href="#${href}" class="main-navigation__item">${name} <span class="main-navigation__item-count">${count}</span></a>`
  );
};

// Отрисовка меню сайта
const createNavigationTemplate = (navigations) => {
  const navigationsMarkup = navigations
    .map((it) => { return createNavigationMarkup(it) })
    .join(`\n`);

  return (
    `<nav class="main-navigation">
            <div class="main-navigation__items">
                <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
                ${navigationsMarkup}

            </div>
            <a href="#stats" class="main-navigation__additional">Stats</a>
        </nav>`
  );
};

export { createNavigationTemplate };



                // <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
                // <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
