# Syntax

Let's start with some explanations about Tokays syntax and fundamental building blocks first.

## Comments

Tokay currently only supports line-comments, starting with a hash (`#`). The rest of the line will be ignored.

```tokay
# This is a comment
hash = "# this is a string"  # this is also a comment.
```

## Reserved words

In Tokay, the following keywords are reserved words for control structures, values and special operators.

```tokay
accept begin else end exit expect false for
if in loop next not null peek push reject
repeat return true void
```

## Identifiers

Naming rules for identifiers in Tokay differ to other programming languages, and this is an essential feature.

1. As known from other languages, identifiers may not start with any digit (`0-9`).
2. Variables need to start with a lower-case letter from (`a-z`)
3. Constants need to start either
   - with an upper-case letter (`A-Z`) or an underscore (`_`) when they refer consumable values,
   - otherwise they can also start with a lower-case letter from (`a-z`).

Some examples for better understanding:
```tokay
# Valid
pi : 3.1415
mul2 : @x { x * 2 }
Planet : @{ 'Venus' ; 'Earth'; 'Mars' }
the_Tribe = "Apache"

# Invalid
Pi : 3.1415  # float value is not consumable
planet : @{ 'Venus' ; 'Earth'; 'Mars' }  # identifier must specify consumable
The_Tribe = "Cherokee"  # Upper-case variable name not allowed

9th = 9  # interpreted as '9 th = 9'
```

More about *consumable* and *non-consumable* values, *variables* and *constants* will be discussed later.

## Sequences

Sequences are a fundamental and powerful feature of Tokay, as you will see later. We will only discuss their syntax and simple examples here for now.

Every single value, call, expression, control-flow statement or even block is considered as an item. We will discuss blocks shortly.
Those items can be chained to a sequence directly in every line of a Tokay program.
```tokay
1 2 3 + 4    # results in a list (1, 2, 7)
```
For better readability, items of a sequence can also be optionally separated by commas (`,`), so
```tokay
1, 2, 3 + 4  # (1, 2, 7)
```
encodes the same.

All items of a sequence with a given severity are used to determine the result of the sequence. Therefore, these sequences return `(1, 2, 7)` in the above examples when entered in a Tokay REPL. Severities and automatic value construction of sequences will be discussed later on.

The items of a sequence are captured, so they can be accessed inside of the sequence using *capture variables*. In the next example, the first capture, which holds the result `7` from the expression `3 + 4` is referenced with `$1` and used in the second item as value of the expression. Referencing a capture which is out of bounds will just return a `void` value.
```tokay
3 + 4, $1 * 2  # (7, 14)
```
Captures can also be re-assigned by following captures. This one assigns a value at the second item to the first item, and uses the first item inside of the calculation. The second item which is the assignment, exists also as item of the sequence and refers to `void`, as all assignments do. This is the reason why Tokay has two values to simply define nothing, which are `void` and `null`.
```tokay
3 + 4, $1 = $1 * 2  # 14
```
As the result of the above sequence, just one value results which is `14`, but the second item's value, `void`, has a lower severity than the calculated and assigned first value. This is the magic with sequences that you will soon figure out in detail, especially when tokens from streams are accessed and processed, or your programs work on extracted information from the input, and the automatic abstract syntax tree construction occurs.

As the last example, we shortly show how sequence items can also be named and accessed by a more meaningful name than just the index.
```tokay
hello => "Hello", $hello = 3 * $hello  # (hello => "HelloHelloHello")
```
Here, the first item, which is referenced by the capture variable `$hello` is repeated 3 times as the second item.
It might be quite annoying, but the result of this sequence is a dict as shown in the comment. A dict is a hash-table where values can be referenced by a key.

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

## Blocks

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

## Functions

A function is introduced by an at-character (`@`), where a parameter list might optionally follow. The function's body is obgligatory, but can also exist of just a sequence or an item. Functions are normally assigned to constants, but can also be assigned to variables, with some loose of flexibility, but opening other features.

```tokay
# f is a function
f : @x = 1 {
    print("I am a function, x is " + x)
}

f        # calls f, because it has no required parameters!
f()      # same as just f
f(5)     # calls f with x=5
f(x=10)  # calls f with x=10
```

Tokay functions that consume input are called *parselets*. It depends on the function's body if its either considered to be a function or a parselet. Generally, when talking about parselets in Tokay, both function and real parselets are meant as shorthand.

```tokay
# P is a parselet, as it uses a consuming token
P : @x = 1 {
    Word print("I am a parselet, x is " + x)
}

P        # calls P, because it has no required parameters!
P()      # same as just P
P(5)     # calls P with x=5
P(x=10)  # calls P with x=10
```

