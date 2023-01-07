/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import API_ENDPOINT from "../../globals/ApiEndpoint";

const DetailComponent = (restaurant) => `
  <section class="detail">
  <div class="main">
    <div class="detail_image">
      <img src="${API_ENDPOINT.RESTAURANT_IMAGE}${restaurant.pictureId}" alt="${
  restaurant.name
}">
    </div>
    <div class="detail_text">
      <div class="wrapper"> 
        <h3>${restaurant.name}</h3>
        <h3 style="font-size: 20px; color: #fff;"> Rating : &#9733; ${
          restaurant.rating
        }</h3>
        <h3 style="font-size: 18px; color: #fff; text-transform: none;">Alamat : ${
          restaurant.address
        } ${restaurant.city}</h3>
      </div>
      <p class="detail_desc">${restaurant.description}</p>
    </div>  
    <div class="exist_menus">
      <div class="detail_food">
      <h2>Food</h2>
      <ul class="food_list">
        ${restaurant.menus.foods
          .map(
            (food) => `
          <li>${food.name}</li>
        `
          )
          .join("")}
      </ul>
      </div> 
      <div class="detail_drink">
      <h2>Drink</h2>
      <ul class="drink_list">
        ${restaurant.menus.drinks
          .map(
            (drink) => `
          <li>${drink.name}</li>
        `
          )
          .join("")}
      </ul>
    </div> 
  </div>
  <div class="reviews">
  <h2>Review</h2>
  <div class="review_list">
    ${restaurant.customerReviews
      .map(
        (review) => `
      <div class="review_item">
        <p class="review_item_user">${review.name}</p>
        <p class="review_item_text">${review.review}</p>
        <p class="review_item_date">${review.date}</p>
      </div>`
      )
      .join("")}
  </div>
</div>
</div>
<div id="likeButtonContainer"></div>
</section>
`;

export default DetailComponent;
