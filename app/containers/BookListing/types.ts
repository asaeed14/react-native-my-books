export interface UseBookListingProps {
  city?: string;
}

export interface BookListingProps extends UseBookListingProps {
  children: (props: any) => any;
}

export interface StateItem {
  fetching: boolean;
  error: boolean;
  message: string;
  data: ResponsePayload['data'];
}

export interface State {
  [key: string]: StateItem;
}

export interface FetchProps {
  type: string;
  payload: FetchPropsPayload;
}

export interface FetchPropsPayload extends UseBookListingProps {
  key: string;
}

export interface BookListingAPIResponse {
  data?: BookListItem[];
}

export interface BookListItem {
  id: number;
  title: string;
  pageCount: number;
  publishDate: string | null;
  coverImage: string;
  shortDescription: string | null;
  longDescription: string | null;
  author: string | null;
}

export interface ResponsePayload extends BookListingAPIResponse {
  key: string;
}

export interface FailureResponsePayload {
  key: string;
  message: string;
}
