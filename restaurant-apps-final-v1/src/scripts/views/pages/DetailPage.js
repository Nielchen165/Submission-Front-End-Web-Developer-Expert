import RestaurantData from "../../data/RestaurantData";
import UrlParser from "../../routes/UrlParser";
import LikeButtonInitiator from "../../utils/LikeButtonInitiator";
import detailComponent from "../templates/DetailComponent";
import RestaurantIDB from "../../data/RestaurantIDB";

const DetailPage = {
  async render() {
    return `
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantData.detailRestaurantData(url.id);
    const container = document.getElementById("content");
    container.innerHTML = detailComponent(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
      favoriteRestaurant: RestaurantIDB,
    });
  },
};

export default DetailPage;
