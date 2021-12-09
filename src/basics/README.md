# Basics

This chapter covers the atomic basics of the Tokay programming language in detail.

Tokay programs are made of the following elements:

- **Items** form atomic values from expressions.
- **Sequences** are chained items.
- **Blocks** are groups of sequences.

All these elements belong together and depend on each other in some way.

The syntactical base structure of Tokay code always is

```tokay
{ # A block...
    # ... is made of sequences
    item1 item2 item3 # ... which are made of items.

    item1 {  # an item of a sequence can be a block again
        item1 item2 ... # which contains further sequences with items
    }

    {}  # a sequence with an empty block as its item
}
```

The main scope of a Tokay program is also an implicit block, therefore it is not necessary to start every program with a new block.
