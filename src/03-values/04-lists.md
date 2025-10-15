# Lists
- already learned about lists in [sequences](../02-basics/02-sequences.md)
- definition and syntax
	- l = (1 2 3)  # sequence syntax
	- list syntax
		- l = ,
		- l = 1, 
		- l = 1,2,
		- l = (,)
- modification
	- push
	- pop
- iteration

A list is a sequence of arbitrary values in a row. Therefore, a list can also contain further lists, or other complex objects. A list is also mutable, which means items can be extended or removed during runtime.
```tokay
# list of values
(42, true, "yes")
l = (42 true "yes")
l[1] = false
l.push("🦎")
l.len()  # 4
```
Lists can be concatenated by the `+`- and `+=`-operators, and provide the following methods:

- `list(*args)` - constructs a new list from all arguments provided
- `list.flatten()` - integrates items of lists inside a list into itself
- `list.len()` - returns number of items in the list
- `list.push(item, index=void)` - either appends an `item` to the list or inserts it at position `index`
- `list.pop(index=void)` - either pops the last item off the list or removes and returns item at position `index`

> TODO: Where is list.clear() ? 