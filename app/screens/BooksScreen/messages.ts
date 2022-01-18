/*
 * BooksScreen Messages
 *
 * This contains all the text for the BooksScreen component.
 *
 */

import { defineMessages } from 'react-intl';
const scope = 'app.screens.BooksScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'My Books',
  },
  authorNameLabel: {
    id: `${scope}.title`,
    defaultMessage: 'Author : {authorName}',
  },
  publishedDateLabel: {
    id: `${scope}.title`,
    defaultMessage: 'Published on : {publishedDate}',
  },
});
