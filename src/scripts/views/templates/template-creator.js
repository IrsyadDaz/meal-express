import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p><i class="fa-solid fa-star" style="color: #ffffff;"></i><span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <p>${restaurant.name}</p>
    <p>${restaurant.address}</p>
    <p>${restaurant.city} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
    <h4>Foods :</h4>
    <p>${restaurant.menus.foods.reduce((show, value) => show.concat(`<li><i class="fa-solid fa-bowl-food" style="color: #000000;"></i> ${value.name} </li>`), '')}</p>
    <h4>Drinks :</h4>
    ${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li><i class="fa-solid fa-martini-glass" style="color: #000000;"></i> ${value.name} </li>`), '')}
  </div>
  <div class="restaurant__review"> 
    ${restaurant.customerReviews.reduce((show, value) => show.concat(`
      <p>----------</p>
      <p>${value.name}</p>
      <p>${value.review}</p>
      <p>${value.date}</p>
      

      `), '')}
      <p>----------</p>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
