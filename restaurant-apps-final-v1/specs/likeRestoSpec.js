/* eslint-disable no-undef */
import RestaurantIDB from "../src/scripts/data/RestaurantIDB";
import * as TestFactories from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

beforeEach(() => {
  addLikeButtonContainer();
});

describe("Like a Restaurant", () => {
  it("should show the like button when the restaurant has not been like before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the restaurant has not been like before", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to like the restaurant", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const resto = await RestaurantIDB.getRestaurant(1);

    expect(resto).toEqual({ id: 1 });

    RestaurantIDB.deleteRestaurant(1);
  });

  it("should not add a restaurant again when its already liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await RestaurantIDB.putRestaurant({ id: 1 });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await RestaurantIDB.getAllRestaurants()).toEqual([{ id: 1 }]);

    RestaurantIDB.deleteRestaurant(1);
  });

  it("should not add a restaurant when it has no id", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await RestaurantIDB.getAllRestaurants()).toEqual([]);
  });
});
