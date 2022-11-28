"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName || !lastName) {
            throw new Error('Required name');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Ricardo', 'Velez');
    console.log(name);
})();
//# sourceMappingURL=args-required.js.map