# Blocks

Sequences are organized in blocks. Blocks may contain several sequences, which are executed in order of their definition. Every sequence inside of a block is separated by a newline.

The main scope of a Tokay program is also an implicit block, therefore it is not necessary to start every program with a new block.

## Newlines

Newlines (line-breaks, `\n` respectively) are meaningful, and belong to the syntax of blocks.<br>
They separate sequences inside a block from each other.

```tokay
"1st" "sequence"
"2nd" "sequence"
"3rd" "sequence"
```

Instead of a newline, a semicolon (`;`) can also be used, which has the same meaning. A single-line sequence can be split into multiple lines by preceding a backslash (`\`) in front of the line-break.

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

Second, they provide alternations for sequences which consume input. Therefore, their behavior different in Tokay in comparison to other programming languages. When all sequences inside of a block don't consume any input, the block behaves exactly as in other languages. But when a sequence consumes input, the block might stop execution of alternatives (=sequences) before the end of the block is reached.

```tokay
# alternation behavior of a block, when used with tokens
'Hello' _ {
    checked = true  # always executed, consumes no input
    'World' print("Hello World")
    'Mars' print("Hello Mars")
    print("Hello Unknown")  # fallback case
}
```
