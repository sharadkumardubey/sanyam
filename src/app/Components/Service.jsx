'use client';

import React, { useState } from 'react';
import CardBGImg from '../CardBGImg.jpeg';
import Cards from './Cards';
import PropTypes from 'prop-types';

const serviceCardData = [
  {
    title: 'Individual Counseling',
    isClickable: true,
    description:
      "Personalized one-on-one sessions to help you navigate anxiety, depression, and life's challenges. Begin your journey to healing today.",
  },
  {
    title: 'Couples Counseling',
    isClickable: true,
    description:
      'Strengthen your relationship with guided support and effective communication strategies. Rebuild trust and intimacy together.',
  },
  {
    title: 'Family Therapy',
    isClickable: true,
    description:
      'Improve family dynamics and resolve conflicts. Supportive therapy for better understanding and stronger family bonds.',
  },
  {
    title: 'Adolescent Counseling',
    isClickable: true,
    description:
      "Support for teens navigating life's challenges. Build resilience, manage stress, and develop healthy coping skills.",
  },
  {
    title: 'Mindfulness-Based Therapy',
    isClickable: true,
    description:
      'Integrate mindfulness into your life for emotional regulation and stress reduction. Cultivate present-moment awareness and self-compassion.',
  },
  {
    title: 'Trauma-Informed Care',
    isClickable: true,
    description:
      'Compassionate support for healing from past trauma. Safe, sensitive therapy to help you reclaim your life.',
  },
];

const Service = (props) => {
  return (
    <div className='bg-flower-card'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold text-white'>
            My <span className='text-orange-500'>Services</span>
          </h2>
        </div>
        <div className='flex overflow-auto my-6'>
          {serviceCardData.map((item) => (
            <Cards key={item.title} cardItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {};

export default Service;
