/*
 *   Copyright (C) 2017  Stephen BAROAN
 *
 *    The JavaScript code in this page is open source software licensed under MIT license
 *    References about this code and its license, see:
 *
 *    https://github.com/stephen31/maxlength-contenteditable
 *
 */
/* eslint no-use-before-define:0 */

import 'babel-polyfill';

function maxlengthContentEditable() {
  const editableElements = document.querySelectorAll('div[contenteditable="true"]');

  const clipboardEvents = ['copy', 'paste', 'cut'];
  const keyboardEvents = ['keyup', 'keypress', 'keydown', 'blur', 'change'];

  Array.from(editableElements).forEach((element) => {
    clipboardEvents.forEach((clipboardEvent) => {
      element.addEventListener(clipboardEvent, clipboardEventHandler);
    });
    keyboardEvents.forEach((keyboardEvent) => {
      element.addEventListener(keyboardEvent, generalEventKeyHandler);
    });
  });

  /**
     *callback for 'cut', 'copy' , 'paste' events
     *this function will prevent the basic behavior
      of an event if the size of the text present in the element
      plus the size of the text present in the clipboard exceeds exceeds the maxlength alowed
     * @param {any} event
     */
  function clipboardEventHandler(event) {    
    // IE
    if (window.clipboardData) {
      if (window.clipboardData.getData('Text').length + this.textContent.length > this.dataset.maxLength) {
        event.preventDefault();
      }
    }
    // Chrome , Firefox
    if (event.clipboardData) {
      if (event.clipboardData.getData('Text').length + this.textContent.length > this.dataset.maxLength && event.keyCode !== 8) {
        event.preventDefault();
      }
    }
  }
  /**
     *callback for 'keyup', 'keypress', 'keydown', 'blur', 'change' events
     *this function will prevent the basic behavior
      of an event if the size of the text present in the element
      plus the size of the character typed exceeds the maxlength alowed
     * @param {any} event
     */
  function generalEventKeyHandler(event) {    
    if (this.dataset.maxLength && this.textContent.length == this.dataset.maxLength &&
      !isAllowedKeyCode(event)
    ) {
      event.preventDefault();
    }
  }
  /**
   * Check if a keycode is allowed when max limit is reached
   * 8 : Backspace
   * 37: LeftKey
   * 38: UpKey
   * 39: RightKey
   * 40: DownKey
   * ctrlKey for control key
   * metakey for command key on mac keyboard
   * @param {any} eventKeycode
   * @returns boolean
   */
  function isAllowedKeyCode(event) {
    return event.keyCode === 8 ||
      event.keyCode === 38 ||
      event.keyCode === 39 ||
      event.keyCode === 37 ||
      event.keyCode === 40 ||
      event.ctrlKey ||
      event.metaKey;
  }
}

export {
  maxlengthContentEditable
};
