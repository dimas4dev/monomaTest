export interface Pokemon {
    id: number;
    name: string;
    types: string[];
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
    cantPoke?: number;
}

export interface PokemonData {
    pokemonData: Pokemon[];
    nextPage: string | null;
    prevPage: string | null;
}
