"use strict";
(() => {
    const hero = 'Saitama';
    function helloHero() {
        return `Hello ${hero}`;
    }
    console.log(typeof helloHero);
    console.log(typeof helloHero());
    const callToSaitama = () => {
        return `Calling to ${hero}`;
    };
    console.log(typeof callToSaitama);
    console.log(typeof callToSaitama());
})();
//# sourceMappingURL=functions.js.map