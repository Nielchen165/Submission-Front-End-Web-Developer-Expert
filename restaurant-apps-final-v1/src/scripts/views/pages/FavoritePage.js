import RestaurantDataIDB from "../../data/RestaurantIDB";
import cardComponent from "../templates/CardComponent";

const FavoritePage = {
  async render() {
    return `
        <div class="card-container card-container-favorite"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDataIDB.getAllRestaurants();
    const restaurantList = document.querySelector(".card-container");

    if (restaurants.length === 0) {
      restaurantList.innerHTML = "Tidak ada Restaurant Favorite";
    }

    restaurants.forEach((item) => {
      console.log(item);
      restaurantList.insertAdjacentHTML("beforeend", cardComponent(item));
    });
  },
};

export default FavoritePage;
