import type { Context } from "aws-lambda";
import type { CloudFunctionRequest } from "./mod.ts";

/**
 * Represents the structured response returned from a Genesys Cloud Function.
 *
 * The function echoes back the original request along with metadata about the
 * Lambda execution environment.
 *
 * @example
 * ```ts
 * {
 *   requestReceived: {
 *     stringValue: "exampleString",
 *     numericValue: 123,
 *     booleanValue: true
 *   },
 *   contextReceived: {
 *     functionName: "exampleLambda",
 *     awsRequestId: "abc-xyz-789"
 *   }
 * }
 * ```
 */
export type CloudFunctionResponse = {
  /** The request object that was passed to the handler. */
  readonly requestReceived: CloudFunctionRequest;

  /** AWS Lambda execution context for this invocation. */
  readonly contextReceived: Context;
};
