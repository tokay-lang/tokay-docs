# Expressions
To evaluate and calculate results or modify and compare values, expressions are used.

Variables are a fundamental part of these operations, as they are being used throughout a program or function to process data. Some expressions also directly modify variables.

To define a particular operation, Tokay uses several operator symbols that will be discussed in the next sections.

The syntax of expressions is quite free and elaborative. Most operators require two operands are are specified infix, like
```tokay
a + b
```
Unary operations accepting just one operand are specified like
```tokay
+ a
```
Any [whitespace]() can be provided between operators and operands. Line breaks are only allowed in combination with the [`\`-notation]() before the line break, like
```tokay
a + \
b
```
To group operations and define sub-expressions, use parantheses, like
```tokay
a + (b + c)
```
Expressions in parantheses are operands that are being evaluated before other operands inside of an expression. For example, the expression
```tokay
a + ((b + c) + d)
```
first evalutes `b + c`, then adds `d` and afterwards adds that result to `a`. A missing closing paranthese will raise a syntax error.
