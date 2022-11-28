(() => {

    abstract class Hero {
        constructor(
            public name: string,
            public power: string,
        ){}
    };

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

    const spiderman_2 = ( data: Hero ) => {
        console.log(`${data.name}`)
    };

    spiderman_2(spiderman);

})()