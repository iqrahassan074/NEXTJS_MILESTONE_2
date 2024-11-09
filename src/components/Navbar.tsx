import React, { useState } from 'react';
import { BiFoodMenu, BiX } from 'react-icons/bi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='neon text-xl font-medium' data-aos="flip-left">🌼</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
          <li className='menuLink'><a href='#home'>HOME</a></li>
          <li className='menuLink'><a href='#about'>ABOUT</a></li>
          <li className='menuLink'><a href='#skills'>SKILLS</a></li>
          <li className='menuLink'><a href='#contact'>CONTACT</a></li>
        </ul>
        <div className='md:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <BiX size={30}/> : <BiFoodMenu size={30}/>}
        </div>
      </div>
      {isMenuOpen && (
        <ul className='flex flex-col gap-4 mt-4 md:hidden'>
          <li className='menulink'>
            <a href="#home" onClick={toggleMenu}>HOME</a>
          </li>
          <li className='menulink'>
            <a href="#about" onClick={toggleMenu}>ABOUT</a>
          </li>
          <li className='menulink'>
            <a href="#skills" onClick={toggleMenu}>SKILLS</a>
          </li>
          <li className='menulink'>
            <a href="#contact" onClick={toggleMenu}>CONTACT</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
