import React from 'react';
import { Link } from 'react-router-dom';
import { museumData } from '../data';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li key={'inicio'}>
        <Link to={`/`}>inicio</Link>
        </li>
        {museumData.map((gallery) => (
          <li key={gallery.id}>
            <Link to={`/gallery/${gallery.id}`}>{gallery.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;