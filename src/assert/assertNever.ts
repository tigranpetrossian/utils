/**
 * Assert that a value is never expected to occur.
 *
 * @param value - The value that should never occur.
 * @param message - The error message to throw if the value occurs (default: `Unexpected object: ${value}`).
 * @throws Will throw an error if called.
 */
export function assertNever(value: never, message = `Unexpected object: ${value}`): never {
  throw new Error(message);
}
