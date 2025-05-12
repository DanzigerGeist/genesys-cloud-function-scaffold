import { assertEquals } from "@std/assert";
import { handler } from "../src/index.ts";
import { CloudFunctionRequest } from "../src/types/CloudFunctionRequest.ts";
import { Context } from "aws-lambda";

Deno.test("handler should return the request and context as part of the response", async () => {
  const mockRequest: CloudFunctionRequest = {
    stringValue: "exampleString",
    numericValue: 123,
    booleanValue: true,
  };

  const mockContext: Context = {
    callbackWaitsForEmptyEventLoop: false,
    functionName: "",
    functionVersion: "",
    invokedFunctionArn: "",
    memoryLimitInMB: "",
    awsRequestId: "",
    logGroupName: "",
    logStreamName: "",
    getRemainingTimeInMillis: function (): number {
      throw new Error("Function not implemented.");
    },
    done: function (): void {
      throw new Error("Function not implemented.");
    },
    fail: function (): void {
      throw new Error("Function not implemented.");
    },
    succeed: function (): void {
      throw new Error("Function not implemented.");
    },
  };

  const response = await handler(mockRequest, mockContext, () => {});

  assertEquals(response, {
    requestReceived: mockRequest,
    contextReceived: mockContext,
  });
});
