# Tokay Documentation

This repository contains the documentation for the [Tokay programming language](https://tokay.dev).

The Tokay programming language itself is currently under heavy development and can be currently found at [https://github.com/phorward/tokay](https://github.com/phorward/tokay).

## Syntax highlighting

Tokay syntax highlighing support is defined in `tokay-highlight/`. This folder contains an Makefile and utility awk script to inject the code into mdBook's original `theme/highight.js`. It is a little bit tricky, but doesn't require to fork highlight.js or integrate any npm quirks here.

