# Blocks
Finally, code is organized in blocks. Blocks are coherent [sequences](02-sequences.md) and [items](01-items.md) that build a syntactical unit and are in turn items, yielding a result. 

Blocks are defined with curly braces, `{...}`.  Below are shown several blocks in different situations.

- Purpose
- How blocks are being defined
- The main block
- Blocks in comparison with several constructs
	- if .. else
	- for/loop
	- function
- Constant scoping
- Alternations

Some examples for blocks:
```tokay
x = {
    print("Assign x")
    42
}
```
Blocks make items and sequences a compound unit that can be used everywhere where items are possible.

The execution of a sequence is influenced by failing token matches or special keywords (like `push`, `next` or `accept`, `reject`, etc.), which either enforce to execute the next sequence, or accept or reject a parselet, which can be referred to as a function. The main-parselet is also a parselet executing the main block, where the REPL runs in.

A block itself is also an item inside of a sequence of another block (or the main block). A new block is defined by `{` and `}`.

The next piece of code is already a demonstration of Tokays parsing features together with a parselet and two blocks, implementing an assignment grammar for either float or integer values, and some error reporting.
