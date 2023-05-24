import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurant, restaurant }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurant = restaurant;
    this.favoriteRestaurant = favoriteRestaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this.restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this.favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this.likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.favoriteRestaurant.putRestaurant(this.restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this.likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.favoriteRestaurant.deleteRestaurant(this.restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
