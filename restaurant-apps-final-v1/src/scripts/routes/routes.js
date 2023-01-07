import Home from '../views/pages/HomePage';
import Detail from '../views/pages/DetailPage';
import Favorite from '../views/pages/FavoritePage';

const Routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '*': 'NotFound',
};

export default Routes;
