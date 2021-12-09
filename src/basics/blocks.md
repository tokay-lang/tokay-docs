# Blocks

Sequences are organized in blocks. Blocks may contain several sequences, which are executed in order of their definition. Every sequence inside of a block is separated by a newline.

- **Blocks** are defined by curly braces `{...}` and introduce a new alternation of sequences. Sequences in a block are executed in order until an item of a sequence or the sequence itself *accepts* or *rejects* the block.
- **Sequences** are lines in a block, delimited by either the end of the line, a semicolon `;` or the blocks closing brace `}`. They are made of items.
- **Items** are
  - expressions like `1 + 2` or `++i * 3`
  - assignments like `x = 42` or `s += "duh"`
  - calls to `'tokens'`, `functions()` or `Parselets`
  - control flow instructions like `if x == 42 "yes" else "no"`
  - and even further `{ blocks }`

```tokay
{  # a block...
    # ... has sequences
    item¹ item² item³ ... # made of items.

    item¹ {  # an item of a sequence can be a block again
        item¹ item² ... # which contains further sequences with items
    }

    {}  # this empty block is the only item of the third sequence of the outer block
}
```

Blocks implicitly return the value of the last sequence being executed. Thus,

```tokay
a = {
    1 + 2
    4
}
```
assigns `4` to `a`, but calculates `3` in between.
