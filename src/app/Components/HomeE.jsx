import React from 'react';
import PropTypes from 'prop-types';

const HomeE = (props) => {
  return (
    <div className='m-4 flex flex-col content-between items-center'>
      <span className='border-2 border-slate-800 rounded-2xl font-bold px-6 m-1 mt-8 py-1 animate-bounce'>
        Hello!
      </span>
      <h1 className='flex justify-center items-center flex-col text-6xl font-extrabold m-8 text-center'>
        <span className='flex items-center'>
          I'm&nbsp;<span className='text-orange-500'>Manisha</span>,
        </span>
        <span className='block mt-8'>Counselor Psychologist</span>
      </h1>
      <div className='content-between flex mx-4 mt-12'>
        <blockquote className='flex-1 text-base italic font-semibold'>
          <svg
            className='w-8 h-8 text-gray-400 dark:text-gray-600 mb-4'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 18 14'
          >
            <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
          </svg>
          <p>
            As a counselor psychologist, my approach is rooted in empathy and
            understanding, ensuring my clients feel heard and supported
            throughout their journey.
          </p>
          <p>Highly Recommended.</p>
        </blockquote>
        <div className='flex-1 bg-gradient-to-r from-white to-orange-400 p-12 rounded-tl-full rounded-tr-full flex items-center justify-center'>
          <button className='text-slate-800 text-lg font-bold backdrop-filter backdrop-blur-sm bg-white/30 rounded-2xl py-4 pl-2 pr-4 border-2 border-gray-400 hover:bg-white/20'>
            <span className='bg-orange-500 text-white hover:bg-orange-600 rounded-2xl my-1 mr-2 p-3'>
              My Portfolio ↗️
            </span>
            Hire me
          </button>
        </div>

        <div className='flex-1 flex flex-col items-end mt-8'>
          <div className='flex'>
            {Array(5)
              .fill('')
              .map((_, index) => (
                <svg
                  key={index}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='orange'
                  className='w-6 h-6'
                >
                  <path d='M12 .587l3.668 7.476 8.2 1.192-5.934 5.787 1.4 8.172L12 18.897l-7.334 3.846 1.4-8.172L.132 9.255l8.2-1.192L12 .587z' />
                </svg>
              ))}
          </div>
          <div className='text-center'>
            <p className='text-4xl font-bold mt-2'>{`${
              new Date().getFullYear() - 2020
            } Years`}</p>
            <p className='text-xl'>Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeE.propTypes = {};

export default HomeE;
