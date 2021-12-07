# Preface

Tokay programs are expressed and executed differently as common programmming languages like Rust or Python. Therefore, Tokay is not "yet another programming language". It was designed with the goal to let its programs directly operate on input streams that are either read from files, strings, piped commands or any other device emitting characters.

The most obvious example to show how Tokay executes its programs is this little matcher. It recognizes either "Hello Mercury", "Hello Venus" or "Hello Earth" from a text stream. Any other input is automatically skipped.

```tokay
'Hello' _ {
    'Mercury'
    'Venus'
    'Earth'
}
```

In comparison to a general purpose programming languages, there's no explicit branching, substring extraction or reading from input required, as this is directly built into the language and its entire structuring.

If you're familiar with [awk](https://en.wikipedia.org/wiki/AWK), you might find a similarity in above example to awk's `PATTERN { action }` syntax. This approach is recursive in Tokay, so that the action-part again is a further pattern area, or just action code. This is exactly where the intention behind Tokay starts, but not by thinking of a line-based execution working on fields, but a token-based approach working on anything matched from the input, including recursive structures that can be expressed by a grammar.
