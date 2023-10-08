# Parselets

> Currently this chapter is an unfinished work-in-progress.

Parselets are functions, which consume input.

## begin, end

*coming soon*

## accept, reject

*coming soon*

## repeat

*coming soon*


## Functions

A function is introduced by an at-character (`@`), where a parameter list might optionally follow. The function's body is obgligatory, but can also exist of just a sequence or an item. Functions are normally assigned to constants, but can also be assigned to variables, with some loose of flexibility, but opening other features.

```tokay
# f is a function
f : @x = 1 {
    print("I am a function, x is " + x)
}

f        # calls f, because it has no required parameters!
f()      # same as just f
f(5)     # calls f with x=5
f(x=10)  # calls f with x=10
```

Tokay functions that consume input are called *parselets*. It depends on the function's body if its either considered to be a function or a parselet. Generally, when talking about parselets in Tokay, both function and real parselets are meant as shorthand.

```tokay
# P is a parselet, as it uses a consuming token
P : @x = 1 {
    Word print("I am a parselet, x is " + x)
}

P        # calls P, because it has no required parameters!
P()      # same as just P
P(5)     # calls P with x=5
P(x=10)  # calls P with x=10
```
