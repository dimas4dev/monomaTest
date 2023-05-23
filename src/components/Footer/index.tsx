import React from "react";
import PokemonsLogo from "../../assets/images/PokemonLogo.svg";

const Footer: React.FC = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const nameMonth = month[date.getMonth()];

    return (
        <footer className="footer" data-test="footer">
            <img className="footer-img" src={PokemonsLogo} alt="logo" />
            <p className="footer-paragraph--description">
                The pokedex at your fingertips
            </p>
            <p className="footer-paragraph--date">
                {nameMonth} {year}
            </p>
        </footer>
    );
};

export default Footer;
