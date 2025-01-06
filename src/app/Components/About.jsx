import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';

const AboutData = [
  {
    title: 'Experienced Counselor and Psychologist',
    description:
      'With over "50" one-on-one counseling sessions and experience delivering lectures in educational institutions, I offer expertise in navigating mental health challenges.',
  },
  {
    title: 'Client-Centered Approach',
    description:
      'My counseling approach prioritizes creating a safe space for clients to explore their emotions, build resilience, and develop effective coping strategies.',
  },
  {
    title: 'Specializations in Mental Health',
    description:
      'Specializing in anxiety, depression, and relationship issues, I provide tailored support to individuals seeking guidance and empowerment on their mental wellness journey.',
  },
  {
    title: 'Passion for Empowerment',
    description:
      'Guided by empathy and a commitment to empowerment, I strive to help clients discover their strengths, cultivate self-awareness, and lead fulfilling, meaningful lives.',
  },
  {
    title: 'Specializations in Mental Health A',
    description:
      'Specializing in anxiety, depression, and relationship issues, I provide tailored support to individuals seeking guidance and empowerment on their mental wellness journey.',
  },
  {
    title: 'Passion for Empowerment A',
    description:
      'Guided by empathy and a commitment to empowerment, I strive to help clients discover their strengths, cultivate self-awareness, and lead fulfilling, meaningful lives.',
  },
];

const About = (props) => {
  return (
    <div className='bg-flower-card'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold text-white'>
            About <span className='text-orange-500'>Me</span>
          </h2>
          <span className='text-white text-base italic font-semibold w-6/12 backdrop-blur-xl border-1 rounded-lg p-1'>
            Experienced counselor specializing in anxiety, depression,
            relationships. Empowering clients for resilience and growth. Trusted
            guide in mental wellness journey.
          </span>
        </div>
        <div className='flex overflow-auto my-6'>
          {AboutData.map((item) => (
            <Cards key={item.title} cardItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
