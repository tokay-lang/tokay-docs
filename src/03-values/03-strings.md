# Strings (`str`)

- definition
- operators
- functions

A string (`str`) is a unicode-character sequence of arbitrary length.
```tokay
s = "Tokay 🦎"
s = s + " is cool"
s += "!"
```
`str` objects can be concatenated by the operators `+` and `+=`.<br>
They can also be multiplied by the operators `*` and `*=`.

Additionally, they provide the following methods:

- `str(v)` - constructs a string object from any other value `v`
- `str_byteslen()` - return total length of bytes used by the string
- `str_endswith(s)` - check if string ends with postfix `s`
- `str_join(l)` - create a string delimited by str from a list `l`
- `str_len()` - return number of characters in the string
- `str_lower()` - turns any upper-case characters of a string into lower-case order
- `str_replace(from, to="", n=void)` - replace string `from` by `to` for at least `n`-times
- `str_startswith(s)` - check if string begins with prefix `s`
- `str_substr(start=0, length=void)` - returns a substring from `start` of `length` or to the end
- `str_upper()` - turns any lower-case characters of a string into lower-case order