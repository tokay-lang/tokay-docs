# Sequences

Sequences are consecutive [items](01-items.md).

Depending on the items used inside of a sequence, and their *severity*, they yield in an item, which is either a single value or an dynamic object of type `list` or `dict`.

Sequences are either separated by line-break
```tokay
1 2
3 4
```
or by a semicolon (`;`)
```tokay
1 2; 3 4
```

> You can enter the following examples directly into a Tokay REPL.
> The result of each sequence is written as a comment in the examples below.

## Sequences resulting in lists

A sequence consisting of items becomes a [list](). `list` is a built-in object type for a dynamic array.

```tokay
1 2 3
# (1, 2, 3)

1 2 3 + 4
# (1, 2, 7)

"I'm" "a" "Sequence"
# ("I'm", "a", "Sequence")
```

Lists also have their own syntax. Any items delimited by comma (`,`) define a list. Therefore, the following "sequence" is only one item, which is a list!
```tokay
1, 2, 3
# (1, 2, 3)
```

But this one results in a list, which has another list as last item:
```tokay
1 2 3,4
# (1, 2, (3, 4))
```

## Sequences resulting in dicts

Items in a sequence can also be assigned to keys. If just one item in a sequence is assigned to a key, the result of that sequence is a [dict](). `dict` (dictionary) is a built-in object type for a dynamic mapping.

```tokay
red => "apple"  yellow => "banana"  green => "mango"
# (red => "apple" yellow => "banana" green => "mango")

3 * "Tokay"  rate => 100
# (0 => "TokayTokayTokay" rate => 100)
```

Any non-mutable type can be used as 

## Grouping sequences

As already noticed in the comments above, sub-sequences can also be grouped using standard parantheses between `(` and `)`.

```tokay
(1 2 3)
# (1, 2, 3)

(1, 2, 3)
# (1, 2, 3)

(red => "apple" yellow => "banana" green => "mango")
# (red => "apple" yellow => "banana" green => "mango")

(3 * "Tokay"  rate => 100)
# (0 => "TokayTokayTokay" rate => 100)
```

This way allows to assign sequences to variables:
```tokay
l = (1 2 3)
d = (red => "apple" yellow => "banana" green => "mango")
```

## Capturing

On every parselet top-level, items of a sequence are automatically being captured.

This means, that every item is pushed onto a stack, and can also be referenced using capture variables, either by index or by its assigned key.

Capture variables are expressions starting with a dollar-sign `$`.

This sequence references the first two items and adds them, as third item:
```tokay
23.5 42 $1 + $2
# (23.5, 42, 65.5)
```

It also works with assigned keys. *a*  and *b* are assigned keys, and *c* is the result of *a* plus *b*.

```tokay
a => 23.5 b => 42 c => $a + $b
(a => 23.5 b => 42 c => 65.5)
```

Capture variables can also be assigned:

```tokay
23.5 42 $1 = $1 + $2
# (65.5, 42)
```

The capturing facility becomes more powerful when using Tokays parsing features.

> This last example won't work in a simple REPL.
> You have to call the Tokay interpreter with `tokay -- "7 9"` for example to see a result.

```tokay
a => Int _ b => Int  $a + $b
# 16
``

