(() => {

    interface Xman {
        name: string;
        age: number;
    }

    interface Human {
        isLive: boolean;
    }

    class Mutant implements Xman, Human {
        public name: string;
        public age: number;
        public isLive: boolean;
    }

    const mutant1: Mutant = {
        name: 'Ricardo',
        age: 20,
        isLive: true
    }

    console.log(mutant1);

}) ()