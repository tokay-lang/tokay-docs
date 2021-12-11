# Sequences

Sequences are occurences of items in a row.

Here is a sequence of three items:
```tokay
1 2 3 + 4    # results in a list (1, 2, 7)
```
For better readability, items of a sequence can be optionally separated by commas (`,`), so
```tokay
1, 2, 3 + 4  # (1, 2, 7)
```
encodes the same.

All items of a sequence with a given severity are used to determine the result of the sequence. Therefore, these sequences return `(1, 2, 7)` in the above examples when entered in a Tokay REPL. This has to deal with the [severities](items.html#severities) the items own.

## Captures

The items of a sequence are captured, so they can be accessed inside of the sequence using *capture variables*.

In the next example, the first capture, which holds the result `7` from the expression `3 + 4` is referenced with `$1` and used in the second item as value of the expression. Referencing a capture which is out of bounds will just return `void`.

```tokay
3 + 4, $1 * 2  # (7, 14)
```

Captures can also be re-assigned by subsequent items. The next one assigns a value at the second item to the first item, and uses the first item inside of the calculation. The second item which is the assignment, exists also as item of the sequence and refers to `void`, as all assignments do.

> This is the reason why Tokay has two values to simply define nothing, which are `void` and `null`, but null has a higher severity.

```tokay
3 + 4, $1 = $1 * 2  # 14
```

As the result of the above sequence, just one value results which is `14`, but the second item's value, `void`, has a lower severity than the calculated and assigned first value. This is the magic with sequences that you will soon figure out in detail, especially when tokens from streams are accessed and processed, or your programs work on extracted information from the input, and the automatic abstract syntax tree construction occurs.

As the last example, we shortly show how sequence items can also be named and accessed by a more meaningful name than just the index.

```tokay
hello => "Hello", $hello = 3 * $hello  # (hello => "HelloHelloHello")
```

Here, the first item, which is referenced by the capture variable `$hello` is repeated 3 times as the second item.

It might be quite annoying, but the result of this sequence is a *dict* as shown in the comment. A dict is a hash-table where values can be referenced by a key.

> If you come from Python, you might already know about *list* and *dict* objects. Their behavior and meaning is similar in Tokay.

## Parsing input sequences

As Tokay is a programming language with built-in parsing capabilities, let's see how parsing integrates to sequences and captures.

Given the sequence
```tokay
Word __ ''the'' __ Word
```
we make use of the built-in token `Word` which matches anything made of characters and digits, and the special constant `__`, which matches arbitrary whitespace, but at least one whitespace character must be present. Whitespace is anything represented by non-printable characters, like spaces or tabs.

We can now run this sequence on any input existing of three words, where the word in the middle is "the". Let's say
```
Save the planet
```
and we get the output
```
("Save", "the", "planet")
```

> To try it out, either start a Tokay REPL with `$ tokay -- "Save the planet"` and enter the sequence `Word __ ''the'' __ Word` afterwards, or directly specify both at invocation, like<br>
> `$ tokay "Word __ ''the'' __ Word" -- "Save the planet"`.

You will see, it's regardless of how many whitespace you insert, the result will always be the same.

### Using alias variables

Alias variables can also be used perfectly for parsing, to give items meaningful names and make them independent from their position.

```tokay
predicate => Word __ 'the' __ object => Word
```
will output
```
(object => "planet", predicate => "Save")
```

> In this case, "the" was degrated to a touch, to make the output more clear.

### The special capture $0

There is also a special capture variable called $0. It contains the input captured by the currently executed parselet the sequence belongs to, but it can also be assigned to any other value.

Let's see how all capture variables, including $0, are growing when the items from the examples above are being executed.

<table>
    <tr>
        <td>
            <strong>Capture</strong>
        </td>
        <td>
            $1
        </td>
        <td>
            $2
        </td>
        <td>
            $3
        </td>
        <td>
            $4
        </td>
        <td>
            $5
        </td>
    </tr>
    <tr>
        <td>
            <strong>Alias</strong>
        </td>
        <td>
            $predicate
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            $object
        </td>
    </tr>
    <tr>
        <td>
            <strong>Item</strong>
        </td>
        <td>
            <code>predicate => Word</code>
        </td>
        <td>
            <code>__</code>
        </td>
        <td>
            <code>'the'</code>
        </td>
        <td>
            <code>__</code>
        </td>
        <td>
            <code>object => Word</code>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Input</strong>
        </td>
        <td>
            "Save"
        </td>
        <td>
            " "
        </td>
        <td>
            "the"
        </td>
        <td>
            " "
        </td>
        <td>
            "planet"
        </td>
    </tr>
    <tr>
        <td>
            <strong>$0 contains</strong>
        </td>
        <td>
            "Save"
        </td>
        <td>
            "Save "
        </td>
        <td>
            "Save the"
        </td>
        <td>
            "Save the "
        </td>
        <td>
            "Save the planet"
        </td>
    </tr>
</table>

As you can see, `$0` always contains the input matched so far from the start of the capture.
