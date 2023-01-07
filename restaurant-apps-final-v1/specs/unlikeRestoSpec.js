import RestaurantIDB from "../src/scripts/data/RestaurantIDB";
import * as TestFactories from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unlike a Restaurant", () => {
  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addLikeButtonContainer();
    await RestaurantIDB.putRestaurant({ id: 1 });
  });

  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await RestaurantIDB.deleteRestaurant(1);
  });

  it("should display unlike widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked restaurant from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event("click"));

    expect(await RestaurantIDB.getAllRestaurants()).toEqual([]);
  });

  it("should not throw error if the unliked restaurant is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await RestaurantIDB.deleteRestaurant(1);

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event("click"));

    expect(await RestaurantIDB.getAllRestaurants()).toEqual([]);
  });
});
