# Appendix D: Builtins

## Functions

## Tokens

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
