"use strict";
var validations;
(function (validations) {
    validations.validateText = (text) => {
        return (text.length > 3)
            ? true
            : false;
    };
    const validateDate = (myDate) => {
        return (typeof (myDate) == "number")
            ? true
            : false;
    };
})(validations || (validations = {}));
console.log(validations.validateText('Ricardo'));
//# sourceMappingURL=main.js.map