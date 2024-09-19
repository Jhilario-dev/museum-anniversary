import React from 'react';
import Gallery from '../components/Gallery';
import { museumData } from '../data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Museum = () => {
  return (
    <div className="museum">
      {/* {museumData.map((gallery) => (
        <Gallery key={gallery.id} title={gallery.title} photos={gallery.photos} />
      ))} */}
    </div>
  );
};

export default Museum;