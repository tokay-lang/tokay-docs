# Blocks

Blocks are defined by curly braces `{` ... `}`. Sequences are a part of blocks. Blocks may contain several sequences, which are executed in order of their definition.

Newlines matter and are part of the syntax. They separate sequences inside of a block from each other.

```tokay
"1st" "sequence"
"2nd" "sequence"
"3rd" "sequence"
```

They also introduce visibility scopes for constants. In some cases, blocks are implicitly defined, like the main-block, which is the Tokay program's global scope, or in parselets with a sequence as its body.

Instead of a newline, a semicolon (`;`) can also be used, which has the same meaning like a newline. A single-line sequence can be split into multiple lines by preceding a backslash (`\`) in front of the line-break.

```tokay
"1st" \
    "sequence"
"2nd" "sequence" ; "3rd" "sequence"
```
The first and second example are literally the same.

## Behavior

Blocks have two important purposes:

First, they group sequences into items of other sequences.

```tokay
# typical use of a block
if x > 0 {
    x += 1
    print("x is now " + x)
}
```

Second, they provide alternations for sequences which consume input. Therefore, their behavior is different in Tokay in comparison to other programming languages. When all sequences inside of a block don't consume any input, the block behaves exactly as in other languages. But when a sequence consumes input, the block might stop execution of alternatives (=sequences) before the end of the block is reached.

```tokay
# alternation behavior of a block, when used with tokens
'Hello' _ {
    checked = true  # always executed, consumes no input
    'World' print("Hello World")
    'Mars' print("Hello Mars")
    print("Hello Unknown")  # fallback case
}
```
