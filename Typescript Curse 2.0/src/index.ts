import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// Testear que no es expandoble la clase.
//(Pokemon.prototype as any).customName = 'Pikachu';

// charmander.savePokemon(1);

charmander.publicApi = 'https://ricardovelezcalderon.com'

console.log(charmander);