/* eslint-disable no-param-reassign */
/*
 * LanguageProvider Slice
 *
 * Here we define:
 * - The shape of our container's slice of Redux store,
 * - All the actions which can be triggered for this slice, including their effects on the store.
 *
 * Note that, while we are using dot notation in our reducer, we are not actually mutating the state
 * manually. Under the hood, we use immer to apply these updates to a new copy of the state.
 * Please see https://immerjs.github.io/immer/docs/introduction for more information.
 *
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_LOCALE } from 'locales';
import { State, ChangeResponsePayload } from './types';

// The initial state of the LanguageProvider
export const initialState = {
  locale: DEFAULT_LOCALE,
} as State;

const languageProviderSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLocale(
      state: State,
      action: PayloadAction<ChangeResponsePayload>,
    ): void {
      state.locale = action.payload.locale;
    },
  },
});

export const { changeLocale } = languageProviderSlice.actions;

export const { reducer } = languageProviderSlice;
