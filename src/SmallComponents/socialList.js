import React from 'react';
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoYoutube
} from "react-icons/io5";

export default function socialList() {
    return (
        <ul className='social-list'>
            <li>
                <a href='www.facebook.com' className='social-link'>
                    <IoLogoFacebook />
                </a>
            </li>
            <li>
                <a href='www.youtube.com' className='social-link'>
                    <IoLogoInstagram />
                </a>
            </li>
            <li>
                <a href='www.google.com' className='social-link'>
                    <IoLogoYoutube />
                </a>
            </li>
        </ul>
    )
}
