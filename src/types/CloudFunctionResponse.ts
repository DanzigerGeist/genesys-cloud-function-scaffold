import { Context } from "aws-lambda";
import { CloudFunctionRequest } from "./CloudFunctionRequest.ts";

/**
 * Represents the response from a Genesys Cloud Function with example values.
 *
 * @example
 * {
 *   requestReceived: {
 *     stringValue: "exampleString",
 *     numericValue: 123,
 *     booleanValue: true
 *   },
 *   contextReceived: {
 *     userId: "user-123",
 *     sessionId: "session-456"
 *   }
 * }
 *
 * @property requestReceived - The original request received by the cloud function.
 * @property contextReceived - The context information associated with the request.
 */
export type CloudFunctionResponse = Readonly<{
  requestReceived: CloudFunctionRequest;
  contextReceived: Context;
}>;
