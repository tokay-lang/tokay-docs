# Basics

This chapter focuses on Tokay's elementary syntax and building blocks. It might already show some parts and examples where new users are not familiar yet, but they should get a feeling of the language.

## File format

By design, Tokay accepts any UTF-8 formatted input. Identifiers are allowed to contain any UTF-8 character with the alphabetic attribute.

```tokay
plankalkül = "Programming language by Konrad Zuse"
plankalkül.upper  # "PROGRAMMING LANGUAGE BY KONRAD ZUSE"
```

Of course Tokay supports any UTF-8 parsing input as well.

## Comments

It is a good practise to document source code and what's going on using comments.

Likewise bash, Python or awk, Tokay supports line-comments starting with a hash (`#`). The rest of the line until the next line-break will be ignored.

```tokay
# This is my little program

print("Hello World")  # printing welcome message to the user
hash = "# this is a string"  # assign "# this is a string" to hash.
```

## Shebang

Providing a [shebang (`#!`)](https://en.wikipedia.org/wiki/Shebang_(Unix)) in input files also possible in case a Tokay source file shall be directly executable.

```tokay
#!/bin/tokay
print("Hello World")
```

This assumes `tokay` is installed to `/bin` on a Posix-like system, and the file is configured to be executable.

```bash
$ ls -lta hello.tok
-rwxr-xr-x  hello.tok
$ ./hello.tok
Hello World
```
