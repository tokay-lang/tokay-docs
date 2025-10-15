# Sequences

Sequences are consecutive [items](01-items.md).

Depending on the items used inside of a sequence, and their [severity](#severity), they yield a value, which is either a single value or an dynamic object of type `list` or `dict`. Implicitly, when looking from the [block](03-blocks.md) perspective, a single item is also a sequence.

Sequences are either separated by line-break or by semicolon (`;`). The following sequences are the same.
```tokay
# two sequences in two rows
1 2
3 4

# two sequences separated by ';'
1 2; 3 4
```

> You can enter the following examples directly into a Tokay REPL.
>
> The result of each sequence is written as a comment in the examples below.

## Lists

A sequence consisting of items becomes a *list*. [`list`]() is a built-in object type for a dynamic array.
```tokay
1 2 3
# (1, 2, 3)

1 2 3 + 4
# (1, 2, 7)

"I'm" "a" "Sequence"
# ("I'm", "a", "Sequence")
```
Lists also have their own syntax. Items delimited by comma (`,`) define a list. Therefore, the following "sequence" is only one item, which is a list!
```tokay
1, 2, 3
# (1, 2, 3)
```
But this one results in a list, which has another list as last item:
```tokay
1 2 3,4
# (1, 2, (3, 4))
```
## Dicts

Items in a sequence can also be assigned to keys. If just one item in a sequence is assigned to a key, the result of that sequence is a *dict*. [`dict`]() (short for *dictionary*) is a built-in object type for a dynamic mapping.
```tokay
red => "apple"  yellow => "banana"  green => "mango"
# (red => "apple" yellow => "banana" green => "mango")

3 * "Tokay"  rate => 100
# (0 => "TokayTokayTokay" rate => 100)
```
## Grouping

As already noticed in the comments above, sub-sequences can also be grouped using standard parantheses between `(` and `)`.
```tokay
(1 2 3)
# (1, 2, 3)

(1, 2, 3)
# (1, 2, 3)

(red => "apple" yellow => "banana" green => "mango")
# (red => "apple" yellow => "banana" green => "mango")
```
This way allows to assign sequences to variables:
```tokay
l = (1 2 3)
d = (red => "apple" yellow => "banana" green => "mango")
```
## Capturing

On every parselet top-level, items of a sequence are automatically being captured.

This means, that every item is pushed onto a stack, and can also be referenced using capture variables, either by index or by its assigned key. Capture variables are expressions starting with a dollar-sign `$`, and can also base on variables.

This next sequence references the first two items and adds them, as third item. The result is a `list`.
```tokay
23.5 42 $1 + $2
# (23.5, 42, 65.5)
```
This also works with assigned keys. *a*  and *b* are assigned keys, and *c* is the result of *a + b*. The result is a `dict`.
```tokay
a => 23.5 b => 42 c => $a + $b
(a => 23.5 b => 42 c => 65.5)
```
Capture variables can also be assigned:
```tokay
23.5 42 $1 = $1 + $2
# (65.5, 42)
```
The capture possibility becomes more clear when using Tokays parsing features, to reference parsed tokens. 

> The upcoming example won't work in a simple Tokay REPL.
>
> You have to call the Tokay interpreter with additional input to be parsed, like `tokay -- "7 9"`, for example, to see a result.

Below sequence matches two integer values delimited by any whitespace, and adds the parsed values together.
```tokay
a => Int _ b => Int  $a + $b
# 16
```
## Severity

Every item in a sequence has a severity, which influences how a [list representation](#Lists) of a sequence is constructed.  This is an important feature, when it comes to parsing.

> Maybe put this into 

| Severity | Used by                                                                 |
| -------- | ----------------------------------------------------------------------- |
|        0 | `_`, `__`, `Touch`                                                      |
|        5 | Any token (`Char`, `Match`, `Int`, `Float`, `Number`), parselet default |
|       10 | Any explicitly pushed value                                             |

Only the highest severity of one level is taken for the final result of the sequence. Anything else below is only used to fulfill the sequence and is silently discarded.

Below sequence defines an `Int` followed by any whitespace and another `Int`
```tokay
Int _ Int
```
This sequence is turned into a list of just two items, because the whitespace has a lower severity and is discarded.