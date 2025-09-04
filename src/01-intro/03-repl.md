# Usage

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
