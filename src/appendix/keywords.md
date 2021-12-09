# Appendix A: Keywords

In Tokay, the following keywords are reserved words for control structures, values and special operators.

- `accept` - accept parselet, optionally with a return value
- `begin` - sequence to execute at begining of a parselet
- `break` - break from a loop, optonally with a return value
- `continue` - restart iteration in a loop
- `else` - fallback for `if` constructs
- `end` - sequence to execute at end of a parselet
- `exit` - stop program execution, optional with exit code
- `expect` - operator for consumable that expects the consumable and throws an error if not present
- `false` - the *false* value
- `for` - head-controlled `for` loop
- `if` - branch based on the result of a conditional expression
- `in` - part of the `for`-loop syntax
- `loop` - head-controlled loop with an optional abort conition
- `next` - continue with next sequence in a block
- `not` - operator for consumable that satisfies when the consumable is not consumed
- `null` - the *null* value
- `peek` - operator for consumable that satisfies when consumable is consumed but the reader rolls back afterwards
- `push` - accept a sequence by pushing a value
- `reject` - reject parselet as not being consumed
- `repeat` - repeat parselet, optionally push a result
- `return` - same like `accept`, but with a meaning for ordinary functions
- `true` - the *true* value
- `void` - the *void* value
