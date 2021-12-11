# Blocks

Sequences are organized in blocks. Blocks may contain several sequences, which are executed in order of their definition. Every sequence inside of a block is separated by a newline.

The main scope of a Tokay program is also an implicit block, therefore it is not necessary to start every program with a new block.

## Newlines

In Tokay, newlines (line-breaks, `\n` respectively) are meaningful. They separate sequences from each other, as you will learn in the next section.

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
