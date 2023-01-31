# Basics

Basically, a Tokay program is made of

- Items
- Sequences
- Blocks

All these belong together and depend on each other in some way.

The following program demonstrates the usage of *items*, *sequences* and *blocks* in action:

```tokay
{ # A block...
    # ... is made of sequences
    'Hello' _ Name \
        count_hello++   # ... which are made of items (4 items here).

    'Goodbye' _ {  # an item of a sequence can be a block again
        'Max'  count_bye_max++  # ... which contains other sequences...
        Name   count_bye++      # ... made of items again.
    }

    {}  # a sequence with an empty block as its item
}
```

This program is a little parser, which looks for greetings in some input.

- The occurence of e.g. `Hello Jan` and `Hello Max` causes the variable`count_hello` to be incremented
- The occurence of e.g. `Goodbye Jan` increments the counter `count_bye`, but
- An occurence of `Goodbye Max`, which is a special case here, counts on `count_bye_max`.

> If you are familiar with the *AWK programming language*, you might see some similarities to the `PATTERN { action }`-syntax here.
>
> In Tokay, *PATTERN* can be any sequence of items that need to match before, and *{ action }* can hold further `PATTERN { action }`-components.
