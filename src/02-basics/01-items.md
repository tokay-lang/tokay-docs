# Items

Items are the fundamental building blocks of Tokay programs.

Items can be anything, but in the end, they produce some kind of value - and even when it's the [`void` value](04-void.md), which simply represents nothing and is silently discarded.

> You can enter the following code examples directly into a Tokay REPL.
>
> See how it works and which values they produce.

The simplest form of items are just values:
```tokay
true
42
"Hello Tokay 🦎"
```
A list or a dict definition produces a single item:
```tokay
"this", "is", "a", "list"
("this", "is", "also", "a", "list")
this => "is"  a => "dict"
(this => "is"  "also a" => "dict")
```
Assignments are also items that assign the products of other items to variables, hence they're itself always producing the value `void`:
```tokay
s = "Hello Tokay"
x = y = 3
y += 1
```
The result of expressions, like mathematical calculations, are single items as well:
```
1 + 2 * (x + y)
23 * "🦎"
```
For sure, logical expressions are also items, as they produce a single value:
```tokay
x == 2 + 1
x == 3 && y == 4
s == "Hello Tokay" && x < y < 5
```
Tokay also provides inline increments and decrements.
Previously given the assignment `i = 3`, a following item
```tokay
i++
```
produces the value `3` (increment after), and a directly following
```tokay
++i
```
produces the value `5` (increment before).

Function calls produce a value, so they are items as well
```tokay
print(s)
s.upper
```
Control flow statements are also items. Below are some control flow statements in different situations.
```tokay
# well known if-statement
if s.len < 25
    print("A mid-long string")
else
    print("a longer string")

# if-statement used inlined
print(if s.len < 25 "A mid-long string" else "a longer string")

# iterate over characters
for c in s print(c)
```
The two if-statements produce the same result, and there is no explicit inline-if in Tokay, because literally every control flow statement is also and item, and always produces a value. 

Now here comes one more item syntax demonstratrion: Assigning the result of a [block](03-blocks.md) to a variable is also an item!
```tokay
res = {
    true
    false
    23 * "🦎"
}
```
Items are fundamental to anything in Tokay. Continue to the sections about [sequences](02-sequences.md) and [blocks](03-blocks.md), to become familiar about their interaction and usage within the entire language.
