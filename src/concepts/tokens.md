# Tokens

Tokens are the fundamental building blocks used to process input. Tokay implements first-level tokens which direcly consume input, but usages of parselets, which are functions consuming input, are considered as second-level tokens, and are at least tokens as well.

## Touch & match

To match exact strings of characters from the input, like keywords, the *match* and *touch* token-type is used. Touch was yet mostly used in our examples, but match is also useful, depending on use-case.

```tokay
'Touch'    # match string in the input and discard
''Match''  # match string in the input and take
```

The only difference between the two types is, that a match has a higher severity than a touch, and will be recognized within automatic value construction.
Both type of matches can be referred by capture variables, therefore

```tokay
'Match' $1
```
is the same result like a direct match.

Check out the following one-liner when executed on the input `1+2-3+4`, it will return `(1, "+", (2, (3, "+", 4)))`. The matches on the plus (`''+''`) is taken into the result, the touch on minus (`'-'`) are discarded.
```tokay
E : { E ''+'' E ; E '-' E; Integer }; E
```

## Character-classes

Character tokens are expressed as character-classes known from regular expressions. They are encapsulated in brackets `[...]` and allow for a specification of ranges or single characters.

- Single Characters are either specified by a Unicode-character or an escape sequence
- Ranges are delimited by a dash (`-`). If a Max-Min-Range is specified, it is automatically converted into a Min-Max-Range, so `[z-a]` becomes `[a-z]`.
- If a dash (`-`) should be part of the character-class, it should be specified first or last.
- If a circumflex (`^`) is specified as first character in the character-class, the character-class will be inverted, so `[^a-z]` matches everything except `a` to `z`.


```tokay
[a]           # just "a"
[az]          # either "a" or "z"
[abc]         # "a", "b" or "c"
[a-c]         # "a", "b" or "c" also
[a-zA-Z0-9_]  # All ASCII digit or letter and underscore
[^0-9]        # Any character except ASCII digits
[-+*/]        # Mathematical base operators (minus-dash first!)
```
