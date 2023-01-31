# Tokens

Tokens are the fundamental building blocks used to process input. Tokay implements first-level tokens which direcly consume input, but usages of parselets, which are functions consuming input, are considered as second-level tokens, and are at least tokens as well.

## `'touch'` and `''match''`

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

## `Char`

To match a character, the `Char`-token is both builtin and part of Tokay's syntax.

- Single characters are either specified by a Unicode-character or an escape sequence
- Ranges are delimited by a dash (`-`). If a Max-Min-Range is specified, it is automatically converted into a Min-Max-Range, so `Char<z-a>` is equal to `Char<a-z>`.
- If a dash (`-`) should be part of the character-class, it should be specified first or last.
- If a circumflex (`^`) is specified as first character in the character-class, the character-class will be inverted, so `Char<^a-z>` matches everything except `a` to `z`.

```tokay
Char              # any character
Char<a>           # just "a"
Char<az>          # either "a" or "z"
Char<a-z>         # any character from "a" to "z"
Char<a-zA-Z0-9_>  # All ASCII digit or letter and underscore
Char<^0-9>        # Any character except ASCII digits
Char<-+*/>        # Mathematical base operators (minus-dash first!)
```

> When using the `Char`-token with the multiplicative operators `+` (many repetition) or `*` (kleene, none or many), they are internally revised to a `Chars`-version, for better performance.

## Builtin tokens

The following tokens are builtin and can be parametrized.

- `Ident` - parses any C-style idenfifier name
- `Int(base=10, with_signs=true)` - parses an int-value to the provided base, optionally with `+` or `-` signs
- `Float(with_signs=true)` - parses a float-value, optionally with `+` or `-` signs
- `Number` - parses `Float` or `Int`
- `Token` - either parses `Number`, `Word` or `AsciiPunctuation`
- `Word(min=1, max=void)` - parses any word, number, etc. with the specified `min`- and `max`-length