## Operators

Tokay implements the following operators for use in expressions. The operators are ordered by precedence, operators in the same row share the same precedence.

<table>
    <thead>
        <tr class="title">
            <th>
                Operator
            </th>
            <th>
                Description
            </th>
            <th>
                Associativity
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>= += -= *= /=</td>
            <td>Assignment, combined operation-assignment</td>
            <td>left</td>
        </tr>
        <tr>
            <td>||</td>
            <td>Logical or</td>
            <td>left</td>
        </tr>
        <tr>
            <td>&&</td>
            <td>Logical and</td>
            <td>left</td>
        </tr>
        <tr>
            <td>== != < <= >= ></td>
            <td>Equal, unequal, Comparison</td>
            <td>left</td>
        </tr>
        <tr>
            <td>+ -</td>
            <td>Add, subtract</td>
            <td>left</td>
        </tr>
        <tr>
            <td>* /</td>
            <td>Multiply, divide</td>
            <td>left</td>
        </tr>
        <tr>
            <td>- !</td>
            <td>Negate, not</td>
            <td>right</td>
        </tr>
        <tr>
            <td>++ --</td>
            <td>Increment, decrement</td>
            <td>right</td>
        </tr>
        <tr>
            <td>() [] .</td>
            <td>Grouping, subscript, attribute</td>
            <td>left</td>
        </tr>
    </tbody>
</table>

Operators produce different results depending on the data-types of their operands. For example, `3 * 10` multiplies, where `3 * "test"` creates a new string repeating "test" 3 times. Try out the results of different operands in a Tokay REPL for clarification.

Some operators might be separated by whitespace or grouping for clarification. For example, the plus-operator (`+`) also has a different meaning when used on consumables, which is discussed next.

## Modifiers

Tokay allows to use the following modifiers for calls to tokens and parselets. Modifiers are used to describe repetitions or optional occurences of tokens.

<table>
    <thead>
        <tr class="title">
            <th>
                Modifier
            </th>
            <th>
                Description
            </th>
            <th>
                Examples
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>+</td>
            <td>Positive repetition (one or many)</td>
            <td>'t'+, P(n=3)+</td>
        </tr>
        <tr>
            <td>?</td>
            <td>Optional (one or none)</td>
            <td>'t'?, P(n=3)?</td>
        </tr>
        <tr>
            <td>*</td>
            <td>Kleene star (none or many)</td>
            <td>'t'*, P(n=3)*</td>
        </tr>
    </tbody>
</table>

You might have recognized that the operators `+` and `*` are used as operators for add and multiply as well. To clarify meaning, all modifiers stick to the token they belong to, and no whitespace is accepted between them. Modifiers are only allowed on tokens and parselet calls, and nowhere else (as it is not useful).

Here are some examples for clarification:
```tokay
't' * 3    # match 't' and repeat the result 3 times
't'* * 3   # match 't' one or multiple times and repeat the result 3 times
't' * * 3  # syntax error
```

## Escape sequences

Escape sequences can be used inside strings, match/touch tokens and character-classes to encode any unicode character. They are introduced with a backslash. Escape-sequences should be used to simplify the source code and its readability, but any unicode character can also be directly expressed.

<table>
    <thead>
        <tr class="title">
            <th>
                Sequence
            </th>
            <th>
                Description
            </th>
            <th>
                Examples
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>\a \b \f \n \r \t \v</td>
            <td>Bell (alert), backspace, formfeed, new line, carriage return, horizontal tab, vertical tab, </td>
            <td>"\a\b\f\n\r\t\v"</td>
        </tr>
        <tr>
            <td>\' \" \\</td>
            <td>Quotation marks, backslash</td>
            <td>"\'\"\\"  # '"\</td>
        </tr>
        <tr>
            <td>\ooo</td>
            <td>ASCII character in octal notation</td>
            <td>"\100"  # @</td>
        </tr>
        <tr>
            <td>\xhh</td>
            <td>ASCII character in hexadecimal notation</td>
            <td>"\xCA"  # Ê</td>
        </tr>
        <tr>
            <td>\uhhhh</td>
            <td>16-Bit Unicode character in hexadecimal notation</td>
            <td>"\u20ac"  # €</td>
        </tr>
        <tr>
            <td>\Uhhhhhhhh</td>
            <td>32-Bit Unicode character in hexadecimal notation</td>
            <td>"\U0001F98E"  # 🦎</td>
        </tr>
    </tbody>
</table>
