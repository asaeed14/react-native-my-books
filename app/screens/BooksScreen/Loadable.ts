/**
 *
 * Asynchronously loads the component for BooksScreen
 *
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
