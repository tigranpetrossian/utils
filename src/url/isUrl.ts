/**
 * Determine if given string is valid URL
 *
 * @return boolean
 * */
export function isUrl(input: string): boolean {
  try {
    new URL(input);
    return true;
  } catch {
    return false;
  }
}
