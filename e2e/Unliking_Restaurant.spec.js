const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/Like');
});

Scenario('removing one favorite restaurant', async ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

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
  I.amOnPage('/#/Like');
  I.seeElement('.restaurant-item a');

  const firstFavoriteRestaurant = locate('.restaurant__name a').first();
  I.click(firstFavoriteRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/Like');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});
