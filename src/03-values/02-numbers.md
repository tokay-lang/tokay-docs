# Numbers

Tokay supports two built-in types for numbers.
- `int` is a signed integer number object of arbitrary size (bigint)
- `float` is signed 64-bit floating point number object

Conversion between both types is only lossless in a specific range. 
> TODO: More specific please.
## Integers (`int`)

The object `int` allows to store any (arbitrary) signed integer numbers. Due to the usage of BigInt, the maximum value that can be stored is limited only by memory.

- literals
- operators (divi)

- `int(v)` - contructs an int value from any other value `v`
## Floats (`float`)
The `float` object represents a signed 64-bit floating point number. 
- Storage size
- literals

- `float(v)` - contructs a float value from any other value `v`
- `float_ceil()` - returns the next integer ceiling of a float
- `float_fract()` - returns only the fractional part of a float
- `float_trunc()` - truncates the fractional part off a float