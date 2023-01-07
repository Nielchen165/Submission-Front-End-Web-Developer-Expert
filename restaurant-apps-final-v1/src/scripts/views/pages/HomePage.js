import RestaurantData from '../../data/RestaurantData';
import cardComponent from '../templates/CardComponent';
import '../../components/jumbotron';

const HomePage = {
  async render() {
    return `
      <jumbotron-element></jumbotron-element>
      <h1 class="card-header" style="font-size: 30px">Jelajahi Restoran</h1>
      <div class="card-container"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantData.getRestaurantData();
    const restaurantList = document.querySelector('.card-container');
    restaurants.forEach((item) => {
      console.log(item.pictureId);
      restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
    });
  },
};

export default HomePage;
