(() => {
    const batman:string = 'Batman'; 
    const linternaVerde:string = "Linterna Verde"
    const flash:string = `Flash`

    const abc:number = 123;

    console.log(`I'am ${flash} ${abc.toString()}`);

    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'Batman does not have 11 letters');
})()