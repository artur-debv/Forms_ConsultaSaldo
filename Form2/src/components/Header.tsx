import React from 'react';
import logoJcsx from '../assets/logoJcsx.svg';

export const Header = () => {
    return (
        <div className="hidden md:flex fixed top-0 left-0 right-0 bg-black text-white py-4 px-6 shadow-lg z-50 justify-center items-center">
            <img src={logoJcsx} alt="Logo JCSx" className="w-15 h-15" />
        </div>
    );
};

export default Header;
