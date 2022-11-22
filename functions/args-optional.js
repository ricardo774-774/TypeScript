"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '"not underwritten"'}`;
    };
    const name = fullName('Ricardo');
    console.log(name);
})();
//# sourceMappingURL=args-optional.js.map