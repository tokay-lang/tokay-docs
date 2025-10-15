# Atomics

*Atomic* values stand on their own and are generally not mutable in the sense of an object.

These values are the following:

- `void` used for ignored, irellevant or discarding values
- `null` used for a defined "set to null or nothing"
- `true` and `false` for boolean values
## Difference between `void` and `null`

When using Tokay, there might be upcoming questions like
- Why are there two values for "nothing"?
- Aren't `null` and `void` literally the same?
- When should I use `null` and when should I use `void`?

Let's clarify things. 
- `null` is a *defined* value that is set to nothing. `null` is a fully valid value. When setting a variable to a defined `null`, this variable is clearly defined to be "not set".
- `void` is a discarding value. When assigning `void` to something, it's value is discarded or erased, depending on the use-case. This is absolutely related to the `void`-paradigm used throughout the language. Don't set variables to void when you want them to be defined unset. Use `null` for that.

It's absolutely correct, that both `bool(null)` and `bool(void)` is `false`, and that arithmetics with `null` and `void` assume value `0`.

## Booleans and testing for truth
The boolean constants `true` and `false` are either defined by their keywords, are evaluated by the `bool()` built-in function.

All values in Tokay have a boolean representation, evaluated by a truth value testing, which can be explicitly constructed by the `bool()` built-in or implicitly used in different situations thoughout the language.

Here are the built-in objects considered false:
- constant values defined to be false: `void`, `null`, `false`
- zero of any numeric type: `0`, `0.0`
- empty str, lists and dicts: `""`, `(,)`, `()`

Anything else is considered to be `true`.

Here are some real-life examples:
```tokay
bool(null)  # false - easy peasy ;)
bool(0)  # false
bool(-13.37)  # true
bool("")  # false
bool(42)  # true
bool("🦎")  # true
```

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
