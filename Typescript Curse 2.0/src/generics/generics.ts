

export const printObject = ( parameter: any ) => {
    console.log(parameter);
}

export function genericFunction<T>( argument: T ): T {
    return argument;
}

export const genericArrowFunction = <T> ( argument: T ): T => {
    return argument;
}