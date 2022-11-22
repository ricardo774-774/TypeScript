(() => {

    class Naruto {
        name;
        lastName;

        constructor(name = 'No name', lastName = 'No lastname') {
            this.name = name,
            this.lastName = lastName
        }
    }

    class Naruto2 extends Naruto {
        power;

        constructor(name, lastName) {
            super(name, lastName)
            this.power = true;
        }
    }

    const saske = new Naruto('Saske','Huchiha');
    const naruto = new Naruto2('Naruto','Usumaki');

    console.log(saske);
    console.log(naruto);

})()