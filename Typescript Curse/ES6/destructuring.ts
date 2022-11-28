(() => {

    //////////////// Ej.1 ///////////////////
    const family = {
        mother: 'Ma Josefina',
        pather: 'Rafale V.',
        brother: 'Robet',
        me: 'Ricardo',
        liveInHome: true,
        house: 774
    }

    const { me, house } = family;

    console.log( me.toUpperCase(), house.toFixed(2));

    type Family = {
        mother: string;
        pather: string;
        brother: string;
        me: string;
        liveInHome: boolean;
        house: number;
    }

    const printFamily = ( { liveInHome, ...resto }: Family ) => {
        console.log(resto);
    }

    printFamily(family);

    //////////////// Ej.2  ///////////////////

    const brosArr: string[] = ['Rafa', 'Robert', 'Ricardo', 'Belen'];

    //Las comas te ayudan a establecer el valor de un array especifico.
    const [ , robert, , belen] = brosArr;

    console.log(robert, belen);

    ///////////////////////////////////

})()