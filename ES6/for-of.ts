(() => {

    type Avenger = {
        name: string,
        power: string,
    }

    const iroman: Avenger = {
        name: 'Tony',
        power: 'Armorsuit'
    }

    const spiderman: Avenger = {
        name: 'Pether',
        power: 'Spider powers'
    }

    const hulk: Avenger = {
        name: 'Brus',
        power: 'Armorsuit'
    }

    const avengers: Avenger[] = [iroman, spiderman, hulk];
    
    for (const avenger of avengers) {
        console.log(avenger);
        console.log(avenger.name, avenger.power);
    }

})()