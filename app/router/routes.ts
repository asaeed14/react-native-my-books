import SampleScreen from 'screens/SampleScreen';

import routeConfigs from './routeConfigs';
import * as routeNames from './routeNames';

const routes = {
  [routeNames.SAMPLE]: {
    ...routeConfigs[routeNames.SAMPLE],
    screen: SampleScreen,
  },
};

export default routes;
