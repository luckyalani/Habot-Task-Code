import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import imf from "../Components/Images/image 1.png";


const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: ' Find Suppliers' },
    { id: 2, text: 'Find Service Tags' },


  ];

  const btnitems=['Login/Sign Up'

  ]
  const btn=[...btnitems];

  // for button 
  const thirbtn = btn.length > 0 ? btn[0] : null;

  return (
    <div className='bg-white  flex justify-between items-center h-24  fixed w-full mx-auto px-4 text-black z-40'>
      {/* Logo */}
      <img src={imf} alt="" className="h-8" />
      {/* Desktop Navigation */}
      <ul className='hidden md:flex gap-5'>
        {navItems.map(item => (
          <>
          <li
            key={item.id}
            className='p-1  rounded-xl m-2 cursor-pointer'
          >
            {item.text}
          </li>

          </>
        ))}

{ thirbtn ?  <button className='tracking-wider text-[15px] border border-[#00732F] px-8 py-2 rounded-md text-[#00732F] font-semibold '>
      {thirbtn}
      </button>
      : null

      }
        
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden  '>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden flex flex-col items-center gap-5 left-0 top-0 w-[60%]   h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 '
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
        }
      >
        {/* Mobile Logo */}
        {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4  border border-b-black border-r-0 w-full  border-t-0 border-l-0   hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
        { thirbtn ?  <button className='tracking-wider text-[15px] border border-[#00732F] px-8 py-2 rounded-md text-[#00732F] font-semibold mt-5 md:w-[50%] 
        '>
      {thirbtn}
      </button>
      : null}

      </ul>
    </div>
  );
};

export default Header;