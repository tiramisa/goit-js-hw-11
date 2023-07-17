import { UnsplashAPI } from './unsplash-api';
// import createGalleryCards from '../templates/gallery-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const inputEl = searchFormEl.firstElementChild;
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashInstance = new UnsplashAPI();
const handleSearchFormSubmit = event => {
  event.preventDefault();
  const searchQuery = inputEl.value.trim();
  if (!searchQuery) {
    return;
  }
  unsplashInstance.q = searchQuery;
  unsplashInstance
    .fetchPhotos()
    .then(data => {
      console.log(data);
      if (!data.results.length) {
        return console.log('ничего не найдено');
      }
      galleryListEl.innerHTML = createGalleryCards(data.results);
    })
    .catch(console.warn);
};
searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// https://pixabay.com/api/?key=38292476-2e9a08398af0b2923a0e3887f&q=yellow+flowers&image_type=photo&pretty=true
// https://pixabay.com/api/?key=38292476-2e9a08398af0b2923a0e3887f?g=я&page1&per_page=12&client_id38292476-2e9a08398af0b2923a0e3887f
