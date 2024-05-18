/**
 * Retrieve domain from email
 * @param {string} email
 * @return {string}
 * */
export function getDomainFromEmail(email: string): string | null {
  return email.split('@')[1] ?? '';
}
