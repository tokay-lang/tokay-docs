# Sequences

Sequences are multipe [items](01-items.md) in a row.

Sequences are either delimited by line-break, or by a semicolon (`;`). They can be grouped to sub-sequences using parantheses `(` and `)`.

Depending on the items used inside of a sequence, and their *severity*, they yield in an item, which is either a single value or an object of type `list` or `dict`.

This simple sequence yields into a list:
```tokay
1 2 3
```
And this one as well, but the third item is also a list:
```tokay
1 2 3,4
```

This sequences yield into dicts:
```
a => 1  b => 2
rate => 100   "Tokay"   3 * "🦎"
```



