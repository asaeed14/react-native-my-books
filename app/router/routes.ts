import BooksScreen from 'screens/BooksScreen';

import routeConfigs from './routeConfigs';
import * as routeNames from './routeNames';

const routes = {
  [routeNames.BOOKS]: {
    ...routeConfigs[routeNames.BOOKS],
    screen: BooksScreen,
  },
};

export default routes;
