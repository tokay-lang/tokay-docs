# Preface

> This documentation was updated to be used with [Tokay 0.6](https://tokay.dev/news/release-v0-6/).<br>
> Some features might not work as expected when used with a more recent version.

> Likewise Tokay itself, this documentation is currently under development and unfinished.<br>
> If you found any mistakes or can explain things better, please contribute!<br>
> To do so, visit [https://github.com/tokay-lang](https://github.com/tokay-lang).

Tokay is a programming language designed for ad-hoc parsing and text processing. Tokay programs operate directly on input streams that are read from files, strings, piped commands or any other device emitting characters.

The following example is a short Tokay program that illustrates how Tokay works. It recognizes either "Hello Mercury", "Hello Venus" or "Hello Earth" from a text stream. Any other input is automatically skipped.

```tokay
'Hello' _ {
    'Mercury'
    'Venus'
    'Earth'
}
```

Unlike general purpose programming languages like Rust or Python, in Tokay no explicit branching, substring extraction, or reading from input is required. Instead, these operations are directly built into the language.

If you're familiar with [AWK](https://en.wikipedia.org/wiki/AWK), you might find the syntax in the previous example to be similar to the `PATTERN { action }` syntax. This approach is recursive in Tokay, so that the action-part can also be treated as a pattern, or as plain action code. This highlights a core tenet of Tokay's design and its key difference from AWK: instead of using a line-based execution model, Tokay takes a token-based approach that permits operating on anything matched from the input. This enables Tokay programs to operate on recursive structures that can be expressed by a grammar.
