'use client';
import Image from 'next/image';
import About from './Components/About';
import Service from './Components/Service';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import HomeE from './Components/HomeE';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const navigationData = [
  {
    label: 'Home',
    location: '#home',
  },
  {
    label: 'About',
    location: '#about',
  },
  {
    label: 'Service',
    location: '#service',
  },
  {
    label: (
      <>
        <Image
          src='/sanyamcover.png'
          width={200}
          height={100}
          priority={false}
          alt='Sanyam cover'
        />
      </>
    ),
    location: '#home',
  },
  {
    label: 'Resume',
    location: '#resume',
  },
  {
    label: 'Gallery',
    location: '#gallery',
  },
  {
    label: 'Contact',
    location: '#contact',
  },
];
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <main className='flex min-h-screen flex-col p-5 md:mx-20'>
      <nav className='bg-black text-white p-1 mx-auto rounded-full justify-between items-center hidden md:flex w-full z-10'>
        {navigationData.map(({ location, label }) => {
          return (
            <a
              key={location}
              href={location}
              className={`text-sm m-1 ${
                typeof label === 'string' ? 'py-4' : 'py-0'
              } font-bold px-8 transition-colors duration-300 ease-in-out hover:bg-orange-500 rounded-full`}
            >
              {label}
            </a>
          );
        })}
      </nav>
      <nav className='bg-black text-white py-1 px-4 mx-auto rounded-3xl justify-between flex-col md:hidden'>
        <div className='flex justify-between items-center'>
          <Image
            src='/sanyamcover.png'
            width={200}
            height={90}
            priority={false}
            alt='Sanyam cover'
            className='mr-5'
          />

          <div
            onClick={toggleMenu}
            className='text-white text-2xl cursor-pointer'
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}{' '}
          </div>
        </div>

        <div
          className={`flex flex-col  transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          {navigationData
            .filter(({ label }) => typeof label === 'string')
            .map(({ location, label }, index) => (
              <a
                key={index}
                href={location}
                className='text-sm py-2 px-5 transition-colors duration-300 ease-in-out hover:bg-orange-500 rounded-3xl mb-2'
                onClick={toggleMenu}
              >
                {label}
              </a>
            ))}
        </div>
      </nav>
      <div className='min-h-60' id='home'>
        <HomeE />
      </div>
      <div className='min-h-60' id='about'>
        <About />
      </div>
      <div className='min-h-60' id='service'>
        <Service />
      </div>
      <div className='min-h-60' id='gallery'>
        <Gallery />
      </div>
      <div className='min-h-60' id='contact'>
        <Contact />
      </div>
      {/* <div className='min-h-60' id='resume'></div> */}
      <footer className='bg-orange-800 text-white text-center py-2 rounded-md'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Sanyam. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
