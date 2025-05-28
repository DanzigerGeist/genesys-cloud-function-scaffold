/**
 * Represents the input payload for a Genesys Cloud Function.
 *
 * This type defines the structure of the request received by the function.
 * Each field includes an example value to illustrate expected formats.
 *
 * @example
 * ```ts
 * {
 *   stringValue: "exampleString",
 *   numericValue: 123,
 *   booleanValue: true
 * }
 * ```
 */
export type CloudFunctionRequest = {
  /** A string value (e.g., "exampleString"). */
  readonly stringValue: string;

  /** A number value (e.g., 123). */
  readonly numericValue: number;

  /** A boolean flag (e.g., true). */
  readonly booleanValue: boolean;
};
