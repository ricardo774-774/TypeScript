(() => {

    const fullName = (firstName: string, ...restArgs: string[]): string => {
        //join separa por palaba con algun valor o espacio
        return `${firstName} ${restArgs.join(' ')}`
    }

    const name = fullName('Ricardo', 'Velez', 'Calderon',);

    console.log({name});


})()