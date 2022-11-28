"use strict";
(() => {
    class Hero {
        constructor(name, power) {
            this.name = name;
            this.power = power;
        }
    }
    ;
    class Avenger extends Hero {
        helloAveng() {
            return 'Hello from the avengers';
        }
    }
    class Dc extends Hero {
        helloDc() {
            return 'Hello from CD';
        }
    }
    const spiderman = new Avenger('Spiderman', 'Spider');
    console.log(spiderman.helloAveng());
    const batman = new Dc('Batman', 'Money');
    console.log(batman.helloDc());
    const spiderman_2 = (data) => {
        console.log(`${data.name}`);
    };
    spiderman_2(spiderman);
})();
//# sourceMappingURL=main.js.map