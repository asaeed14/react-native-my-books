/**
 *
 * Saga for BookListing
 *
 */

import { takeEvery, call, put } from 'redux-saga/effects';

import { BookListingAPIResponse, FetchProps } from './types';
import { actions } from './slice';
import * as api from './api';

export const fetchSaga = function* fetch(action: FetchProps) {
  try {
    const resp: BookListingAPIResponse = yield call(api.fetch, action.payload);
    yield put(actions.fetchSuccess({ key: action.payload.key, ...resp }));
  } catch (error: any) {
    yield put(
      actions.fetchFailure({
        key: action.payload.key,
        message: error.error.msg,
      }),
    );
  }
};

export default function* bookListingSaga() {
  yield takeEvery(actions.fetch.type, fetchSaga);
}
