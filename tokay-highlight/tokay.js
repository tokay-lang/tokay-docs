/*
Language: Tokay
Author: Jan Max Meyer <jmm@phorward.de>
Website: https://tokay.dev
Description: language definition for Tokay programs
*/

function hljs_tokay(hljs) {
    const KEYWORDS = [
        "accept",
        "begin",
        "break",
        "continue",
        "else",
        "end",
        "exit",
        "expect",
        "for",
        "if",
        "in",
        "loop",
        "next",
        "not",
        "peek",
        "push",
        "reject",
        "repeat",
        "return",
    ];

    const LITERALS = [
        "true",
        "false",
        "void",
        "null",
    ];

    const BUILTINS = [
        "Char",
        "Float",
        "Ident",
        "Int",
        "Name",
        "Number",
        "Word",
    ];

    const TYPES = [
        "bool",
        "dict",
        "list",
        "str",
        "int",
        "float",
    ];

    return {
        name: "Tokay",
        aliases: ["tok"],
        keywords: {
            keyword: KEYWORDS.join(" "),
            literal: LITERALS.join(" "),
            built_in: BUILTINS.join(" "),
            type: TYPES.join(" "),
        },
        contains: [
            hljs.HASH_COMMENT_MODE,
            hljs.QUOTE_STRING_MODE,
            // Variables & Captures
            {
                className: "variable",
                variants: [
                    {
                        begin: /\$[\w\d_]+/
                    },
                    //{
                    //    begin: /\b[a-z][\w\d_]*/
                    //}
                ]
            },
            // Constants
            //{
            //    className: "variable.constant",
            //    begin: /\b[_A-Z][\w\d_]*/
            //},
            // Match & Touch & CCL
            {
                className: "regexp",  // <-- this is only the css class used.
                begin: '\'\'',
                end: '\'\'',
                illegal: '\\n',
                contains: [hljs.BACKSLASH_ESCAPE]
            },
            {
                className: "regexp",  // <-- this is only the css class used.
                begin: '\'',
                end: '\'',
                illegal: '\\n',
                contains: [hljs.BACKSLASH_ESCAPE]
            },
            // Numbers
            hljs.NUMBER_MODE,
        ]
    };
}

hljs.registerLanguage("tokay", hljs_tokay);
