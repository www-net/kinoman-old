//Создание фильтра
const createFilterItem = (filters, isChecked) => {
const {sortName} = filters;

  return (
    `<li><a href="#" class="sort__button sort__button--active">${sortName}</a></li>`
  )
}


// Орисовка списка фильтров
const createFiltersTemplate = () => {
  return (
    `<ul class="sort">
            <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
            <li><a href="#" class="sort__button">Sort by date</a></li>
            <li><a href="#" class="sort__button">Sort by rating</a></li>
        </ul>`
  );
};

export { createFiltersTemplate };
