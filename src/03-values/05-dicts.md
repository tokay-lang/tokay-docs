# Dicts
- already learned about lists in [sequences](../02-basics/02-sequences.md)
- definition and syntax
	- dicts __are__ ordered!
	- 
- modification
- iteration

Dictionaries ("dicts") are hash tables or maps with key-value-pairs, where a value is referenced by using the key as its storage location.
```tokay
# dictionary (dict), a map of key-value-pairs
(i => 42, b => true, status => "success", true => false)
d = (i => 42 b => true status => "success" true => false)
d["angle"] = 23.5  # add key "angle"
d["i"] = void  # remove key "i"
```
Dicts provide the following methods:

- `dict()` - creates a new, empty dict
- `dict_clone()` - create an independ copy of dict
- `dict_items()` - returns a list of lists (key, value)
- `dict_keys()` - returns a list of keys
- `dict.len()` - returns number of items in the dict
- `dict.merge(other)` - merges another dict into the dict
- `dict_pop(k=void, d=void)` - remove and return k from dict; returns d when key is not present; when k is not present, the last item will be removed.
- `dict_push(k, v)` - insert v as key k into dict
- `dict_values()` - returns a list of values

> TODO: dict_clear() missing