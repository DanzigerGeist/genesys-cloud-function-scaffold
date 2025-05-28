DIST = dist
DOCS_DIR = $(DIST)/docs
BUILD_OUT = $(DIST)/index.js
ZIP = $(DIST)/lambda.zip

.PHONY: all build test lint format docs clean package update help

all: package

build: clean lint format test
	@deno run -A build/build.ts

package: build docs
	@cd $(DIST) && zip -r lambda.zip index.js docs

lint:
	@deno lint

format:
	@deno fmt

test:
	@deno test test/ -A --permit-no-files

docs:
ifeq ($(OS),Windows_NT)
	@if not exist $(DIST) mkdir $(DIST)
	@if not exist $(DOCS_DIR) mkdir $(DOCS_DIR)
else
	@mkdir -p $(DOCS_DIR)
endif
	@deno doc --lint --html --output=$(DOCS_DIR) src/

clean:
ifeq ($(OS),Windows_NT)
	@if exist $(DIST) rmdir /S /Q $(DIST)
else
	@[ -d $(DIST) ] && rm -rf $(DIST) || true
endif

update:
	@deno outdated --update --latest

help:
	@echo "make             → Build and package the project"
	@echo "make build       → Clean, lint, fmt, test, and build"
	@echo "make package     → Build, generate docs, and zip dist content"
	@echo "make test        → Run tests"
	@echo "make lint        → Run linter"
	@echo "make format      → Check code formatting"
	@echo "make docs        → Generate full HTML docs site in dist/docs/"
	@echo "make clean       → Remove the dist/ directory"
	@echo "make update      → Update dependencies"
