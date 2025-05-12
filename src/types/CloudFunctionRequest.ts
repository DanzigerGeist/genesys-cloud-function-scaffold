/**
 * Represents a request to a Genesys Cloud Function with example values.
 *
 * @example
 * {
 *   stringValue: "exampleString",
 *   numericValue: 123,
 *   booleanValue: true
 * }
 *
 * @property stringValue - A string value included in the request (e.g., "exampleString").
 * @property numericValue - A numeric value included in the request (e.g., 123).
 * @property booleanValue - A boolean value included in the request (e.g., true).
 */
export type CloudFunctionRequest = Readonly<{
  stringValue: string;
  numericValue: number;
  booleanValue: boolean;
}>;
