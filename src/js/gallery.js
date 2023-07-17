import { UnsplashAPI } from './unsplash-api';
import { CardHelper } from './image_template';

const searchFormEl = document.querySelector('.js-search-form');
const inputEl = searchFormEl.firstElementChild;
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashInstance = new UnsplashAPI();
const cardHelperInstance = new CardHelper();
const doSearchAndLoad = event => {
  event.preventDefault();
  loadMoreBtnEl.style.display = "none"
  const searchQuery = inputEl.value.trim();
  if (!searchQuery) {
    return;
  }
  if (unsplashInstance.q !== searchQuery) {
    galleryListEl.innerHTML = ""
    unsplashInstance.page = 1;
  }
  unsplashInstance.q = searchQuery;
  unsplashInstance
    .fetchPhotos()
    .then(data => {
      console.log(data);
      if (!data.hits.length) {
        return console.log('ничего не найдено');
      }
      galleryListEl.innerHTML += cardHelperInstance.generatePhotoCard(data.hits);
      if (data.totalHits / unsplashInstance.itemsPerPage < unsplashInstance.page) {
        return console.log('вы уже все посмотрели');
      }
      loadMoreBtnEl.style.display = "block"
    })
    .catch(console.warn);
};

const handleSearchFormLoadMore = event => {
  unsplashInstance.page += 1
  doSearchAndLoad(event)
};

searchFormEl.addEventListener('submit', doSearchAndLoad);
loadMoreBtnEl.addEventListener('click', handleSearchFormLoadMore);

// https://pixabay.com/api/?key=38292476-2e9a08398af0b2923a0e3887f&q=yellow+flowers&image_type=photo&pretty=true
// https://pixabay.com/api/?key=38292476-2e9a08398af0b2923a0e3887f?g=я&page1&per_page=12&client_id38292476-2e9a08398af0b2923a0e3887f
