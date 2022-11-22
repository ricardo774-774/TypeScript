(() => {

    class Athlete {

        // private name: string;
        // public country: string;
        // public gender?: string;
        static human: boolean = true;
        static getClass() { return `Class name: ${this.name}`}

        constructor(
            private name: string, 
            public country: string, 
            public gender?: string,
        ) {}

        getData() {
            console.log(`Name: ${this.name}`);
            console.log(`Country: ${this.country}`);
            console.log(`Gender: ${this.gender}`);
        }

    };

    const Froning: Athlete = new Athlete('Froning', 'USA', 'Male');
    console.log(Froning);

    Froning.getData();

    console.log(Athlete.getClass());
    

})()