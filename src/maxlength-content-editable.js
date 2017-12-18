

function maxlengthContentEditable() {

    const editableElements = document.querySelectorAll('div[contenteditable="true"]');
    
    editableElements.forEach((elem) => {
    
        ['copy', 'paste', 'cut'].forEach((event) => {
            elem.addEventListener(event, clipboardEventHandler);
        });
    
        ['keyup', 'keypress', 'keydown', 'blur', 'change'].forEach((event) => {
            elem.addEventListener(event, generalEventKeyHandler);
        });
    
    });
    
    function clipboardEventHandler(event) {
        //IE
        if (window.clipboardData) {
            if(window.clipboardData.getData('Text').length + this.textContent.length > this.dataset.maxLength){
                event.preventDefault();
            }
        }
        //Chrome , Firefox
        if(event.clipboardData) {
            if(event.clipboardData.getData('Text').length + this.textContent.length > this.dataset.maxLength  && event.keyCode != 8){
                event.preventDefault();
            }
        }
    }
    
    function generalEventKeyHandler(event) {
        if(this.dataset.maxLength && this.textContent.length == this.dataset.maxLength && event.keyCode != 8) {
            event.preventDefault();
        }
    }
    
}

export {maxlengthContentEditable};  