/**
 * Delay the execution for a specified duration.
 * @param {number} ms - The number of milliseconds to wait before resolving the promise.
 */
export const wait = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
