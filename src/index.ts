import { CloudFunctionHandler } from "./types/CloudFunctionHandler.ts";

/**
 * Genesys Cloud Function handler.
 *
 * This function processes incoming requests and returns a response containing
 * the received request and context information.
 *
 * @param request - The incoming request object with example values.
 * @param context - The context object containing metadata about the request.
 *
 * @returns An object containing the received request and context.
 */
// deno-lint-ignore require-await
export const handler: CloudFunctionHandler = async (request, context) => {
  return {
    requestReceived: request,
    contextReceived: context,
  };
};
