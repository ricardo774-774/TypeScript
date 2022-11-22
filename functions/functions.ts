(() => {
    const hero: string = 'Saitama';

    function helloHero():string {
        return `Hello ${hero}`;
    }

    console.log(typeof helloHero);
    console.log(typeof helloHero());

    const callToSaitama = ():string => {
        return `Calling to ${hero}`;
    }

    console.log(typeof callToSaitama);
    console.log(typeof callToSaitama());


})()