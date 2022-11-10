import { createUserProfileTemplate } from './components/pfofile';
import { createNavigationTemplate } from './components/filters';
import { createSortTemplate } from './components/sort';
import {
  createMovieListContainer,
  createMovieListTemplate,
  createMovieCardMarkup,
} from './components/movie-list';
import { createStatisticTemplate } from './components/statistics';
import { createPopupTemplate } from './components/movie-popup';

import { generateMovieCards } from './mock/movie';
import { generateFilters} from "./mock/filter";
import { MOVIE_COUNT } from "./constants";
import { isEscapeEvent } from "./utils";
import { getRating } from "./mock/user";

//Шапка сайта
const headerElement = document.querySelector(`.header`);
//Основной блок страницы
const mainElement = document.querySelector(`.main`);
//Подвал сайта
const footerElement = document.querySelector(`.footer`);
//Раздел для отображения статистики
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);

//Количество отображенных карточек на данный момент
let showMovies = MOVIE_COUNT.ON_START;

//Данные для генерации видеокарточек
const movieCards = generateMovieCards(MOVIE_COUNT.TOTAL);

//Данные для генерации фильтров
const navigationItems = generateFilters(movieCards);

//Рейтинг пользователя
const userRating = getRating(navigationItems);

//Функция для рендеринга компонентов
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

//Рендер аватара и звания пользователя
render(headerElement, createUserProfileTemplate(userRating));

//Рендер меню и фильтров
render(mainElement, createNavigationTemplate(navigationItems));
render(mainElement, createSortTemplate());

//Рендер общего блока для всех списков фильмов
render(mainElement, createMovieListContainer());

//Общий контейнер для списков фильмов
const mainMovieList = mainElement.querySelector(`.films`);

//Рендер блока для основного списка фильмов
render(mainMovieList, createMovieListTemplate(`All movies. Upcoming`));

//Элемент в который будем вставлять карточки фильмов. Основной список
const movieListElement = mainMovieList.querySelector(`.films-list__container`);

//Функция рендеринга карточек в списки фильмов
const renderMovieList = (container, count) => {
  movieCards.slice(0, count)
    .forEach((movie) => {
      render(container, createMovieCardMarkup(movie));
    })
};

//Рендер карточек в основной список фильмов
renderMovieList(movieListElement, MOVIE_COUNT.ON_START);

//Кнопка show more
const loadMoreBtn = mainMovieList.querySelector(`.films-list__show-more`);

//Рендер дополнительных карточек фильмов
const createMovieList = (movies) => movies.map(createMovieCardMarkup).join(`\n`);

//Рендер дополнительных карточек фильмов по клику на кнопку "show more"
loadMoreBtn.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  const previouslyShown = showMovies;
  showMovies = previouslyShown + MOVIE_COUNT.ON_BTN;
  render(movieListElement, createMovieList(movieCards.slice(previouslyShown, showMovies)));
  if (showMovies >= MOVIE_COUNT.TOTAL) {
    loadMoreBtn.remove();
  }
});

//Рендер дополнительных списков фильмов
render(mainMovieList, createMovieListTemplate(`Top rated`, true));
render(mainMovieList, createMovieListTemplate(`Most commented`, true));

//Дополнительные списки фильмов
const movieTopRatedElement = mainMovieList.querySelector(`.films-list--extra .films-list__container`);
const movieMostСommentedElement = mainMovieList.querySelector(`.films-list--extra:nth-child(3) .films-list__container`);

//Рендер карточек в дополнительные списки фильмов
renderMovieList(movieTopRatedElement, MOVIE_COUNT.EXTRA);
renderMovieList(movieMostСommentedElement, MOVIE_COUNT.EXTRA);

//Рендер статистике в подвале
render(footerStatisticsElement, createStatisticTemplate(movieCards.length));

//Рендер попапа
render(footerElement, createPopupTemplate(movieCards[0]), `afterend`);

//Попап
const popUpElement = document.querySelector(`.film-details`);

//Делаем попап визуально скрытым
popUpElement.classList.add(`visually-hidden`);

//Постеры фильмов в карточке
const moviePosters = mainMovieList.querySelectorAll(`.film-card__poster`);

//Кнопка закрытия попапа
const buttonPopupClose = popUpElement.querySelector(`.film-details__close-btn`);

//Закрытие попапа, по клику по кнопке закрытия
const closePopup = () => {
  popUpElement.classList.add('visually-hidden');
  buttonPopupClose.removeEventListener('click', closePopup);
  document.removeEventListener('keydown', closePopupOnEsc);
};

//Закрытие попапа по нажатию на клавишу Esc
const closePopupOnEsc = (evt) => {
  isEscapeEvent(evt, closePopup);
};

//Открытие попапа, c подробной информацией о фильме, по клику на постер
const openPopup = () => {
  popUpElement.classList.remove('visually-hidden');
  buttonPopupClose.addEventListener('click', closePopup);
  document.addEventListener('keydown', closePopupOnEsc);
};

//Добавляем вотчер клика по постеру в карточке, для открытия попапа
moviePosters.forEach((elem) => {
  elem.addEventListener('click', openPopup);
});

