import RestaurantIDB from "../../src/scripts/data/RestaurantIDB";
import LikeButtonInitiator from "../../src/scripts/utils/LikeButtonInitiator";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestaurant: RestaurantIDB,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
