# Getting started

## Installation

Currently, Tokay is in a very early project state. Therefore you have to built it from source, using the [Rust](https://www.rust-lang.org/) programming language and its build-tool `cargo`.

Once you got Rust installed, install [Tokay](https://crates.io/crates/tokay) with `cargo install tokay`.

When this is done, you can run Tokay directly, like so, to start a REPL:
```bash
$ tokay
Tokay 0.4.0
>>> print("Hello Tokay")
Hello Tokay
>>>
```

To exit the REPL, type `exit` or press `Ctrl+C`.

## Using the `tokay` command

Invoking the `tokay` command without any arguments starts the REPL (read-eval-print-loop). This allows to enter expressions or even full programs interactively with a direct result.

Start a REPL
```bash
$ tokay
Tokay 0.4.0
>>> 23 * 5
115
>>> for i=0; i < 10; i++ print(i)
0
1
2
3
4
5
6
7
8
9
>>>
```

Start a REPL working on an input stream read from `file.txt`:
```bash
$ tokay -- file.txt
```

Start a REPL working on the input string "save all the whales":
```bash
$ tokay -- "save all the whales"
Tokay 0.4.0
>>> Word
("save", "all", "the", "whales")
>>>
```

> In case you compile and run Tokay from the source code of the Git repository on your own, just run `cargo run --` with any desired parameters attached.

Next runs the Tokay program from the file *prog.tok*:
```bash
$ tokay prog.tok
...
```

To directly work on files as input stream, do this as shown next. Further files can be specified and are executed on the same program sequentially. Its also possible to read from stdin using the special filename `-`.

Run a program from a file with another file as input stream
```bash
$ tokay prog.tok -- file.txt
...
```
Run a program from with multiple files as input stream
```bash
$ tokay prog.tok -- file1.txt file2.txt file3.txt
...
```
Run a program from with files or strings as input stream
```bash
$ tokay prog.tok -- file1.txt "save all the whales" file2.txt
...
```
Pipe input through tokay
```bash
$ cat file.txt | tokay prog.tok -- -
...
```

A Tokay program can also be specified directly by parameter. This call just prints the content of the files specified:
```shell
$ tokay '.+' -- file1.txt file2.txt file3.txt
file1.txt: ...
file2.txt: ...
file3.txt: ...
```

## First steps

Next you can see some little programs expressed in Tokay to become familiar with the syntax and behavior.

### Hello Tokay

You probably found out how to express the "Hello World" program in Tokay already.

```tokay
print("Hello World")
```

### Tokens





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
