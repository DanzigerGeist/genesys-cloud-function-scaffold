# Genesys Cloud Function Scaffold with Deno 2.0

This repository is an educational scaffold for building Genesys Cloud Functions using **Deno 2.0**. It demonstrates how
to structure, build, and package a function for deployment.

## 0. What are Genesys Cloud Functions?

Genesys Cloud Functions are AWS Lambda functions that are provisioned and managed through the Genesys Cloud platform.
They allow developers to extend Genesys Cloud capabilities by executing custom logic in response to events or API calls.

## 1. Setting Up

To use this scaffold, you need to install **Deno 2.0**:

1. Install Deno by following the instructions at [deno.land](https://deno.land/#installation).
2. Verify the installation:
   ```bash
   deno --version
   ```

## 2. What is a Handler Function?

A handler function is the entry point for a Genesys Cloud Function. It processes incoming requests and returns a
response. The handler function in this scaffold is defined as:

```typescript
export const handler: CloudFunctionHandler = async (request, context) => {
  return {
    requestReceived: request,
    contextReceived: context,
  };
};
```

- **`request`**: Contains the data sent to the function.
- **`context`**: Provides metadata about the execution environment (e.g., user ID, session ID).

## 3. Request and Response Types

This scaffold uses example types to define the structure of requests and responses. These types are for demonstration
purposes and can be customized as needed.

### Request Type

The `CloudFunctionRequest` type represents the incoming request:

```typescript
export type CloudFunctionRequest = Readonly<{
  stringValue: string; // Example: "exampleString"
  numericValue: number; // Example: 123
  booleanValue: boolean; // Example: true
}>;
```

### Response Type

The `CloudFunctionResponse` type represents the outgoing response:

```typescript
export type CloudFunctionResponse = Readonly<{
  requestReceived: CloudFunctionRequest;
  contextReceived: Context;
}>;
```

## 4. Building and Packaging

This scaffold uses Deno tasks to simplify building and packaging. The tasks are defined in `deno.json` and can be
executed using the `deno task` command.

### Build the Application

Run the following command to build the application:

```bash
deno task build
```

This will bundle the application into `dist/index.js`.

### Package the Application

Run the following command to package the application:

```bash
deno task package
```

This will create a distributable ZIP file at `dist/lambda.zip`.

## 5. Other Available Tasks

The following tasks are defined in `deno.json`:

| Task         | Description                                   |
| ------------ | --------------------------------------------- |
| `build`      | Build the target files.                       |
| `package`    | Build the distributable ZIP.                  |
| `clean`      | Clean the build folder.                       |
| `check:all`  | Run all code tests and checks.                |
| `check:docs` | Check the documentation.                      |
| `check:fmt`  | Check the code formatting.                    |
| `check:lint` | Run the linter.                               |
| `check:test` | Run unit tests.                               |
| `update`     | Update dependencies to their latest versions. |

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
