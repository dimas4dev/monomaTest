import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PLogo from '../../assets/images/PokemonLogo.png';
import UserLogo from '../../assets/images/avatar-de-usuario.png';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800">
            <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
                <div>
                    <Link to="/">
                        <img src={PLogo} alt="Logo Pokemon" className="h-8" />
                    </Link>
                </div>
                <div className="flex items-center">
                    <ul className="flex items-center space-x-4">
                        <li>
                            <Link to="/" className="text-white hover:text-gray-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <img
                                src={UserLogo}
                                alt=""
                                onClick={handleMenuToggle}
                                className="cursor-pointer"
                            />
                            {isMenuOpen && (
                                <ul className="absolute top-12 right-0 bg-white text-gray-800 rounded-md shadow-md">
                                    <li className="px-4 py-2">Cerrar Sesión</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
