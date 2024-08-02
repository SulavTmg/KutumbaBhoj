export interface FetchOptions {
  method?: string;
  headers?: { [key: string]: string };
  body?: BodyInit | null | undefined | FormData;
}

export interface FetchResponse<T> {
  data?: T;
  error?: { message: string };
}