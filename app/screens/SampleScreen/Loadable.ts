/**
 *
 * Asynchronously loads the component for SampleScreen
 *
 */

import loadable from 'utils/Loadable';

export default loadable(() => import('./index'));
