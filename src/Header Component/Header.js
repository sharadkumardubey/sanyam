import React, { useEffect, useState } from 'react';
import {
    IoMenu,
    IoClose,
    IoCall,
    IoMail
} from "react-icons/io5";
import SocialList from '../SmallComponents/socialList';

export default function Header(props) {

    return (
        <div className='header'>
            <HeaderTop />
            <HeaderBottom />
        </div>
    );
}

export function HeaderTop() {
    return (
        <div className='header-top'>
            <div className='container'>
                <ul className='contact-list'>
                    <li className='contact-item'>
                        <IoMail />
                        <a href='mailto:info@example.com' className='contact-link'>
                            sharaddubeydubey2996@gmail.com
                        </a>
                    </li>
                    <li className='contact-item'>
                        <IoCall />
                        <a href='tel:+9125909490' className='contact-link'>
                            +91-9125909491
                        </a>
                    </li>
                </ul>
                <SocialList />
            </div>
        </div>
    )
}

export function HeaderBottom() {
    const [isHiddenCrossMenu, setIsHiddenCrossMenu] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    function scrollListener() {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", scrollListener);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    });
    return (
        <div className={'header-bottom' + (scrollY > 100 ? ' active' : '')}>
            <div className='container'>
                <a href='http://localhost:3000/' className='logo'>
                    Sanayam.
                </a>
                <nav className={'navbar container' + (isHiddenCrossMenu ? ' active' : '')}>
                    <ul className='navbar-list'>
                        <li className='nav-item'>
                            <a href='#home' className='navbar-link' data-nav-link>Home</a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#service' className='navbar-link' data-nav-link>Join our Movement</a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#about' className='navbar-link' data-nav-link>About Us</a>
                        </li>
                        <li className='navbar-item'>
                            <a href='#contact' className='navbar-link' data-nav-link>Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <a href='/jkkkd' className='btn'>
                    Book Appointment
                </a>
                <button
                    className='nav-toggle-btn'
                    aria-label='Toggle menu'
                    onClick={(e) => { setIsHiddenCrossMenu(isHiddenCrossMenu ? false : true) }}>
                    {isHiddenCrossMenu ?
                        <IoClose aria-hidden={true} />
                        :
                        <IoMenu aria-hidden={true} />}
                </button>
            </div>
        </div>
    )
}