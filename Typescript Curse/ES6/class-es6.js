(() => {

    class Naruto {
        // atributos
        name;
        lastName;

                    // valores por default si no se le manda nada
        constructor(name = 'No name', lastName = 'No lastname') {
            // asignacion de valores
            this.name = name,
            this.lastName = lastName
        }
    }

        // Naruto2 hereda de Naruto
    class Naruto2 extends Naruto {
        // atributo nuevo
        power;

        constructor(name, lastName, power) {
            super(name, lastName)
            this.power = power;
        }
    }

    const saske = new Naruto();
    const naruto = new Naruto2('Naruto','Usumaki', 'Rasengan');
    
    console.log(saske);
    console.log(naruto);

})()