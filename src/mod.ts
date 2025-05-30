import type { CloudFunctionHandler } from "./types/mod.ts";

/**
 * Genesys Cloud Function handler.
 *
 * This function is the entry point for the cloud function. It receives a typed request payload
 * and context metadata from the Genesys-managed AWS Lambda runtime. The response echoes both
 * for demonstration and validation purposes.
 *
 * @param request - The input payload of the function (e.g., {@link CloudFunctionRequest}).
 * @param context - The AWS Lambda execution context.
 *
 * @returns A promise that resolves to an object containing the original request and context.
 *
 * @example
 * ```ts
 * const response = await handler({
 *   stringValue: "exampleString",
 *   numericValue: 123,
 *   booleanValue: true
 * }, context);
 * ```
 */
export const handler: CloudFunctionHandler = (request, context) => {
  return Promise.resolve({
    requestReceived: request,
    contextReceived: context,
  });
};
