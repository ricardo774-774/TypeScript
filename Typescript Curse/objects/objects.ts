(() => {

    let flash: {name: string, age: number, powers: string[], getName?: () => string} = {
        name: 'Barri Alen',
        age: 24,
        powers: ['Super Speed', 'Time Travel'],
        getName(): string{
            return this.name;
        }
    }

    let superman: {name: string, age: number, powers: string[], getName?: () => string} = {
        name: 'Clark Kent',
        age: 30,
        powers: ['All Powers'],
        // getName(): string{
        //     return this.name;
        // }
    }


})()