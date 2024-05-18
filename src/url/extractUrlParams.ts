/**
 * Extracts query parameters from a URL.
 *
 * @param url - URL string to process.
 * @returns An object containing query parameters as key-value pairs.
 */
export function extractUrlParams(url: string): Record<string, string> {
  const params: Record<string, string> = {};
  const queryString = url.split('?')[1];

  if (queryString) {
    const pairs = queryString.split('&');
    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      if (key) {
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
      }
    }
  }

  return params;
}
