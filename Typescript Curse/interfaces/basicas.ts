(() => {

    interface Hero {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barri Alen',
        age: 24,
        powers: ['Super Speed', 'Time Travel']
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 30,
        powers: ['All Powers'],
        getName(): string{
            return this.name;
        }
    }


})()