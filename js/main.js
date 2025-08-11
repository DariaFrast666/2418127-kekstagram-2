import { getData } from './api.js';
import { renderPhotos, clearPhotos } from './pictures.js';
import { initFilters } from './filters.js';


import './form.js';
import './image-effects.js';


const imgFilters = document.querySelector('.img-filters');


const showDataErrorMessage = () => {
  const template = document.querySelector('#data-error').content.querySelector('.data-error');
  const errorElement = template.cloneNode(true);
  document.body.appendChild(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, 5000);
};


getData()
  .then((photos) => {
    renderPhotos(photos);
    imgFilters.classList.remove('img-filters--inactive');
    initFilters(photos, (updatedPhotos) => {
      clearPhotos();
      renderPhotos(updatedPhotos);
    });
  })
  .catch(showDataErrorMessage);
