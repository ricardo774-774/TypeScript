(() => {

    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: (number | string | Hero) = 'Ricardo';
    console.log(myCustomVariable); 

    myCustomVariable = 45;
    console.log(myCustomVariable); 

    myCustomVariable = {
        name: 'Brus',
        age: 43,
        powers: ['Doesn´t have']
    };
    console.log(myCustomVariable); 

})()