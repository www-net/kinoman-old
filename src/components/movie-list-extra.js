// Отрисовка дополнительных контейнеров для списков фильмов: «Top rated» и «Most commented»
const createMovieListExtraTemplate = (text) => {
  return (
    `<section class="films-list--extra">
            <h2 class="films-list__title">${text}</h2>
            <div class="films-list__container"></div>
        </section>`
  );
};

export { createMovieListExtraTemplate };
