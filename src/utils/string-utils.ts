import queryString from 'query-string';

import { GenericObject } from "../types/common";

export const urlStringify = (url: string, query: GenericObject = {}): string =>
  queryString.stringifyUrl(
    {
      url,
      query,
    },
    { skipEmptyString: true, skipNull: true },
  );

export const truncateString = (str: string, caracters: number) => {
  if (str.length > caracters) {
    return str.slice(0, caracters) + "...";
  }
  return str;
}
