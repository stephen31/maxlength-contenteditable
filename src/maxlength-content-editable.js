/*
 *   Copyright (C) 2017  Stephen BAROAN
 *
 *    The JavaScript code in this page is open source software licensed under MIT license
 *    References about this code and its license, see:
 *
 *    https://github.com/stephen31/maxlength-contenteditable
 *
 */

function maxlengthContentEditable() {

    const editableElements = document.querySelectorAll('div[contenteditable="true"]');

    const clipboardEvents = ['copy', 'paste', 'cut'];
    const keyboardEvents = ['keyup', 'keypress', 'keydown', 'blur', 'change'];

    for (let element of editableElements) {
        for (let event of clipboardEvents) {
            element.addEventListener(event, clipboardEventHandler);
        }

        for (let event of keyboardEvents) {
            element.addEventListener(event, generalEventKeyHandler);
        }
    }
    /**
     *callback for 'cut', 'copy' , 'paste' events
     *this function will prevent the basic behavior
      of an event if the size of the text present in the element
      plus the size of the text present in the clipboard exceeds exceeds the maxlength alowed
     * @param {any} event
     */
    function clipboardEventHandler(event) {
        //IE
        if (window.clipboardData) {
            if (window.clipboardData.getData('Text').length + this.textContent.length > this.dataset.maxLength) {
                event.preventDefault();
            }
        }
        //Chrome , Firefox
        if (event.clipboardData) {
            if (event.clipboardData.getData('Text').length + this.textContent.length > this.dataset.maxLength && event.keyCode != 8) {
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
        if (this.dataset.maxLength && this.textContent.length == this.dataset.maxLength && event.keyCode != 8 && !event.ctrlKey) {
            event.preventDefault();
        }
    }

}

export {maxlengthContentEditable};