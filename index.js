const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.json']
            }
        },
        'import/extensions': [
            '.js',
            '.mjs',
            '.jsx',
        ],
        'import/core-modules': [
        ],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },
    "ignorePatterns": ["node_modules/"], // .eslintignore
    "rules": {
        "prettier/prettier": 2,
        "no-unused-vars": 2,
        "arrow-body-style": 0,
        "no-console": 1,
        "no-var-requires": 0,
        "no-var": 1,
        "no-shadow": 2,
        "curly": 1,
        "no-empty": 2,
        "no-return-await": 2,
        "default-case": 1,
        "camelcase": ["error", {
            "properties": "never"
        }],
        "max-params": ["error", 3],
        "no-empty-function": 1,
        "no-await-in-loop": 2,
        "strict": ['error', 'never'],
        "no-restricted-globals": ['error'].concat(restrictedGlobals),
        "no-restricted-properties": ['error', {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated',
        }, {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            }, {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            }, {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            }]
    }
}