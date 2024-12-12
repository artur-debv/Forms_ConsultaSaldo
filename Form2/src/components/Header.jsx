import React from 'react';

export const Header = () => {
  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 bg-black text-white py-4 px-6 shadow-lg z-50">
      <h1 className="text-center text-2xl font-bold">JCSx</h1>
    </div>
  );
};

export default Header;
