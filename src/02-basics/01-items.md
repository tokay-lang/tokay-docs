# Items

Items are the atomic building blocks of a Tokay program.

Items can be anything, but in the end, they yield some kind of value - and even when it's the [`void` value](04-void.md), which simply represents nothing.

> You can enter the following code directly into a Tokay REPL.
> See how it works and which values you're getting.

The simplest form of items are just values:
```tokay
true
42
"Hello Tokay 🦎"
```

A list or a dict definition yields in a single item:
```tokay
"this", "is", "a", "list"
("this", "is", "also", "a", "list")
this => "is"  a => "dict"
(this => "is"  "also a" => "dict")
```

Assignments are also items, always yielding the value `void`:
```tokay
s = "Hello Tokay"
x = y = 3
y += 1
```

The result of expressions, like mathematical calculations, are all items as well:
```
1 + 2 * (x + y)
23 * "🦎"
```

For sure, logical expressions are also items, as they yield into a single value:
```tokay
x == 2 + 1
x == 3 && y == 4
s == "Hello Tokay" && x < y < 5
```

Tokay also provides inline increments and decrements, so given `i = 3`
```tokay
i++
```
yields item `3` (increment after yielding), and afterwards this,
```tokay
++i
```
yields item `5` (increment before yielding).

Function calls return a value, so they are items as well
```tokay
print(s)
s.upper
```

Now it get's complicated: Control flow statements are also items and yield items 🤯!
```tokay
if s.len < 25 {
    print("A mid-long string")
}
else {
    print("a longer string")
}

z = if x + y < 99 "good" else "bad"

for i in 1,2,3 print(i)
```

Now here comes one, that beats everything: Assigning the result of a block to a variable is also an item 😱!

```tokay
res = {
    true
    false
    23 * "🦎"
}
```

Now you've seen a lot of items, and there are plenty more of them.

Continue to the sections about [sequences](02-sequences.md) and [blocks](03-blocks.md), to become clear about their interaction and usage within the entire language.
