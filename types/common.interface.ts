import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

export type FetchNextPageType<T> = (
  options?: FetchNextPageOptions | undefined,
) => Promise<InfiniteQueryObserverResult<T, unknown>>;
