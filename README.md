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

## ScreenShot

![image](https://user-images.githubusercontent.com/897401/186560345-1b64a066-9dd4-46cc-9861-ff616a0f871d.png)

