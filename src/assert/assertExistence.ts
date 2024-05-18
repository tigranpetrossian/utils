/**
 * Assert that a value is neither null nor undefined.
 *
 * @param value - The value to assert.
 * @param message - The error message to throw if the assertion fails.
 * @throws Will throw an error if the value is null or undefined.
 */
export function assertExistence<T>(value: T, message: string): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error(message);
  }
}
