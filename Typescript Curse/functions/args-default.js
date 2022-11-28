"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '"not underwritten"'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '"not underwritten"'}`.toLowerCase();
        }
    };
    const name = fullName('Ricardo', 'Velez', true);
    console.log(name);
})();
//# sourceMappingURL=args-default.js.map