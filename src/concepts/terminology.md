# Terminology

First of all, there are some terms which are oftenly used in Tokay.

## Names and identifiers

The naming rules for identifiers in Tokay differ to other programming languages, and this is an essential feature.

1. Any identifier may not start with any digit (`Char<0-9>`).
2. Variable names have to start with any lower-case letter (`Char<a-z>`)
3. Constant names have to start either
   - when they refer consumable values, with an upper-case letter or an underscore<br>(`Char<A-Z_>`)
   - otherwise they can also start with a lower-case letter, likewise variable names<br>(`Char<a-z>`).

Some examples for better understanding:
```tokay
# Valid
pi : 3.1415
mul2 : @x { x * 2 }
Planet : @{ 'Venus' ; 'Earth'; 'Mars' }
the_Tribe = "Cherokee"

# Invalid
Pi : 3.1415  # float value is not consumable
planet : @{ 'Venus' ; 'Earth'; 'Mars' }  # identifier must specify consumable
The_Tribe = "Cherokee"  # Upper-case variable name not allowed

9th = 9  # valid, but is interpreted as sequence `9 th = 9`
```

More about *consumable* and *non-consumable* values, *variables* and *constants* is discussed shortly.

## Variables and constants

Symbolic identifiers for named values can either be defined as *variables* or *constants*.

```tokay
variable = 0  # assign 0 to a variable
constant : 0  # assign 0 to a constant
```

Obviously, this looks like the same. `variable` becomes 0 and `constant` also. Let's try to modify these values afterwards.

```tokay
variable += 1  # increment variable by 1
constant += 1  # throws compiler error: Cannot assign to constant 'constant'
```

Now `variable` becomes 1, but `constant` can't be assigned and Tokay throws a compile error.
What you can do is to redefine the constant with a new value.

```tokay
variable++    # increment variable by 1
constant : 1  # re-assign constant to 1
```

The reason is, that *variables* are evaluated at runtime, whereas *constants* are evaluated at compile-time, before the program is being executed.

The distinction between variables and constants is a tradeoff between flexibility and predictivity to make different concepts behind Tokay possible. The values of variables aren't known at compile-time, therefore predictive construction of code depending on the values used is not possible. On the other hand, constants can be used before their definition, which is very useful when thinking of functions being called by other functions before their definition.

## Callables and consumables

Some values are callable. Generally, all tokens, functions and builtins are *callable*.

Here are some usages of callables:
```tokay
int("123")        # Builtin int constructor
Int               # Builtin Int parser token
Char<A-Z>         # builtin char token
'Check'           # Touch token 'Check'
''Bold''          # Match token 'Bold'

s = "Hello"
s.upper           # calls method 'str_upper', returns "HELLO"
s[0]              # Internally call 'str_get_item', returns "H"

f : @x { x * 2 }  # function definition
f(42)             # function call, producing 84
```

Additionally, a callable can be attributed to be *consumable*. This is the case when the callable either makes use of another consumable callable, or it direcly consumes input. Consumables are always identified by either starting with an upper-case letter or an underscore. A function which makes use of a consumable is called *parselet*.

```tokay
# invalid attempt; the parselet makes use of consumables,
# but is assigned to a name for a non-consumable constant.
assign : @{
    Ident _ expect '=' _ expect Expr
}

# creating a parselet
Assign : @{
    Ident _ expect '=' _ expect Expr
}
```

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
