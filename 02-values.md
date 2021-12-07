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

## Variables and constants

Symbolic identifiers for named values can either be defined as *variables* or *constants*.
```tokay
variable = 0  # assign 0 to a variable
constant : 0  # assign 0 to a constant
```
Obviously, this looks like the same. `variable` becomes 0 and `constant` also. Let's try to modify these values afterwards.
```tokay
variable += 1  # increment variable by 1
constant += 1  # throws compile error: Cannot assign to constant 'constant'
```
Now `variable` becomes 1, but `constant` can't be assigned and Tokay throws a compile error.
What you can do is to redefine the constant with a new value.
```tokay
variable++    # increment variable by 1
constant : 1  # re-assign constant to 1
```
The reason is, that variables are evaluated at runtime, whereas constants are evaluated at compile-time, before the program is being executed.

The distinction between variables and constants is a tradeoff between flexibility and predictivity to make different concepts behind Tokay possible. The values of variables aren't known at compile-time, therefore predictive construction of code depending on the values used is not possible. On the other hand, constants can be used before their definition, which is very useful when thinking of functions being called by other functions before their definition.

## Callables and consumables

From the object types presented above, tokens and functions have the special properties that they are *callable* and possibly *consumable*.

- Tokens are always callable and considered to consume input
- Functions are always callable and are named
    - *parselets* when they consume input by either using tokens or a consumable constant
    - *functions* when they don't consume any input

For variables and constants, special naming rules apply which allow Tokay to determine a symbol type based on its identifier only.

*todo: This section is a stub. More examples and detailed explanations needed here.*

## Scopes

Variables and constants are organized in scopes.

1. A scope is any block, and the global scope.
2. Constants can be defined in any block. They can be re-defined by other constants in the same or in subsequent blocks. Constants being re-defined in a subsequent block are valid until the block ends, afterwards the previous constant will be valid again.
3. Variables are only distinguished between global and local scope of a parselet. Unknown variables used in a parselet block are considered as local variables.

Here's some commented code for clarification:
```tokay
x = 10  # global scope variable x
y : 2000  # global scope constant y
z = 30  # global scope variable z

# entering new scope of function f
f : @x {  # x is overridden as local variable
    y : 1000  # local constant y overrides global constant y temporarily in this block
    z += y + x # adds local constant y and local value of x to global value of z
}

f(42)

# back in global scope, x is still 10, y is 2000 again, z is 1072 now.
x y z
```

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

## Automatic value construction

*coming soon*
