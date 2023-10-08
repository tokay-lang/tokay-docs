# Control structures

In comparison to many other languages, control structures in Tokay are part of expressions. They always return a value, which defaults to `void` when no other value is explicitly returned.

## if...else

The `if...else`-construct implements conditional branching depending on the result of an expression.<br>
The `else` part is optional, and can be omitted.

```tokay
if sense == 42 && axis == 23.5 {
    print("Well, this is fine!")
}
else {
    print("That's quite bad.")
}
```

As stated before, all control structures are part of Tokays expression syntax. Above example can easily by turned into

```tokay
print(
    if sense == 42 && axis == 23.5
        "Well, this is fine!"
    else
        "That's quite bad."
)
```

or directly used inside of an expression.

```tokay
# if can be part of an expression
Word "Hello " + if $1 == "World" "Earth" else $1
```

`if...else` constructs working on static expressions are optimized away during compile-time.

## loop

The `loop`-keyword is used to create loops, either with an aborting conditions on top or without any condition.

```tokay
# Countdown
count = 10
loop count >= 0 print(
    if --count == 3
        "Ignition"
    else if count < 0
        "Liftoff"
    else
        count
)
```

A loop can be aborted everytime using the `break`-statement.<br>
The `continue`-statement restarts the loop at the beginning, but a present abort-condition will be re-checked again.

```tokay
count = 10
loop {
    count = count - 1
    if count == 3 {
        print("Ignition")
        continue
    }

    print(count)
    if count == 0 {
        print("Liftoff")
        break
    }
}
```

A loop without any aborting condition loops forever.

```tokay
loop print("Forever!")
```

## for

The `for`-keyword introduces a special form of loop that runs over an iterator.

```tokay
for i in range(10) {
    print(i)
}
```

> This syntax is abandoned. The upcoming version 0.7 of Tokay will only support `for...in`.
