import React, { useState } from 'react'
import bgImg from '../Resources/Images/bgImg.jpeg'
import logo from '../Resources/Images/logo.jpg'
import introPic from '../Resources/Images/introPic.png'
import {
    FaInstagramSquare
} from 'react-icons/fa';


export default function IntroScreen() {
    const sectionStyle = {
        backgroundImage: `url(${bgImg})`
    };
    const serviceData = [
        {
            icon: logo,
            title: 'Seminar',
            disc: 'Aenean eleifend turpis tellus, nec laoreet metus elementum ac.'
        }
    ]
    return (
        <div>
            <main>
                <article>
                    <section className='section hero'
                        id='home'
                        aria-label='hero'
                        style={sectionStyle}>
                        <div className='container'>
                            <div className='hero-content'>
                                <p className='section-subtitle'> Welcome to Sanayam Counselling Point</p>
                                <h1 className='h1 hero-title'>We are here to Help YOU</h1>
                                <p className='hero-text'>Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus
                                    sapien, cursus sed
                                    nisl tristique, commodo gravida lectus non.</p>
                                <GetCallBackComponent />
                            </div>
                            <figure className='hero-banner'>
                                <img src={introPic} width='587' height='839' alt='hero banner' className='w-100'></img>
                            </figure>
                        </div>
                    </section>
                    <section className='section service'
                        id='service'
                        aria-label='service'>
                        <div className='container'>
                            <p className='section-subtitle text-center'>Our Services</p>
                            <h2 className='h2 section-title text-center'>What we Provide</h2>
                            <ul className='service-list'>
                                {
                                    serviceData.map((serviceItem) => {
                                        return (
                                            <li>
                                                <div class="service-card">
                                                    <div class="card-icon">
                                                        <img src={serviceItem.icon} width="100" height="100" loading="lazy"
                                                            alt="service icon" class="w-100" />
                                                    </div>
                                                    <div>
                                                        <h3 class="h3 card-title">{serviceItem.title}</h3>
                                                        <p class="card-text">{serviceItem.disc}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                        </div>
                    </section>
                    <section className='section about'
                        id='about'
                        aria-label='about'>
                        <div className='container'>
                            <figure className='about-banner'>
                                <img src={logo}
                                    className='w-100'
                                    width='470'
                                    height='538'
                                    loading='lazy' />
                            </figure>
                            <div className='about-content'>
                                <p className='section-subtitle'>About Us</p>
                                <h2 className='h2 section-title'>We Care For Your Mental Health</h2>
                                <p className='section-text section-text-1'>
                                    Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, sed dapibus
                                    sapien. Cras
                                    condimentum eu velit id tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo vehicula arcu.
                                </p>
                                <p className='section-text'>
                                    Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, sed dapibus
                                    sapien. Cras
                                    condimentum eu velit id tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo vehicula arcu.
                                </p>
                                <a href='#' className='btn'>Read more</a>
                            </div>
                        </div>
                    </section>
                    <section className='section doctor' aria-label='doctor'>
                        <div className='container'>
                            <p className='section-subtitle text-center'>Our Team</p>
                            <h2 className='h2 section-title text-center'>Best Expert On Mental Health</h2>
                            <ul className='has-scrollbar'>
                                {/* Here we need to use map and inside map put below LI */}
                                <li className='scrollbar-item'>
                                    <div className='doctor-card'>
                                        <div className='card-banner img-holder'
                                            style={{ height: 100, width: 200 }}>
                                            <img src={logo} width='460' height='500' loading='lazy' alt='Manisha Dubey' className='img-cover' />
                                        </div>
                                        <h3 className='h3'>
                                            <a href='#' className='card-title'>Manisha Dubey</a>
                                        </h3>
                                        <p className='card-subtitle'>Counselling Psychologist</p>
                                        <ul className='card-social-list'>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='scrollbar-item'>
                                    <div className='doctor-card'>
                                        <div className='card-banner img-holder'
                                            style={{ height: 100 }}>
                                            <img src={logo} width='460' height='500' loading='lazy' alt='Manisha Dubey' className='img-cover' />
                                        </div>
                                        <h3 className='h3'>
                                            <a href='#' className='card-title'>Manisha Dubey</a>
                                        </h3>
                                        <p className='card-subtitle'>Counselling Psychologist</p>
                                        <ul className='card-social-list'>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='scrollbar-item'>
                                    <div className='doctor-card'>
                                        <div className='card-banner img-holder'
                                            style={{ height: 100 }}>
                                            <img src={logo} width='460' height='500' loading='lazy' alt='Manisha Dubey' className='img-cover' />
                                        </div>
                                        <h3 className='h3'>
                                            <a href='#' className='card-title'>Manisha Dubey</a>
                                        </h3>
                                        <p className='card-subtitle'>Counselling Psychologist</p>
                                        <ul className='card-social-list'>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='scrollbar-item'>
                                    <div className='doctor-card'>
                                        <div className='card-banner img-holder'
                                            style={{ height: 100 }}>
                                            <img src={logo} width='460' height='500' loading='lazy' alt='Manisha Dubey' className='img-cover' />
                                        </div>
                                        <h3 className='h3'>
                                            <a href='#' className='card-title'>Manisha Dubey</a>
                                        </h3>
                                        <p className='card-subtitle'>Counselling Psychologist</p>
                                        <ul className='card-social-list'>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='scrollbar-item'>
                                    <div className='doctor-card'>
                                        <div className='card-banner img-holder'
                                            style={{ height: 100 }}>
                                            <img src={logo} width='460' height='500' loading='lazy' alt='Manisha Dubey' className='img-cover' />
                                        </div>
                                        <h3 className='h3'>
                                            <a href='#' className='card-title'>Manisha Dubey</a>
                                        </h3>
                                        <p className='card-subtitle'>Counselling Psychologist</p>
                                        <ul className='card-social-list'>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='scrollbar-item'>
                                    <div className='doctor-card'>
                                        <div className='card-banner img-holder'
                                            style={{ height: 100 }}>
                                            <img src={logo} width='460' height='500' loading='lazy' alt='Manisha Dubey' className='img-cover' />
                                        </div>
                                        <h3 className='h3'>
                                            <a href='#' className='card-title'>Manisha Dubey</a>
                                        </h3>
                                        <p className='card-subtitle'>Counselling Psychologist</p>
                                        <ul className='card-social-list'>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#' className='card-social-link'>
                                                    <FaInstagramSquare />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className='section contact'
                    id='contact'>
                        000000000000000000000
                    </section>
                </article>
            </main>
        </div>
    )
}


export function GetCallBackComponent() {
    const { phoneNumber, setPhoneNumber } = useState(0);
    const { concernText, setConcernText } = useState('');
    const onChangePhoneNumberHandler = () => {
        console.log('Entered Phone Number');
    };
    return (
        <div>
            <form className='hero-form'>
                <input type={Number}
                    name='phoneNumber'
                    placeholder='Your Phone Number.....'
                    required
                    value={phoneNumber}
                    className='form-field'
                    onChange={onChangePhoneNumberHandler} />
                <input type={Text}
                    name='concernText'
                    placeholder='Your concern..... My Name is Rahul i having issue..'
                    required
                    value={concernText}
                    className='form-field'
                    onChange={onChangePhoneNumberHandler} />
                <button type='submit'
                    className='btn'>
                    Get Call Back
                </button>
            </form>
        </div>
    )
}

