import React, { useState } from 'react';

import cardFormater from '../../utils/formaters/cardFormatter';
import Modal from '../Modal';

interface CardProps {
    id: number;
    name: string;
    types: { type: { name: string } }[];
    height: number;
    weight: number;
    sprites: { front_default: string };

}

const Card: React.FC<CardProps> = ({
    id,
    name,
    types,
    height,
    weight,
    sprites,

}) => {

    const typePokemon = types[0].type.name;
    const pokemonImage = sprites.front_default;
    const pokemonWeight = weight / 10;
    const heightPokemonMeters = height / 10;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (<>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className="containerPoke" onClick={handleOpenModal}>
                <div className={`card card-modal ${cardFormater(typePokemon)}`}>
                    <div className="card-front">
                        <div className="card-image">
                            <img src={pokemonImage} alt="Pokemon 1" />
                        </div>
                        <div className="card-body">
                            <p className="card-name">{`${id}. ${name}`}</p>
                        </div>
                    </div>
                    <div className="card-back">
                        <div className="card-body">
                            <p className="back-name">{`${id}. ${name}`}</p>
                            <div className="back-info">
                                <p className="back-text">
                                    <span>Height:</span> {heightPokemonMeters} m
                                </p>
                                <p className="back-text">
                                    <span>Weight:</span> {pokemonWeight} Kg
                                </p>
                                <p className="back-text">
                                    <span>Type:</span> {typePokemon}
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </Modal>
        <div className="containerPoke" onClick={handleOpenModal}>
            <div className={`card ${cardFormater(typePokemon)}`}>
                <div className="card-front">
                    <div className="card-image">
                        <img src={pokemonImage} alt="Pokemon 1" />
                    </div>
                    <div className="card-body">
                        <p className="card-name">{`${id}. ${name}`}</p>
                    </div>
                </div>

            </div>
        </div>
    </>
    );
};

export default Card;
