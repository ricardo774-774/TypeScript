////////////////////////////////////////////////////////////
// import * as HeroClasses from "./classes/hero";
// import powers, { Power } from './data/powers';

import { genericFunction } from "../generics/generics";
import { Villain } from "../interfaces";

// poner en test para recordar algunas cosas 
/* 
import { Hero } from './classes/hero';
import { printObject, genericArrowFunction } from './generics/generics';
const iroman: Hero = new Hero('Ironman', 1, 30);

console.log(iroman);
console.log(iroman.power);
*/

// const iroman: HeroClasses.Hero = new HeroClasses.Hero('Ironman', 120, 30);


// for (const power of powers) {
//     console.log(power);
// }

//////////////////////////////////////////////////////////




// printObject( 123 );
// printObject( '123' );
// printObject( new Date('2002-10-28') );
// printObject( {a: 3, b:4, c: 5} );
// printObject( true );
 
// console.log( genericFunction(3.1416).toFixed(2) );
// console.log( genericFunction('Hello world').split(" "));
// console.log( genericFunction(new Date()).getDate);

// const deadpool = {
//     name: 'Deadpool',
//     realName: 'Wide Winston',
//     dangerLevel: 130
// }

// console.log( genericFunction<Villain>(deadpool) );


//////////////////////////////////////////////////////////
// ejemplo con get pokemon

// import { getPokemonById } from './generics/get-pokemon';

// getPokemonById(2)
//   .then(pokemon => console.log( pokemon.sprites.back_default ))
//   .catch(err => console.log(err))
//   .finally( () => console.log('Thanks for using the program'));