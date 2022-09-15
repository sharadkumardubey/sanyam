import React, { useState } from 'react'
import bgImg from '../Resources/Images/bgImg.jpeg'
import logo from '../Resources/Images/logo.jpg'
import introPic from '../Resources/Images/introPic.png'
import SocialItems from "../SmallComponents/SocialItems";
import {db} from '../firebase';
import { addDoc, collection } from 'firebase/firestore';


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
    ];
    const teamData = [
        {
            name: 'Manisha Dubey',
            header: 'Counselling Psychologist',
            socialMediaIds: [
                {
                    socialMediaName: 'facebook',
                    socialMediaURL: 'www.facebook.com'
                },
                {
                    socialMediaName: 'instagram',
                    socialMediaURL: 'www.instagram.com'
                },
                {
                    socialMediaName: 'youtube',
                    socialMediaURL: 'www.youtube.com'
                }
            ]
        }
    ]
    return (
        <div>
            <main>
                <article>
                    <section className='section clinic'
                        id='home'
                        aria-label='clinic'
                        style={sectionStyle}>
                        <div className='container'>
                            <div className='clinic-content'>
                                <p className='section-subtitle'> Welcome to Sanayam Counselling Point</p>
                                <h1 className='h1 clinic-title'>We are here to Help YOU</h1>
                                <p className='clinic-text'>Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus
                                    sapien, cursus sed
                                    nisl tristique, commodo gravida lectus non.</p>
                                <GetCallBackComponent />
                            </div>
                            <figure className='clinic-banner'>
                                <img src={logo} width='587' height='839' alt='clinic banner' className='w-100'></img>
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
                                    serviceData.map((serviceItem, index) => {
                                        return (
                                            <li key={index}>
                                                <div className='service-card'>
                                                    <div className='card-icon'>
                                                        <img src={serviceItem.icon} width="100" height="100" loading="lazy"
                                                            alt="service icon" className='w-100' />
                                                    </div>
                                                    <div>
                                                        <h3 className='h3 card-title'>{serviceItem.title}</h3>
                                                        <p className='card-text'>{serviceItem.disc}</p>
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
                                    alt="logo"
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
                                <a href='#More' className='btn'>Read more</a>
                            </div>
                        </div>
                    </section>
                    <section className='section team' aria-label='team'>
                        <div className='container'>
                            <p className='section-subtitle text-center'>Our Team</p>
                            <h2 className='h2 section-title text-center'>Best Expert On Mental Health</h2>
                            <ul className='has-scrollbar'>
                                {/* Here we need to use map and inside map put below LI */}
                                {
                                    teamData.map((teamMember)=>{
                                        return(
                                            <li className='scrollbar-item'>
                                    <div className='team-card'>
                                        <div className='card-banner img-holder'
                                            style={{ height: 100, width: 200 }}>
                                            <img src={logo} width='460' height='500' loading='lazy' alt={teamMember.name} className='img-cover' />
                                        </div>
                                        <h3 className='h3'>
                                            {/* in future details of member will be linked */}
                                            <a href='#future' className='card-title'>{teamMember.name}</a>
                                        </h3>
                                        <p className='card-subtitle'>{teamMember.header}</p>
                                        {
                                            teamMember.socialMediaIds.length && 
                                            <div className='card-social-list'>
                                                {
                                                    teamMember.socialMediaIds.map((item)=>{
                                                        return(
                                                            <SocialItems className='card-social-link' href={item.socialMediaURL} iconName={item.socialMediaName} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                        <ul className='card-social-list'>
                                            
                                        </ul>
                                    </div>
                                </li>
                                        )
                                    })
                                }
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
    const [ phoneNumber, setPhoneNumber ] = useState();
    const [ concernText, setConcernText ] = useState('');

    const onCallBackSubmitClick = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "callBack_Data"), {
                id: "id" + Math.random().toString(16).slice(2),
                concernText: concernText,
                phoneNumber: phoneNumber
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        setConcernText('');
        setPhoneNumber('');
    };
    return (
        <div>
            <form className='clinic-form'>
                <input type='number'
                    name='phoneNumber'
                    placeholder='Your Phone Number.....'
                    required
                    value={phoneNumber}
                    className='form-field'
                    onChange={(e)=>setPhoneNumber(e.target.value)} />
                <input type='text'
                    name='concernText'
                    placeholder='Your concern..... My Name is Rahul i having issue..'
                    required
                    value={concernText}
                    className='form-field'
                    onChange={(e)=>setConcernText(e.target.value)} />
                <button type='submit'
                    className='btn'
                    onClick={e=>onCallBackSubmitClick(e)}>
                    Get Call Back
                </button>
            </form>
        </div>
    )
}

