# Genesys Cloud Function Scaffold with Deno 2.0

This repository provides a scaffold for building Genesys Cloud Functions using **Deno 2.0**. It is fully typed,
testable, and structured to help you develop, document, and package Lambda-based functions for the Genesys Cloud
platform.

---

## 0. What are Genesys Cloud Functions?

Genesys Cloud Functions are custom **AWS Lambda** functions deployed and managed directly within the Genesys Cloud CX
environment.

They are typically used for:

- 🧠 **Custom routing logic** (e.g., geo-based, time-based decisions)
- 🛠️ **Data enrichment** (e.g., lookups from external systems)
- 🔐 **Security checks** (e.g., validate requests before queuing)
- 📤 **3rd-party integrations** (e.g., CRM sync, ticket creation)

These functions are executed in response to specific events within Genesys — such as Architect call flows or interaction
rules — and allow you to bring your own business logic to the platform.

---

## 1. Getting Started

To use this scaffold, ensure you have the following installed:

- [Deno 2.0+](https://deno.land/#installation)
- GNU Make (for task automation)

You can verify installation like this:

```bash
deno --version
make --version
```

> On macOS, if Make is installed as `gmake`, you can alias it or add its path via:
>
> ```fish
> set -Ux PATH /opt/homebrew/opt/make/libexec/gnubin $PATH
> ```

---

## 2. Project Structure

```text
.
├── src/                      # Source code
│   ├── index.ts              # Main handler (entrypoint)
│   └── types/                # Typed request/response definitions
├── test/                     # Unit tests
├── build/                    # Build logic (e.g., esbuild bundler)
├── dist/                     # Build output (created by build step)
├── Makefile                  # Task runner (build/package/etc)
└── README.md
```

---

## 3. Writing a Function

Your Genesys Cloud Function should export a handler like this:

```ts
export const handler: CloudFunctionHandler = async (request, context) => {
  return {
    requestReceived: request,
    contextReceived: context,
  };
};
```

This function receives:

- `request`: your custom JSON payload defined by Genesys Cloud
- `context`: AWS Lambda execution metadata

---

## 4. Build, Document, and Package

You can use the included Makefile to simplify building and packaging, but feel free to use the commands directly.

### Build the Function

```bash
make build
```

This will:

- Clean any previous build
- Run linting, formatting, and tests
- Bundle the function into `dist/index.js` using esbuild

### Generate Docs

```bash
make docs
```

This creates a full HTML documentation site in:

```
dist/docs/
├── index.html
├── script.js
└── style.css
```

### Package for Deployment

```bash
make package
```

This zips the built function and generated docs into:

```
dist/lambda.zip
```

You can then upload this ZIP in the Genesys Cloud admin UI when deploying the function.

---

## 5. Useful Commands

| Command        | Description                             |
| -------------- | --------------------------------------- |
| `make`         | Build, document, and package everything |
| `make build`   | Format, lint, test, and bundle          |
| `make docs`    | Generate HTML docs into `dist/docs/`    |
| `make package` | Bundle `index.js` + `docs` into a ZIP   |
| `make test`    | Run all unit tests                      |
| `make lint`    | Run linter                              |
| `make format`  | Check code formatting                   |
| `make clean`   | Delete the `dist/` directory            |
| `make update`  | Update dependencies via `deno outdated` |

---

## 6. License

This project is licensed under the MIT License. See the `LICENSE` file for details.
