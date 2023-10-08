# Basics

Tokay code is basically made of [blocks](blocks.md) containing [sequences](sequences.md) which are made of [expressions](expressions.md).

## File format

By design, Tokay accepts any UTF-8 formatted input file. Identifiers are allowed to contain any UTF-8 character with the alphabetic attribute.

```tokay
plankalkül = "Programming language by Konrad Zuse"
plankalkül.upper  # "PROGRAMMING LANGUAGE BY KONRAD ZUSE"
```

Of course Tokay supports any UTF-8 parsing input as well.

## Comments

It is good practise to document source code and what's going on using comments. Likewise bash, Python or awk, Tokay supports line-comments starting with a hash (`#`). The rest of the line will be ignored.

```tokay
# This is my little program

print("Hello World")  # printing welcome message to the user
hash = "# this is a string"  # assign "# this is a string" to hash.
```

Proving a shebang is also possible in case a Tokay source file shall be directly executable.

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

## Consumables

By design, Tokay is a programming language dedicated to parsing. Therefore, the language differs between code, which consumes input, and code which doesn't. Code which consumes input is compiled and executed differently to code which doesn't consume input. Of course, consumable and non-consumable code is mixed, and simply follows the rule: Code, that uses a consumable in any way, *is* itself consumable.

To differ consumables from non-consumables, a naming convention applies: Any identifier starting with an upper-case letter or an underscore defines a consumable.
