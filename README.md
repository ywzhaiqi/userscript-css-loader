# Userscript CSS loader for webpack

Inject a CSS file in the DOM with the greasemonkey function `GM_addStyle`.
Useful for loading a simple CSS file without embedding both `css-loader` and `style-loader` in your userscript.

## Installation

`npm install --save-dev userscript-css-loader`

## 修改说明

1. 增加判断 `GM_addStyle` 不存在的情况


## Usage

```js
// ==UserScript==
// @name           Example userscript
// @grant          GM_addStyle
// ==/UserScript==

require('userscript-css!./style.css');
```
