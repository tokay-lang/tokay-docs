# Introduction

Tokay programs are made of *items*, *sequences* and *blocks*.

## Items

An item can be an expression, a function or token call or a statement. The following are all items.

```tokay
# Expression
>>> 2 + 3 * 5
17

# Assignment of an expression to a variable
>>> i = 2 + 3 * 5

# Using a variable within an expression
>>> i + 3
20

# Conditional if-statement
>>> if i == 17 "yes" else "no"
"yes"

# Function call
>>> print("hello" + i)
hello17

# Method call
>>> "hello".upper * 3
"HELLOHELLOHELLO"

# Token call ("hello" is read by Word(3) from the input stream)
>>> Word(3)
"hello"

# Token call in an expression (42 is read by Int from the input stream)
>>> Int * 3
126
```

## Sequences

Sequences are multiple items in a row. Items in a sequence can optionally be separated by commas, but this is not mandatory. Sequences are either delimited by line-break, or a semicolon (`;`).

```tokay
# A sequence of items with the same weighting result in a list
>>> 1 2 3
(1, 2, 3)

# This works also comma-separated
>>> 1, 2, 3
(1, 2, 3)

# This is a sequence of lists (indeed, lists are sequences, too)
>>> (1 2 3) (4 5 6)
((1, 2, 3), (4, 5, 6))

# Two sequences in one row; only last result is printed in REPL.
>>> (1 2 3); (4 5 6)
(4, 5, 6)

# This is a simple parsing sequence, accepting  assignments like
# "i=1" or "number = 123"
>>> Ident _ '=' _ Int
("number", 123)

# This is a version of the same sequence constructing a dictionary
# rather than a list
>>> name => Ident _ '=' _ value => Int
(name => "number", value => 123)
```

## Blocks

Finally, sequences are organized in blocks. The execution of a sequence is influenced by failing token matches or special keywords (like `push`, `next` or `accept`, `reject`, etc.), which either enforce to execute the next sequence, or accept or reject a parselet, which can be referred to as a function. The main-parselet is also a parselet executing the main block, where the REPL runs in.

A block itself is also an item inside of a sequence of another block (or the main block). A new block is defined by `{` and `}`.

The next piece of code is already a demonstration of Tokays parsing features together with a parselet and two blocks, implementing an assignment grammar for either float or integer values, and some error reporting.

```tokay
# Parselet definition of Assignment (identified by the @{...}-block)
# Match an identifier, followed by either a float or an integer;
# Throws an error on mismatch.
>>> Assignment : @{
    Ident _ '=' _ {
        Float
        Int
        error("Expecting a number here")
    }
}

# Given input "i = 23.5"
>>> Assignment
("i", 23.5)

# Given input "i = 42"
>>> Assignment
("i", 42)

# Given input "i = j"
>>> Assignment
Line 1, column 5: Expecting a number here
```
