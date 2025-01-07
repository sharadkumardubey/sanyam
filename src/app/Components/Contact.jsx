import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <div className='bg-flower-card'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold text-white'>
            My <span className='text-orange-500'>Contact</span>
          </h2>
        </div>
        <div className='flex justify-center my-6'>
          <div className='flex flex-col md:min-w-[55rem] max-w-xs m-4 cursor-pointer backdrop-blur-md bg-white/30 border-2 border-gray-400 rounded-2xl shadow-lg hover:scale-105 p-4 md:p-6'>
            <h3 className='text-xl font-bold text-orange-600 mb-4 bg-white rounded-lg px-2'>
              Contact Us
            </h3>
            <p className='text-white text-lg mb-2'>
              <span className='font-semibold'>Email:</span>{' '}
              <a
                href='mailto:manishadubey790@gmail.com'
                className='text-white hover:text-black'
              >
                manishadubey790@gmail.com
              </a>
            </p>
            <p className='text-white text-lg mb-2'>
              <span className='font-semibold'>Phone:</span>{' '}
              <a
                href='tel:+919090807060'
                className='text-white hover:text-black'
              >
                +91 9090807060
              </a>
            </p>
            <p className='text-white text-lg mb-2'>
              <span className='font-semibold'>Address:</span> Varanasi
            </p>
            <div className='mt-4 flex space-x-4'>
              <a
                href='https://www.instagram.com'
                className='text-pink-500 hover:text-pink-600'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagram size={24} />
              </a>
              <a
                href='https://www.facebook.com'
                className='text-blue-600 hover:text-blue-700'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook size={24} />
              </a>
              <a
                href='https://wa.me/1234567890'
                className='text-green-500 hover:text-green-600'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {};

export default Contact;
