(() => {

    //El tipo de dato que definas en el una posicion no 
    //puede ser cambiado por otro tipo de dato en la misma posicion

    const hero: [string, number, boolean] = ['Doctor Strange', 100, true];

    hero[0] = 'IronMan';
    hero[1] = 200;
    hero[2] = false;

    console.log(hero);
})()