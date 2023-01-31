# Getting started

## Installation

Currently, Tokay is in a very early project state. Therefore you have to built it from source, using the [Rust](https://www.rust-lang.org/) programming language and its build-tool `cargo`.

Once you got Rust installed, install [Tokay](https://crates.io/crates/tokay) by

```bash
$ cargo install tokay
```

Once done, you should run the Tokay REPL with
```bash
$ tokay
Tokay 0.6.0
>>> print("Hello Tokay")
Hello Tokay
>>>
```

You can exit the Tokay REPL with `Ctrl+C`.

> The next examples are showing the REPL-prompt `>>>` with a given input and output. The output may differ when other input is provided.


## Usage

Invoking the `tokay` command without any arguments starts the REPL (read-eval-print-loop). This allows to enter expressions or even full programs interactively with a direct result.

```bash
# Start a repl
$ tokay

# Start a repl working on an input stream from file.txt
$ tokay -- file.txt

# Start a repl working on the input string "gliding is flying with the clouds"
$ tokay -- "gliding is flying with the clouds"
Tokay 0.6.0
>>> Word(5)
("gliding", "flying", "clouds")
>>>
```

> In case you compile and run Tokay from source, use `cargo run --` with any desired parameters here, instead of the `tokay` command.

Next runs the Tokay program from the file *program.tok*:
```bash
# Run a program from a file
$ tokay program.tok
```

To directly work on files as input stream, do this as shown next. Further files can be specified and are executed on the same program sequentially. Its also possible to read from stdin using the special filename `-`.
```bash
# Run a program from a file with another file as input stream
$ tokay program.tok -- file.txt

# Run a program from with multiple files as input stream
$ tokay program.tok -- file1.txt file2.txt file3.txt

# Run a program from with files or strings as input stream
$ tokay program.tok -- file1.txt "gliding is fun" file2.txt

# Pipe input through tokay
$ cat file.txt | tokay program.tok -- -
```

A Tokay program can also be specified directly as first parameter. This call just prints the content of the files specified:
```bash
# Directly provide program via command-line parameter
$ tokay 'print(Char+)' -- file.txt
```

> `tokay --help` will give you an overview about further parameters and invocation.


## First steps

Tokay programs are made of *items*, *sequences* and *blocks*.

### Items

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

### Sequences

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

### Blocks

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

### Writing comments

It is good practise to document source code and what's going on using comments. Likewise bash, Python or awk, Tokay supports line-comments starting with a hash (`#`). The rest of the line will be ignored.

```tokay
# This is my little program

print("Hello World")  # printing welcome message to the user
hash = "# this is a string"  # assign "# this is a string" to hash.
```

### Shebang

Therefore a shebang is also possible in case a Tokay source file shall be directly executable.

```tokay
#!/bin/tokay
print("Hello World")
```

This assumes `tokay` is installed to `/bin` on a Posix-like system.

```bash
$ ls -lta hello.tok
-rwxr-xr-x  hello.tok
$ ./hello.tok
Hello World
```
