import Image from 'next/image';
import About from './Components/About';
import Service from './Components/Service';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import HomeE from './Components/HomeE';

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
  return (
    <main className='flex min-h-screen flex-col p-5 mx-20'>
      <nav className='bg-black text-white p-1 mx-auto rounded-full justify-between items-center hidden md:flex w-full z-10'>
        {navigationData.map(({ location, label }) => {
          return (
            <a
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
      <nav className='bg-black text-white p-1 mx-auto rounded-3xl justify-between flex-col md:hidden'>
        {navigationData.map(({ location, label }) => {
          return (
            <a
              href={location}
              className='text-sm first:mr-1 last:ml-1 py-2 px-5 transition-colors duration-300 ease-in-out hover:bg-orange-500 rounded-3xl'
            >
              343434
              {label}
            </a>
          );
        })}
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
      <div className='min-h-60' id='resume'>
        <Resume />
      </div>
    </main>
  );
}
