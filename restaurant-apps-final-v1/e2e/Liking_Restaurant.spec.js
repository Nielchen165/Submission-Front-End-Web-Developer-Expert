const assert = require("assert");

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("Showing Empty Liked Restaurant", ({ I }) => {
  I.seeElement(".card-container");
  I.see("Tidak ada Restaurant Favorite", ".card-container");
});

Scenario("Liking One Restaurant", async ({ I }) => {
  I.see("Tidak ada Restaurant Favorite", ".card-container");

  I.amOnPage("/");
  I.waitForElement(".content_body a", 10);
  I.seeElement(".content_body a");

  const firstResto = locate(".content_button").first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement("#likeButton", 10);
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".content_item");
  const favRestoTitle = await I.grabTextFrom(".content_button");

  assert.strictEqual(firstRestoTitle, favRestoTitle);
});

Scenario("Unliking One Restaurant", async ({ I }) => {
  I.amOnPage("/");
  I.waitForElement(".content_body a", 10);
  I.seeElement(".content_body a");

  const firstResto = locate(".content_button").first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement("#likeButton", 10);
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".content_item");
  const favRestoTitle = await I.grabTextFrom(".content_button");

  assert.strictEqual(firstRestoTitle, favRestoTitle);

  I.click(favRestoTitle);
  I.waitForElement("#likeButton", 10);
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.dontSeeElement(".content_item");
  I.see("Tidak ada Restaurant Favorite", ".card-container");
});
