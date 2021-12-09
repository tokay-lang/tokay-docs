# Appendix C: Modifiers

Tokay allows to use the following modifiers for calls to consumable values. Modifiers are used to describe repetitions or optional occurences of consumables.

<table>
    <thead>
        <tr class="title">
            <th>
                Modifier
            </th>
            <th>
                Description
            </th>
            <th>
                Examples
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>+</td>
            <td>Positive repetition (one or many)</td>
            <td>`'t'+, P(n=3)+`</td>
        </tr>
        <tr>
            <td>?</td>
            <td>Optional (one or none)</td>
            <td>`'t'?, P(n=3)?`</td>
        </tr>
        <tr>
            <td>*</td>
            <td>Kleene star (none or many)</td>
            <td>`'t'*, P(n=3)*`</td>
        </tr>
    </tbody>
</table>

## Redudancy with expressional operators

You might have noticed that the operators `+` and `*` are used as operators for add and multiply as well. To clarify meaning, all modifiers stick to the token they belong to, and no whitespace is accepted between them. Modifiers are only allowed on tokens and parselet calls, and nowhere else, as it makes no sense.

Here are some examples for clarification:
```tokay
't' * 3    # match 't' and repeat the result 3 times
't'* * 3   # match 't' one or multiple times and repeat the result 3 times
't' * * 3  # syntax error
```
