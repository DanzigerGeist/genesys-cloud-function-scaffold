import type { Handler } from "aws-lambda";
import type { CloudFunctionRequest, CloudFunctionResponse } from "./mod.ts";

/**
 * A Genesys Cloud Function handler.
 *
 * This is the entry point for a Genesys-managed AWS Lambda function. It accepts a request payload
 * of type {@link CloudFunctionRequest} and returns a response of type {@link CloudFunctionResponse}.
 *
 * Internally, it conforms to the standard AWS Lambda {@link Handler} type from `aws-lambda`.
 *
 * @example
 * const handler: CloudFunctionHandler = async (event, context) => {
 *   return {
 *     requestReceived: event,
 *     contextReceived: {
 *       userId: context.userId,
 *       sessionId: context.sessionId
 *     }
 *   };
 * };
 */
export type CloudFunctionHandler = Handler<CloudFunctionRequest, CloudFunctionResponse>;
