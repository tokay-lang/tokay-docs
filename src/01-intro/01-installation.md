# Installation

Currently, Tokay is in a very early project state. Therefore you have to built it on your own from source, using the [Rust](https://www.rust-lang.org/) programming language and its build-tool `cargo`.

Once you got Rust installed, install [Tokay](https://crates.io/crates/tokay) by

```bash
$ cargo install tokay
```

This builds and installs Tokay in an optimized version locally on your machine.

For Arch Linux, there's also an AUR package available, which you can find [here](https://aur.archlinux.org/packages?O=0&K=tokay).

After a correct installation, try running the `tokay` command on your shell. Without further options, invoking just `tokay` drops you into the [Tokay REPL](03-repl.md):

```shell
$ tokay
Tokay 0.6.13
>>> print("Hello Tokay")
Hello Tokay
>>> exit
$ _
```

You can exit the REPL either by entering the `exit` keyword, or by  pressing `Ctrl+C`.
