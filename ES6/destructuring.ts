(() => {

    type Family = {
        mother: string;
        pather: string;
        brother: string;
        me: string;
        actives: boolean;
        house: number;
    }

    const family = {
        mother: 'Ma Josefina',
        pather: 'Rafale V.',
        brother: 'Robet',
        me: 'Ricardo',
        actives: true,
        house: 774
    }

    const { me, house } = family;

    console.log( me.toUpperCase(), house.toFixed(2));

    const printFamily = ( { actives, ...resto }: Family ) => {
        console.log(resto);
    }

    printFamily(family);

    const brosArr: string[] = ['Rafa', 'Robert', 'Ricardo', 'Belen'];

    //Las comas te ayudan a establecer el valor de un array especifico.
    const [ , robert, , belen] = brosArr;

    console.log(robert, belen);

})()