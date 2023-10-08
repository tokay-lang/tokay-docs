# Expressions

Expressions are the tiniest part of sequences, and represent either raw values, computed values or variable assignments.

The following are direct values that, once specified, stay on their own.

```tokay
123                # the number 123
true               # the boolean value for truth
"Tokay 🦎"         # a unicode string
```

Calls to tokens, parselets or functions are yielding values as well.

```tokay
print("Hello")     # returns void
ord("🦎")          # returns 129422
'check'            # returns 'check' when 'check' was matched in the input
Int                # returns an integer value when parsed from the input, e.g. `123`
```

Expression can also be computed using binary or unary operators

```tokay
1 + 2 * 3 + 4      # calculates the result of 11
(1 + 2) * (3 + 4)  # calculates the result of 15
"a " + "string"    # constructs "a string"
x = 42             # assigns a variable, returns void
x * 23.5           # calculates 987
-x                 # calculates -42
++x                # increments x and returns 43
```

> Above assignment of `42` to `x`, produces the item value `void`, which means just "nothing". This is, because the result of the calculation is stored to a variable, but the expression must evaluate to some value, therefore it is void.

Control structures are part of expressions, too. Next expression either returns `"much"` or `void`, depending on the value of variable `x`.

```tokay
if x > 100 "much"  # either "much", or void
```

This default behavior of a void-evaluation can be changed, by providing an `else`-branch next, like this:

```tokay
if x > 100 "much" else "less"
```

Please consult further reading on tokens, variables, operators and control structures on expressions.
