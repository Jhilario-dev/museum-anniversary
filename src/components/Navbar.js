import React from 'react';
import { Link } from 'react-router-dom';
import { museumData } from '../data';

const Navbar = () => {
  return (
    <nav>
      <ul>
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