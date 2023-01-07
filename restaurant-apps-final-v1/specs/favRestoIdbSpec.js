/* eslint-disable no-undef */
import RestaurantIDB from "../src/scripts/data/RestaurantIDB";
import { itActsFavoriteRestaurantModel } from "./contract/favRestoContract";

describe("Favorite Restaurant Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await RestaurantIDB.getAllRestaurants()).forEach(async (restaurant) => {
      await RestaurantIDB.deleteRestaurant(restaurant.id);
    });
  });
  itActsFavoriteRestaurantModel(RestaurantIDB);
});
