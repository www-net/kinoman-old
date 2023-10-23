import {FILTER_NAMES} from "../constants";

// Создание элемента фильтра
const createNavigationMarkup = (filter) => {
  const {name, label, count} = filter;

  return (
    `<a href="#${name}" class="main-navigation__item">
    ${label}
    ${name === FILTER_NAMES.ALL ? `` : `<span class="main-navigation__item-count">${count}</span>`}
    </a>`
  );
};

// Отрисовка меню сайта
export const createNavigationTemplate = (filters) => {
  return (
    `<nav class="main-navigation">
            <div class="main-navigation__items">
                ${filters.map(createNavigationMarkup).join(`\n`)}
            </div>
            <a href="#stats" class="main-navigation__additional">Stats</a>
        </nav>`
  );
};
