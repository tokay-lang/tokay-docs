# Sequences

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


## Captures

Items in sequences are captured during execution. They are temporarily pushed and hold onto a stack, for later access. It is possible to access previously captured items using *capture variables*. Capture variables start with a dollar-sign (`$`) followed either by an index, an aliased name or any Tokay expression which evalutes to an index or an aliased named dynamically.

Given the expression
```tokay
first => Word  _  second => Word  _  third => Word
```
executed on the input
```
Save the planet
```
the sequence and input can be broken down into the following components.
<table>
    <tr>
        <td class="title">
            Capture
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
        <td class="title">
            Alias
        </td>
        <td>
            $first
        </td>
        <td></td>
        <td>
            $second
        </td>
        <td></td>
        <td>
            $third
        </td>
    </tr>
    <tr>
        <td class="title">
            Sequence
        </td>
        <td>
            first => Word
        </td>
        <td>
            _
        </td>
        <td>
            second => Word
        </td>
        <td>
            _
        </td>
        <td>
            third => Word
        </td>
    </tr>
    <tr>
        <td class="title">
            Input
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
            "Planet"
        </td>
    </tr>
    <tr>
        <td class="title">
            $0 contains
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

Tokay also allows to assign values to captures. This makes it possible to directly use captures like any other variable inside of the sequence and any subsequent blocks that belong to the sequence.

```tokay
# planets2.tok
Name {
    if $1 == "Earth" {
        $1 = "Home"
    }
    else if $1 == "Mars" || $1 == "Venus" {
        $1 += " (neighbour)"
    }
}
```

```shell
$ tokay planets2.tok -- "Mercury Venus Earth Mars Jupiter"
("Mercury", "Venus (neighbour)", "Home", "Mars (neighbour)", "Jupiter")
```


## push

## next
