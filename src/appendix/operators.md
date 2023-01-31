# Appendix B: Operators

Tokay implements the following operators for use in expressions. The operators are ordered by precedence, operators in the same row share the same precedence.

Don't confuse with some rows which look as redundant, this depends on either the operator is delimited by whitespace from its operands or not.

<table>
    <thead>
        <tr class="title">
            <th>
                Operator
            </th>
            <th>
                Description
            </th>
            <th>
                Associativity
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>=<br>+=<br>-=<br>*=<br>/=<br>//=<br>%=</td>
            <td>Assignment, combined operation-assignment</td>
            <td>left</td>
        </tr>
        <tr>
            <td>||</td>
            <td>Logical or</td>
            <td>left</td>
        </tr>
        <tr>
            <td>&&</td>
            <td>Logical and</td>
            <td>left</td>
        </tr>
        <tr>
            <td>==<br>!=<br><<br><=<br>>=<br>></td>
            <td>Equal, unequal, comparison</td>
            <td>left</td>
        </tr>
        <tr>
            <td>+<br>-</td>
            <td>Add, subtract</td>
            <td>left</td>
        </tr>
        <tr>
            <td>*<br>/<br>//<br>%</td>
            <td>Multiply, divide, integer divide, modulo</td>
            <td>left</td>
        </tr>
        <tr>
            <td>-<br>!</td>
            <td>Negate, not</td>
            <td>right</td>
        </tr>
        <tr>
            <td>++<br>--</td>
            <td>Increment, decrement</td>
            <td>right</td>
        </tr>
        <tr>
            <td>(...)</td>
            <td>Inline sequence</td>
            <td>left</td>
        </tr>
        <tr>
            <td>(...)<br>[...]<br>.</td>
            <td>Call parameters, subscript, attribute</td>
            <td>left</td>
        </tr>
    </tbody>
</table>

Operators produce different results depending on the data-types of their operands. For example, `3 * 10` multiplies 10 by 3, whereas `3 * "test"` creates a new string repeating "test" 3 times. Try out the results of different operands in a Tokay REPL for clarification.
