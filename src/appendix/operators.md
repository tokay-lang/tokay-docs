# Appendix B: Operators

Tokay implements the following operators for use in expressions. The operators are ordered by precedence, operators in the same row share the same precedence.

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
            <td>= += -= *= /=</td>
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
            <td>== != < <= >= ></td>
            <td>Equal, unequal, Comparison</td>
            <td>left</td>
        </tr>
        <tr>
            <td>+ -</td>
            <td>Add, subtract</td>
            <td>left</td>
        </tr>
        <tr>
            <td>* /</td>
            <td>Multiply, divide</td>
            <td>left</td>
        </tr>
        <tr>
            <td>- !</td>
            <td>Negate, not</td>
            <td>right</td>
        </tr>
        <tr>
            <td>++ --</td>
            <td>Increment, decrement</td>
            <td>right</td>
        </tr>
        <tr>
            <td>() [] .</td>
            <td>Grouping, subscript, attribute</td>
            <td>left</td>
        </tr>
    </tbody>
</table>

Operators produce different results depending on the data-types of their operands. For example, `3 * 10` multiplies 10 by 3, whereas `3 * "test"` creates a new string repeating "test" 3 times. Try out the results of different operands in a Tokay REPL for clarification.
