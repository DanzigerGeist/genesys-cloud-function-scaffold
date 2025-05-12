import { Handler } from "aws-lambda";
import { CloudFunctionRequest } from "./CloudFunctionRequest.ts";
import { CloudFunctionResponse } from "./CloudFunctionResponse.ts";

/**
 * Defines the handler for a Genesys Cloud Function.
 *
 * This handler processes a request of type `CloudFunctionRequest` and returns a response of type `CloudFunctionResponse`.
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
