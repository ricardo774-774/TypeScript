(() => {
    
    class Apocalipsis {

        static instance:Apocalipsis;

        private constructor( public name: string ) {

        }

        static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis');
            }
            return Apocalipsis.instance;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();


    console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})()