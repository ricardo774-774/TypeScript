(() => {

    class Athlete {

        // DEFINICION EN DES-USO
        // private name: string;
        // public country: string;
        // public gender?: string;

        // static son atributos predefinidos 
        static human: boolean = true;
        static getClass() { return `Class name: ${this.name}`}

        // DEFINICION de atributos 
        constructor(
            private name: string, 
            public country: string, 
            public gender?: string,
        ) {}

        public getData() {
            console.log(`Name: ${this.name}`);
            console.log(`Country: ${this.country}`);
            console.log(`Gender: ${this.gender}`);
        }

    }

    const Froning: Athlete = new Athlete('Froning', 'USA', 'Male');
    console.log(Froning);

    Froning.getData();

    console.log(Athlete.getClass());
    

})()