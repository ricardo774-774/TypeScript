// Decoradores //

function printToConsole ( constructor: Function ) {
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean ): Function => {
    return (print) 
      ? printToConsole
      : () => {}
}

// Este decorador es para no permitir el expandir la clase Pokemon.
const blokPrototipe = function( constructor: Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

function CheckValidPokemonId() {
    return function( 
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor,
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = ( id: number ) => {
            return (id > 10 || id < 0) 
              ? Error(`Id: ${ id } is not valid`)
              : originalMethod(id);
        }
    }
}

function readOnly( isWriteble: boolean = true ): Function {
    return function( target: any, propertyKey: string ){

        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Ricardo';
            },
            set(this, val) {
                // console.log(this, val);
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWriteble,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }

}

@blokPrototipe
@printToConsoleConditional( false )
export class Pokemon {

    @readOnly(false)
    public publicApi: string = 'https://pokeapi.com'

    constructor(
        public name: string,
    ){}
    
    @CheckValidPokemonId()
    savePokemon( id: number ) {
        console.log(`Pokemon saved with id: ${id}`);
    }


}