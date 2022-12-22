import axios from "axios";
import { Pokememon } from "../interfaces";

export const getPokemonById = async( id: number ): Promise<Pokememon> => {

    const { data } = await axios.get<Pokememon>(`https://pokeapi.co/api/v2/pokemon/${ id }`);
    // console.log( data.abilities[0].ability.name );
    
    return data;
}