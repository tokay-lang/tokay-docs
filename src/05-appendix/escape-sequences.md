# Appendix E: Escape sequences

Escape sequences can be used inside of strings, match/touch tokens and character-classes to encode any unicode character. They are introduced with a backslash.

Escape-sequences should be used to simplify the source code and its readability, but any unicode character can also be directly expressed.

<table>
    <thead>
        <tr class="title">
            <th>
                Sequence
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
            <td>\a \b \f \n \r \t \v</td>
            <td>Bell (alert), backspace, formfeed, new line, carriage return, horizontal tab, vertical tab, </td>
            <td>"\a\b\f\n\r\t\v"</td>
        </tr>
        <tr>
            <td>\' \" \\</td>
            <td>Quotation marks, backslash</td>
            <td>"\'\"\\"  # '"\</td>
        </tr>
        <tr>
            <td>\ooo</td>
            <td>ASCII character in octal notation</td>
            <td>"\100"  # @</td>
        </tr>
        <tr>
            <td>\xhh</td>
            <td>ASCII character in hexadecimal notation</td>
            <td>"\xCA"  # Ê</td>
        </tr>
        <tr>
            <td>\uhhhh</td>
            <td>16-Bit Unicode character in hexadecimal notation</td>
            <td>"\u20ac"  # €</td>
        </tr>
        <tr>
            <td>\Uhhhhhhhh</td>
            <td>32-Bit Unicode character in hexadecimal notation</td>
            <td>"\U0001F98E"  # 🦎</td>
        </tr>
    </tbody>
</table>
