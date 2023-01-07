/* eslint-disable max-len */
import API_ENDPOINT from '../../globals/ApiEndpoint';

const CardComponent = (cardItem) => `
  <div class="content_item" tabindex="0">
  <img class="lazyload content_img" data-src="${API_ENDPOINT.RESTAURANT_IMAGE + cardItem.pictureId}" alt="restaurant food">
  <div class="content_body">
    <h1 class="content_title">${cardItem.name}</h1>
    <p class="content_rating">&#9733; ${cardItem.rating}</p>
    <p class="content_desc">${cardItem.description.substring(0, 120)}...</p>
    <a class="content_button" href="#/detail/${cardItem.id}">Lihat</a>
  </div>
  </div>
`;

export default CardComponent;
