# Values

Let's discuss the meaning of values in Tokay next. Values are used everywhere, even when its not directly obvious. Generally speaking, everything in Tokay is some kind of value or part of a value.

*Atomic* values are one of the following.

```tokay
void           # values to representing just nothing
null           # values representing a defined "set to null"
true false     # boolean values
42 -23         # signed 64-bit integers
3.1415 -1.337  # signed 64-bit floats
"Tokay 🦎"     # unicode strings
```

Values can also be one of the following *objects*.

```tokay
# list of values
(42, true, "yes")
(42 true "yes")

# dictionary (dict), a map of key-value-pairs
(i => 42, b => true, status => "success")
(i => 42 b => true status => "success")

# tokens are callables consuming input from the stream
'touch'    # silently touch a string in the input
''match''  # verbosely match a string from the input
[A-Z0-9]+  # matching a sequence of valid characters
Integer    # built-in token for parsing and returning Integer values

# functions and parselets are callable, enclosed blocks of code
f : @x{ x * 2 }
f(9)  # 18

@x{ x * 3 }(5)  # 18, returned by anonymous function that is called in-place
```

Objects are discussed in detail in a later chapter below.


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
