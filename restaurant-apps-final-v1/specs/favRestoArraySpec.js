/* eslint-disable no-undef */
import { itActsFavoriteRestaurantModel } from "./contract/favRestoContract";

let favRestaurant = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
    // eslint-disable-next-line eqeqeq
    return favRestaurant.find((restaurant) => restaurant.id == id);
  },

  getAllRestaurants() {
    return favRestaurant;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty("id")) {
      return;
    }
    if (this.getRestaurant(restaurant.id)) {
      return;
    }
    favRestaurant.push(restaurant);
  },

  deleteRestaurant(id) {
    // eslint-disable-next-line eqeqeq
    favRestaurant = favRestaurant.filter((restaurant) => restaurant.id != id);
  },
};

describe("Favorite Restaurants Array Contract Test Implementation", () => {
  afterEach(() => (favRestaurant = []));

  itActsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
