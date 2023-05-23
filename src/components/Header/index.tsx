import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PLogo from '../../assets/images/PokemonLogo.png';

const Header: React.FC = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
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
                            <Link to="/store" className="text-white hover:text-gray-300">
                                Store
                            </Link>
                        </li>
                    </ul>
                    <div
                        className="ml-4 cursor-pointer text-white hover:text-gray-300"
                        onClick={handleClick}
                    >
                        {click ? (
                            <i className="fas fa-times"></i>
                        ) : (
                            <i className="fas fa-bars"></i>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;