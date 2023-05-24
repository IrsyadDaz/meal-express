const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/Like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('You have not added any restaurant yet', '.restaurant-item__not__found');
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.see('You have not added any restaurant yet', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.wait(2) // wait for loader
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/Like');
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});