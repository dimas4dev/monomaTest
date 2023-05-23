import React, { useEffect, useState } from "react";


import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Button from "../../components/PokemonButton";

import { getPokemons } from "../../services/getPokemons";
import { Pokemon } from "../../types/Pokemon";
import { URL } from "../../constants";

const Home: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [prevPage, setPrevPage] = useState<string | null>(null);


    async function fetchPokemons(Url: string = URL) {
        console.log("Click");

        try {
            const { pokemonData, nextPage, prevPage } = await getPokemons(Url);
            setPokemons(pokemonData); // Actualiza la variable de estado con los datos obtenidos
            setNextPage(nextPage);
            setPrevPage(prevPage);
        } catch (error) {
            console.error("Error al obtener los pokemons:", error);
        }
    }

    useEffect(() => {
        fetchPokemons();

    }, []);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        console.log("Click Modal");

        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    return (
        <>
            <Header />
            <section className="home">
                <h1 className="home-heading">Pick your Pokemon</h1>
                <div className="home-container">
                    {pokemons?.map((pokeCard: Pokemon, index: number) => {
                        return (
                            <Card
                                {...pokeCard}
                                key={index}
                                handleOpenModal={handleOpenModal}
                                handleCloseModal={handleCloseModal}
                                isModalOpen={isModalOpen}
                            />
                        );
                    })}
                </div>
                <div className="home-pagination">
                    {prevPage && <Button textButton="Previous" styleClass="home-btn" onClick={() => fetchPokemons(prevPage)} />}
                    {nextPage && <Button textButton="Next" styleClass="home-btn" onClick={() => fetchPokemons(nextPage)} />}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
