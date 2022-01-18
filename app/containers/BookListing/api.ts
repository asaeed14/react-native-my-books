/**
 *
 * API for BookListing
 *
 */

import service from 'services/myBookService';
import { BookListingAPIResponse, FetchPropsPayload } from './types';

export async function fetch(
  _payload: FetchPropsPayload,
): Promise<BookListingAPIResponse | Error> {
  const resp = await service({
    method: 'GET',
    url: `/books.json?key=38eccce0`,
  });

  return {
    data: resp,
  };
}
