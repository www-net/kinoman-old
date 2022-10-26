import { createUserProfileTemplate } from './components/profile';
import { createNavigationTemplate } from './components/navigation';
import { createFiltersTemplate } from './components/filters';
import { createMovieListTemplate } from './components/movie-list';
import { createMovieCardMarkup } from './components/movie-list';
import { createButtonTemplate } from './components/load-more-btn';
import { createMovieListExtraTemplate } from './components/movie-list-extra';
import { createStatisticTemplate } from './components/statistics';
import { createPopupTemplate, generatePopupCard } from './components/movie-popup';

import { generateMovieCards } from './mock/movie-card';
import { generateNavigationItems } from "./mock/navigation";

const MOVIE_COUNT = 20;
const START_MOVIE_COUNT = 5;
const MOVIE_EXTRA_COUNT = 2;

//Шапка сайта
const headerElement = document.querySelector(`.header`);
//Основной блок страницы
const mainElement = document.querySelector(`.main`);
//Подвал сайта
const footerElement = document.querySelector(`.footer`);
//Раздел для отображения статистики
const footerStatisticsElement = footerElement.querySelector(`.footer__statistics`);

//Данные для генерации навигации
const navigationItems = generateNavigationItems();

//Функция для рендеринга компонентов
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

//Рендер аватара и звания пользователя
render(headerElement, createUserProfileTemplate());

//Рендер меню и фильтров
render(mainElement, createNavigationTemplate(navigationItems));
render(mainElement, createFiltersTemplate());

//Рендер блока для списков фильмов
render(mainElement, createMovieListTemplate());

//Общий контейнер для списков фильмов. Объявляем здесь, так как соответствующий элемент только что отрисовался
const movieListContainer = mainElement.querySelector(`.films`);

//Элемент в который будем вставлять карточки фильмов. Основной список
const movieListElement = movieListContainer.querySelector(`.films-list__container`);

//Данные для генерации видеокарточек
const movieCards = generateMovieCards(MOVIE_COUNT);

//Данные для генерации попапа
const popupCard = generatePopupCard();

//Функция рендеринга карточек в списки фильмов
const renderMovieList = (container, count) => {
  movieCards.slice(0, count)
  .forEach((movie) => {
    render(container, createMovieCardMarkup(movie));
  })
};

//Рендер карточек в основной список фильмов
renderMovieList(movieListElement, START_MOVIE_COUNT);

//Рендер кннопки "Show more"
render(movieListElement, createButtonTemplate(), `afterend`);

//Рендер дополнительных списков фильмов
render(movieListContainer, createMovieListExtraTemplate(`Top rated`));
render(movieListContainer, createMovieListExtraTemplate(`Most commented`));

//Дополнительные списки фильмов
const movieTopRatedElement = movieListContainer.querySelector(`.films-list--extra .films-list__container`);
const movieMostСommentedElement = movieListContainer.querySelector(`.films-list--extra:nth-child(3) .films-list__container`);

//Рендер карточек в дополнительные списки фильмов
renderMovieList(movieTopRatedElement, MOVIE_EXTRA_COUNT);
renderMovieList(movieMostСommentedElement, MOVIE_EXTRA_COUNT);

//Рендер статистике в подвале
render(footerStatisticsElement, createStatisticTemplate());

//Рендер попапа
render(footerElement, createPopupTemplate(popupCard), `afterend`);

//Попап
const popUpElement = document.querySelector(`.film-details`);

//Делаем попап визуально скрытым
popUpElement.classList.add(`visually-hidden`);

//Постеры фильмов в карточке
const moviePosters = movieListContainer.querySelectorAll(`.film-card__poster`);

//Кнопка закрытия попапа
const buttonPopupClose = popUpElement.querySelector(`.film-details__close-btn`);

//Функция закрытия попапа, по клику по кнопке закрытия
const closePopup = () => {
  popUpElement.classList.add('visually-hidden');
  buttonPopupClose.removeEventListener('click', closePopup);
};

//Функция открытия попапа, c подробной информацией о фильме, по клику на постер
function openPopup() {
  popUpElement.classList.remove('visually-hidden');
  buttonPopupClose.addEventListener('click', closePopup);
};


//Добавляем вотчер клика по постеру в карточке, для открытия попапа
moviePosters.forEach((elem) => {
  elem.addEventListener('click', openPopup);
});

