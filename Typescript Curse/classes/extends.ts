(() => {
    // clase padre
    class athlete {
        // atributos 
        constructor(
            public name: string,
            public age: number,
        ) {
            console.log('Constructor athlete called');
        }
        // protected solo nos permite utilizar dentro de la clase o sus hijos, no fuera
        protected getData() {
            return `Name: ${this.name} and Age: ${this.age}`;
        }
    };
    // clase que hereda de athlete
    class athleteSoccer extends athlete {
        // constructor clase hijo
        constructor(
            name: string,
            age: number,
            public goldenBall: boolean,
        ){
            // datos clase padre
            super(name, age)
            console.log('Constructor soccer athlete called');
        }

        // tiene que retornar algo
        get getName() {
            return `My name is ${this.name}`;
        }

        // solo puede resivir un valor 
        // no tiene que retornar nada
        set setName( name: string ) {
            // evalua si el nombre es menor a 3
            if(name.length < 3) {
                throw new Error('The name must have more than 3 letters');
            }
            this.name = name;
        }
        // llama al metodo de su padre
        public getDataSoccer() {
            console.log( this.getData() );
        }

    };

    const messi = new athleteSoccer('Messi', 30, true);

    messi.setName = 'Pele';
    console.log(messi.getName);


})()