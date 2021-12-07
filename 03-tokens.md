# Tokens

Tokens are Tokays fundamental building blocks regarding input processing. Tokay implements first-level tokens which direcly consume input, but usages of parselets, which are functions consuming input, are considered as second-level tokens, and are at least tokens as well.

## Touch & match

To match specific strings of characters from the input, like keywords, the match and touch token-type is used. Touch was yet mostly used in our examples, but match is also useful, depending on use-case.

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

- Single Characters are either specified by a Unicode-character or an [escape sequence](#escape-sequences).
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

## Built-ins

The following tokens are built into Tokay and can be used immediatelly. Programs can override these constants on-demand.

<table>
    <thead>
        <tr class="title">
            <th>
                Token
            </th>
            <th>
                Token+
            </th>
            <th>
                Description
            </th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Alphabetic</td><td>Alphabetics</td><td>All Unicode characters having the Alphabetic property</td></tr>
        <tr><td>Alphanumeric</td><td>Alphanumerics</td><td>The union of Alphabetic and Numeric</td></tr>
        <tr><td>Any / .</td><td>-</td><td>Any character, except EOF</td></tr>
        <tr><td>Ascii</td><td>Asciis</td><td>All characters within the ASCII range.</td></tr>
        <tr><td>AsciiAlphabetic</td><td>AsciiAlphabetics</td><td>All ASCII alphabetic characters <code>[A-Za-z]</code></td></tr>
        <tr><td>AsciiAlphanumeric</td><td>AsciiAlphanumerics</td><td>ASCII alphanumeric characters <code>[0-9A-Za-z]</code></td></tr>
        <tr><td>AsciiControl</td><td>AsciiControls</td><td>All ASCII control characters <code>[\x00-\x1F\x7f]</code>. SPACE is not a control character.</td></tr>
        <tr><td>AsciiDigit</td><td>AsciiDigits</td><td>ASCII decimal digits <code>[0-9]</code></td></tr>
        <tr><td>AsciiGraphic</td><td>AsciiGraphics</td><td>ASCII graphic character <code>[!-~]</code></td></tr>
        <tr><td>AsciiHexdigit</td><td>AsciiHexdigits</td><td>ASCII hex digits <code>[0-9A-Fa-f]</code></td></tr>
        <tr><td>AsciiLowercase</td><td>AsciiLowercases</td><td>All ASCII lowercase characters <code>[a-z]</code></td></tr>
        <tr><td>AsciiPunctuation</td><td>AsciiPunctuations</td><td>All ASCII punctuation characters <code>[-!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~]</code></td></tr>
        <tr><td>AsciiUppercase</td><td>AsciiUppercases</td><td>All ASCII uppercase characters <code>[A-Z]</code></td></tr>
        <tr><td>AsciiWhitespace</td><td>AsciiWhitespaces</td><td>All characters defining ASCII whitespace <code>[ \t\n\f\r]</code></td></tr>
        <tr><td>Control</td><td>Controls</td><td>All Unicode characters in the controls category</td></tr>
        <tr><td>Digit</td><td>Digits</td><td>ASCII decimal digits <code>[0-9]</code></td></tr>
        <tr><td>EOF</td><td>-</td><td>Matches End-Of-File.</td></tr>
        <tr><td>Lowercase</td><td>Lowercases</td><td>All Unicode characters having the Lowercase property</td></tr>
        <tr><td>Numeric</td><td>Numerics</td><td>All Unicode characters in the numbers category</td></tr>
        <tr><td>Uppercase</td><td>Uppercases</td><td>All Unicode characters having the Uppercase property</td></tr>
        <tr><td>Whitespace</td><td>Whitespaces</td><td>All Unicode characters having the White_Space property</td></tr>
        <tr><td>Void</td><td>-</td><td>The empty token, which consuming nothing, but consumes!</td></tr>
    </tbody>
</table>

The respective properties of the built-in character classes is described in Chapter 4 (Character Properties) of the [Unicode Standard](https://www.unicode.org/versions/latest/) and specified in the [Unicode Character Database](https://www.unicode.org/reports/tr44) in [DerivedCoreProperties.txt](https://www.unicode.org/Public/UCD/latest/ucd/DerivedCoreProperties.txt).


## Modifiers



## Predictivity

Beyond the token modifiers (`+` `?` `*`) already presented in the syntax section, Tokay provides the operators `peek` and `not` on tokens.

## peek

*coming soon*

## not

*coming soon*

## Whitespace

*coming soon*
