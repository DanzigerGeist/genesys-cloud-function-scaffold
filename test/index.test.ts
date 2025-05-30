import type { CloudFunctionRequest } from "../src/types/CloudFunctionRequest.ts";
import type { Context } from "aws-lambda";
import { handler } from "../src/mod.ts";
import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";

describe("handler", () => {
  it("returns the original request and context", async () => {
    const request: CloudFunctionRequest = {
      stringValue: "exampleString",
      numericValue: 123,
      booleanValue: true,
    };

    const context: Context = {
      callbackWaitsForEmptyEventLoop: false,
      functionName: "testFunction",
      functionVersion: "1",
      invokedFunctionArn: "arn:aws:lambda:us-east-1:123456789012:function:testFunction",
      memoryLimitInMB: "128",
      awsRequestId: "abc-123",
      logGroupName: "/aws/lambda/testFunction",
      logStreamName: "2023/01/01/[$LATEST]abcdef123456",
      getRemainingTimeInMillis: () => 3000,
      done: () => {},
      fail: () => {},
      succeed: function (_messageOrObject: unknown): void {
        throw new Error("Function not implemented.");
      },
    };

    const result = await handler(request, context, () => {});

    assertEquals(result, {
      requestReceived: request,
      contextReceived: context,
    });
  });
});
