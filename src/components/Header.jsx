import React from 'react';

const Header = () => {
  return (
    <div className="grid w-full h-32 grid-cols-2  md:w-1/2 md:h-1/2">
      <span className="flex items-center text-2xl font-bold pl-16 ml-12 md:text-5xl">CrewTechno</span>
      <ul className="flex items-center justify-center">
        <li className="mx-6 cursor-pointer text-orange-500">Beranda</li>
        <li className="mx-6 cursor-pointer ">Tentang</li>
        <li className="mx-6 cursor-pointer ">Jasa</li>
        <li className="mx-6 cursor-pointer border-gray-800 px-4 py-2 border-solid border-2 border-pink-500 rounded-md">Kontak</li>
      </ul>
    </div>
  );
};

export default Header;
