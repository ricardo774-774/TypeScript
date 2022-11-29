(() => {

    // una interface para una funcion nos ayuda para que resiva 
    // o retorne valores que nosotros deseamos 

    interface addTwoNubers {
        (a: number, b: number): number;
    }

    let addNumberFunction: addTwoNubers = (
        a: number,
        b: number,
    ) => {
        return 20;
    }

}) ()