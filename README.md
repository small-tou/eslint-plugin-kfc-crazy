# eslint-plugin-kfc-crazy

a lint for KFC Crazy Thursday

## Feature list

- [x] KFC Crazy every Thursday

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-kfc-crazy`:

```
$ npm install eslint-plugin-kfc-crazy --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-kfc-crazy` globally.

## Usage

Add `kfc-crazy` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["kfc-crazy"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "kfc-crazy/kfc-crazy": "error"
  }
}
```

## Supported Rules

- Fill in provided rules here
