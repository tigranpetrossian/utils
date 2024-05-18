/**
 * Remove query paramaters from a given string
 *
 * @param url - URL string to process.
 * @returns URL string without query parameters.
 * */
export function stripUrlParams(url: string): string {
  return url.split('?')[0];
}
