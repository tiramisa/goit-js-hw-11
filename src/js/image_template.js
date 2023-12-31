export class CardHelper {
  generatePhotoCard(data) {
    return `<ul class="photo-grid">
      ${data
        .map(
          ({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
          }) =>
            `<li>
              <a href="${largeImageURL}" class="photo-link">
                <div class="photo-card">
                  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                  <div class="info">
                    <p class="info-item">
                      <b>Likes:</b> ${likes}
                    </p>
                    <p class="info-item">
                      <b>Views:</b> ${views}
                    </p>
                    <p class="info-item">
                      <b>Comments:</b> ${comments}
                    </p>
                    <p class="info-item">
                      <b>Downloads:</b> ${downloads}
                    </p>
                  </div>
                </div>
              </a>
            </li>`
        )
        .join('')}
    </ul>`;
  }
}
