import { FaArrowRight } from 'react-icons/fa';
const Cards = ({ cardItem }) => {
  const { title, description, isClickable } = cardItem;

  return (
    <div className='flex flex-col max-h-96 min-w-60 m-4 cursor-pointer backdrop-blur-md bg-white/30 border-2 border-gray-400 rounded-2xl shadow-lg hover:scale-105'>
      <h5 className='mb-2 text-2xl p-3 font-bold text-white border-b-2 min-h-20'>
        {title}
      </h5>
      <p className='font-normal text-white p-3'>{description}</p>
      {isClickable && (
        <div className='flex justify-center items-center'>
          <div className='relative'>
            <div className='bg-orange-600 rounded-full p-3 shadow-lg hover:bg-orange-700 transition duration-300 ease-in-out'>
              <FaArrowRight className='text-white text-lg' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
