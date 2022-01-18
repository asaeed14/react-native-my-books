import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the BookListing state domain
 */

const selectBookListingDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by BookListing
 */

const makeSelectBookListing = () =>
  createSelector(selectBookListingDomain, (subState) => subState);

/**
 * Other specific selectors
 */

const selectBookListingByKey = (key: string) =>
  createSelector(makeSelectBookListing(), (state) => state[key]);

export default makeSelectBookListing;
export { selectBookListingDomain, selectBookListingByKey };
