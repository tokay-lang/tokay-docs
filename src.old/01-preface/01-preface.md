# Preface

Hi and Welcome 👋!

Tokay is a new programming language, designed for ad-hoc parsing and syntax-directed development.

But what does that mean? Tokay programs can operate directly on input streams that are read from files, strings, piped commands or any other source or device emitting data. Unlike general purpose programming languages like Rust or Python, in Tokay, no explicit branching, substring extraction, or reading from input is required. Instead, these operations are directly built into the language. Effectively, Tokay is designed for writing parsers, which are parts of complers. But its more than that. Tokay is designed to structure input or extract more or less structural parts of the input into more abstract data objects, which can be processed further.

If you're familiar with the [awk programming language](https://en.wikipedia.org/wiki/AWK) widely spread on Linux-like systems, you might know its `condition { action }` syntax. In Tokay, this approach is recursive, so that the action-part can also be treated as a pattern, or as plain action code. This highlights a core tenet of Tokay's design and its key difference from awk: instead of using a line-based execution model, Tokay takes a token-based approach that permits operating on anything matched from the input. This enables Tokay programs to operate on recursive structures that can be expressed by a grammar.

This is, what we call "ad-hoc parsing". By writing short, simple matchers, recognizers and parsers - probably based on other, existing parsers - data can quickly be structured and processed into a different format or result.

