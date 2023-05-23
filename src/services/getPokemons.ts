import axios from "axios";
import { URL } from "../constants";

export const getPokemons = async (initialUrl: string = URL) => {
    /**
     * @description
     * Hacer una peticion a la API de pokeapi para obtener todos los pokemons con su informacion realizandolo con Axios
     */

    const request = await axios.get(initialUrl);
    const data = request.data.results;
    const nextPage = request.data.next;
    const prevPage = request.data.previous;
    const links = data.map((elements: { url: string }) => elements.url);
    const getPromisePokemon = links.map((link: string) => axios.get(link));
    const getInformationPokemon = await Promise.all(getPromisePokemon);
    const pokemonData = getInformationPokemon.map(
        (information) => information.data
    );
    return { pokemonData, nextPage, prevPage };
};
