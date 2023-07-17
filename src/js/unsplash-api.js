// const API_KEY = '38292476-2e9a08398af0b2923a0e3887f';
// const BASE_URL = 'https://pixabay.com/api/';

export class UnsplashAPI {
  #API_KEY = '38292476-2e9a08398af0b2923a0e3887f';
  #BASE_URL = 'https://pixabay.com/api/';
  q = null;
  page = 1;
  fetchPhotos() {
    return fetch(
      `${this.#BASE_URL}?key=38292476-2e9a08398af0b2923a0e3887f&q=${
        this.q
      }&page${this.page}&per_page=12&client_id${this.#API_KEY}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
}
