(() => {
    class athlete {
        constructor(
            public name: string,
            public age: number,
        ) {
            console.log('Constructor athlete called');
        }

        protected getData() {
            return `Name: ${this.name} and Age: ${this.age}`;
        }
    };

    class athleteSoccer extends athlete {
        constructor(
            name: string,
            age: number,
            public goldenBall: boolean,
        ){
            super(name, age)
            console.log('Constructor soccer athlete called');
        }

        get getName() {
            return `My name is ${this.name}`;
        }

        set setName( name: string ) {
            if(name.length < 3) {
                throw new Error('The name must have more than 3 letters');
            }
            this.name = name;
        }

        public getDataSoccer() {
            console.log( this.getData() );
        }

    };

    const messi = new athleteSoccer('Messi', 30, true);

    messi.setName = 'Pele';
    console.log(messi.getName);


})()