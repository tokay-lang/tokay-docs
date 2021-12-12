# Items

Items are the atomic parts of sequences, and represent values.

The following examples for items are direct values that, once specified, stay on their own.

```tokay
123               # the number 123
true              # the boolean value for truth
"Tokay 🦎"        # a unicode string
```

Items can also be the result of expressions or calls to callable objects.

```tokay
"a " + "string"   # concatenating a string
42 * 23.5         # the result of a multiplication
'check'           # the occurence of string "check" in the input
Integer           # calling a built-in token for parsing integer values
func(42)          # calling a function
++count           # the incremented value of count
```

But items can also be more complex.

```tokay
x = count * 23.5  # the result of a calculation is assigned to a variable
```

This is an assignment, and always produces the item value `void`, which means just "nothing". This is, because the result of the calculation is stored to a variable, but the item must represent some value.

Here's another item:
```tokay
if x > 100 "much" # conditional expression, which is either "more" or void
```

This `if`-clause allows for conditional programming. It either produces a string when the provided condition is met, and otherwise also produces `void`.

This behavior can be changed by providing an `else`-branch next, like this:

```tokay
if x > 100 "much" else "less"
```

As you see, every single value, call, expression or control-flow statement is considered to be an item.

A [block](blocks.html) is also an item as well, but this will be disussed later.

## Severities

> This is not important for the first steps and programs with Tokay, but a fundamental feature of the magic behind Tokay's automatic value construction features, which will be discussed later. You should know about it!

Every item has a severity, which defines its value's "weight".

Tokay currently knows 4 levels of severitity:

1. Whitespace
2. Match
3. Value
4. Result

The severity of an item depends on how it is constructed. For example

```tokay
123               # pushes 123 with severity 3
_                 # matches whitespace
'check'           # matches "check" in input and pushes it considered as match
''check''         # matches "check" in input and pushes it considered as value
'check' * 3       # matches "check" in input and repeats it 3 times, resuling in value
push "yes"        # pushes result value "yes"
```

Right now, this isn't so important, and you shouldn't keep this in mind all the time. It will become useful during the next chapters, and especially when writing programs that parse or extract data off something.

## Conclusion


In conclusion, an item is the result of some expression which always stands for a value. An item in turn is part of a sequence. Every item has a hidden severity, which is important for constructing values from sequences later on.
