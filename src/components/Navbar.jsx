import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between p-8 bg-black text-white mb-0'>

    <div className="mb-2 sm:mb-0">
    <h1 className=' font-semibold text-xl'>Art Gallery</h1>
    </div>

    <div className='flex space-x-2'>
      <Link className='rounded-lg bg-gray-200 hover:bg-gray-400 text-black p-1 px-4' to='/'>Home</Link>
      <Link className='rounded-lg bg-gray-200 hover:bg-gray-400 text-black p-1 px-4' to='/form'>Form</Link>
      </div>

    </nav>
  );
};

export default Navbar;
