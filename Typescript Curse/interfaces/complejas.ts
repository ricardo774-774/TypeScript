(() => {

    // metodo de address anidado no recomendable //
    interface Client {
        name: string;
        age: number;
        address: {
            id: number;
            street: string;
            country: string;
        }
    }

    // datos del metodo de address anidado no recomendable
    const client: Client = {
        name: 'Ricardo',
        age: 20,
        address: {
            id: 774,
            street: 'Real de los cafetos',
            country: 'Mexico'
        },
    }

    // metodo de address recomendable //
    // se recomienda poner primero las interfaces pricipales,
    // en este caso Client2 y luego Address.
    interface Client2 {
        name: string;
        age: number;
        address: Address;
    }

    interface Address {
        id: number;
        street: string;
        country: string;
    }

    const client2: Client2 = {
        name: 'Ricardo',
        age: 20,
        address: {
            id: 774,
            street: 'Real de los cafetos',
            country: 'Mexico'
        },
    }



}) ()