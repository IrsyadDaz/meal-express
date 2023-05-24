import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="loader-container" id="loader-container">
        <div id="loader"></div>
      </div>
      <div class="content">
        <h2 class="content__heading">Explore many restaurants</h2>
        <div id="list" class="list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.homePages();
    const restaurantContainer = document.querySelector('#list');

    restaurants.restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';
  },
};

export default Home;
