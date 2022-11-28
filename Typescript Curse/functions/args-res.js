"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const name = fullName('Ricardo', 'Velez', 'Calderon');
    console.log({ name });
})();
//# sourceMappingURL=args-res.js.map