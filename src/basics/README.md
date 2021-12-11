# Basics

Basically, a Tokay program is established on these parts:

- Items
- Sequences
- Blocks

All these parts belong together and depend on each other in some way.

The following Tokay program demonstrates the usage of all three of these parts in action.

```tokay
{ # A block...
    # ... is made of sequences
    'Hello' _ Name count_hello++   # ... which are made of items.

    'Goodbye' _ {  # an item of a sequence can be a block again
        'Max'  count_bye_max++  # ... which contains one sequences with items
        Name   count_bye++      # ... and a second one, too.
    }

    {}  # a sequence with an empty block as its item
}
```

This program is a little parser, which looks for greetings in some input.

- The occurence of e.g. `Hello Jan` and `Hello Max` causes the variable`count_hello` to be incremented
- The occurence of e.g. `Goodbye Jan` increments the counter `count_bye`, but
- An occurence of `Goodbye Max`, which is a special case here, counts on `count_bye_max`.

> If you are familiar with the *Awk programming language*, you might see some similarities to the `PATTERN { action }`-syntax here.
>
> In Tokay, *PATTERN* can be any sequence of items that need to match before, and *{ action }* can hold further `PATTERN { action }`-components.
