# Terminology

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
