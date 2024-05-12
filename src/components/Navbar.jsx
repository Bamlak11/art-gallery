import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4 bg-black text-white rounded-b-xl mb-4'>

    <div class="mb-2 sm:mb-0">
    <h1>Art Gallery</h1>
    </div>

    <div className='flex space-x-2'>
      <Link className='navlink' to='/'>Home</Link>
      <Link className='navlink' to='/artist'>Artist</Link>
      <Link className='navlink' to='/form'>Form</Link>
      </div>

    </nav>
  );
};

export default Navbar;
