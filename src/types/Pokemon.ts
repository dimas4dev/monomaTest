export interface Pokemon {
    id: number;
    name: string;
   types: { type: { name: string } }[];
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
}

export interface PokemonData {
    pokemonData: Pokemon[];
    nextPage: string | null;
    prevPage: string | null;
}
