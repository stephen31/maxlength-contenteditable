# Max length plugin for contenteditable HTML attribute

> Simple maxlength plugin validator for contenteditable html attribute, this plugin do not allow you to put more than the specified max length, paste from clipboard is also checked.

### Demo Link

[Demo here](https://stephen31.github.io/maxlength-contenteditable/public/)

## Installation

#### npm

```bash
$ npm install maxlength-contenteditable --save
```
#### yarn
```bash
$ yarn add maxlength-contenteditable --save
```
### unpkg CDN
 You can also skip yarn/npm install by using repos on the cdn 

```html
<script src="https://unpkg.com/maxlength-contenteditable@1.0.0/dist/maxlength-contenteditable.js"></script>
```
###initialize

***you have 3 ways to do it*** :
### CommonJS
```javascript 
var maxlengthContentEditableLib = require('maxlength-contenteditable');
```
### ES6 import
```javascript via 
import {maxlengthContentEditable} from 'maxlength-contenteditable';
```
### Global variable (only if you added the script via CDN in your index.html file)
```javascript
maxlengthContentEditableModule.maxlengthContentEditable();
```

 ### Example of use
```html
<div contenteditable="true" data-max-length="10"></div>
```
### Compatibility

 IE 9+ , Chrome , Firefox , Opera
