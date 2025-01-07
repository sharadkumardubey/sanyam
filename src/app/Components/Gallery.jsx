import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';

const imageList = [
  { image: '/images/C1.jpeg' },
  { image: '/images/C2.jpeg' },
  { image: '/images/C3.jpeg' },
  { image: '/images/C4.jpeg' },
  { image: '/images/C5.jpeg' },
  { image: '/images/C6.jpeg' },
  { image: '/images/C7.jpeg' },
  { image: '/images/C8.mp4' },
  { image: '/images/C9.jpeg' },
  { image: '/images/C10.jpeg' },
];

const Gallery = (props) => {
  return (
    <div className='bg-flower-card'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold text-white'>
            My <span className='text-orange-500'>Gallery</span>
          </h2>
        </div>
        <div className='flex overflow-auto my-6'>
          {imageList.map((item) => (
            <Cards key={item} cardItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {};

export default Gallery;
