import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Explore your favorite restaurants</h2>
        <div id="list" class="list">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#list');
    if (restaurants.length){
      restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    } else {
      restaurantContainer.innerHTML =`
        <div class="restaurant-item__not__found">Tidak ada restoran untuk ditampilkan</div>
      `;
    }
  },
};

export default Like;
