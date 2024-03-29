# Values

Generally, everything in Tokay is some kind of value or part of a value. The term "value" refers to both simple atomic values like booleans, numbers, strings but also objects which are partly mutable, recursive or callable.

## Atomics

*Atomic* values stand on their own and are generally not mutable in the sense of an object. These values are the following:

```tokay
void           # values to representing just nothing
null           # values representing a defined "set to null"
true false     # boolean values
```

Using the builtin function `bool(v)`, a boolean value can be constructed from any other value `v`, by testing for truth.

## Numbers

Tokay supports `int` and `float` as numeric types.

```tokay
42 -23         # signed integer number object of arbitrary size (bigint)
3.1415 -1.337  # signed 64-bit float number object
```

For numbers, the following methods can be used:

- `int(v)` - contructs an int value from any other value `v`
- `float(v)` - contructs a float value from any other value `v`
- `float.ceil()` - returns the next integer ceiling of a float
- `float.fract()` - returns only the fractional part of a float
- `float.trunc()` - truncates the fractional part off a float

## Strings

A string (`str`) is a unicode-character sequence of arbitrary length.

```tokay
s = "Tokay 🦎"
s = s + " is cool"
s += "!"
```

`str` objects can be concatenated by the operators `+` and `+=`.<br>
They can also be multiplied by the operators `*` and `*=`.

Additionally, they provide the following methods:

- `str(v)` - constructs a string object from any other value `v`
- `str.byteslen()` - return total length of bytes used by the string
- `str.endswith(s)` - check if string ends with postfix `s`
- `str.join(l)` - create a string delimited by str from a list `l`
- `str.len()` - return number of characters in the string
- `str.lower()` - turns any upper-case characters of a string into lower-case order
- `str.replace(from, to="", n=void)` - replace string `from` by `to` for at least `n`-times
- `str.startswith(s)` - check if string begins with prefix `s`
- `str.substr(start=0, length=void)` - returns a substring from `start` of `length` or to the end
- `str.upper()` - turns any lower-case characters of a string into lower-case order

## Lists

A list is a sequence of arbitrary values in a row. Therefore, a list can also contain further lists, or other complex objects. A list is also mutable, which means items can be extended or removed during runtime.

```tokay
# list of values
(42, true, "yes")
l = (42 true "yes")
l[1] = false
l.push("🦎")
l.len()  # 4
```

Lists can be concatenated by the `+`- and `+=`-operators, and provide the following methods:

- `list(*args)` - constructs a new list from all arguments provided
- `list.flatten()` - integrates items of lists inside a list into itself
- `list.len()` - returns number of items in the list
- `list.push(item, index=void)` - either appends an `item` to the list or inserts it at position `index`
- `list.pop(index=void)` - either pops the last item off the list or removes and returns item at position `index`

## Dicts

Dictionaries ("dicts") are hash tables or maps with key-value-pairs, where a value is referenced by using the key as its storage location.

```tokay
# dictionary (dict), a map of key-value-pairs
(i => 42, b => true, status => "success", true => false)
d = (i => 42 b => true status => "success" true => false)
d["angle"] = 23.5  # add key "angle"
d["i"] = void  # remove key "i"
```

Dicts provide the following methods:

- `dict()` - creates a new, empty dict
- `dict_clone()` - create an independ copy of dict
- `dict_items()` - returns a list of lists (key, value)
- `dict_keys()` - returns a list of keys
- `dict.len()` - returns number of items in the dict
- `dict.merge(other)` - merges antoher dict into the dict
- `dict_pop(k=void, d=void)` - remove and return k from dict; returns d when key is not present; when k is not present, the last item will be removed.
- `dict_push(k, v)` - insert v as key k into dict
- `dict_values()` - returns a list of values

## Tokens

Tokens are callables consuming input from the stream. They are object values as well. They always return a value parsed from the input stream in case the token matches. Otherwise, tokens usually reject the current block branch or parselet, to try other alternatives.

```tokay
'touch'        # silently touch a string in the input (low severity)
''match''      # verbosely match a string from the input (high severity)
Char<A-Z0-9>+  # matching a sequence of multiple valid characters
Int            # built-in token for parsing and returning Integer values
Word(3)        # built-in token Word, matching at least words of length 3
```

> In terms of parsing, tokens are the terminal symbols of a context-free grammar.

## Functions and parselets

Functions are sub-programs for a specific task or routine which can be used for multiple tasks. A function can accept arguments with default values.

```tokay
# function that doubles its value
f : @x { x * 2 }
f(9)  # 18

# anonymous function example
@x { x * 3 }(5)  # 15, returned by anonymous function that is called in-place
```

Parselets are more-specific functions consuming input and used for parsing. They are conceptionally the same, but also they are very distinguishable in their usage.

```
# parselet that parses simple assignments to variables
Assign : @{
    variable => Ident _ '=' _ value => Number
}

# called on a given input `n = 42`...
Assign
# ... returns dict `(variable => "n", value => 42)`
```

> In terms of parsing, parselets are considered as non-terminal symbols of a context-free grammar.
