import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
const Cards = ({ cardItem }) => {
  const { title, description, isClickable, image } = cardItem;

  return (
    <div className='flex flex-col min-w-60 m-4 cursor-pointer backdrop-blur-md bg-white/30 border-2 border-gray-400 rounded-2xl shadow-lg hover:scale-105'>
      {image ? (
        <>
          {image.endsWith('.mp4') ? (
            <video src={image} controls className='w-full h-80 object-cover'>
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={image}
              alt={`Image ${image}`}
              className='w-full h-80 object-cover'
            />
          )}
        </>
      ) : (
        <>
          <h5 className='mb-2 text-2xl p-3 font-bold text-white border-b-2 min-h-20'>
            {title}
          </h5>
          <p className='font-normal text-white p-3'>{description}</p>
          {isClickable && (
            <a
              className='flex justify-center items-center mb-2'
              href='https://forms.gle/EA1tYX46Y8bPXftc9'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='relative'>
                <div className='bg-orange-600 rounded-full p-3 shadow-lg hover:bg-orange-700 transition duration-300 ease-in-out'>
                  <FaArrowRight className='text-white text-lg' />
                </div>
              </div>
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default Cards;
