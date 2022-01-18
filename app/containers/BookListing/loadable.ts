/**
 *
 * Asynchronously loads the component for BookListing
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
