import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';


import './Navbar.scss';
import { images } from '../../constants';


const Navbar = () => {

    const [toggle, setToggle] = useState(false);


    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <a href='/'>
                    <img src={images.logoWhite} alt="logo" />
                </a>
            </div>
            <ul className='app__navbar-links'>
                <li className='app__flex p-text'>
                    <a href={'/'}>Galerie</a>
                </li>
                <li className='app__flex p-text'>
                    <a href={'/Artiste'}>Artiste</a>
                </li>
                <li className='app__flex p-text'>
                    <a href='https://www.etsy.com/ca-fr/shop/IsabelValdesArt' target="_blank" rel="noopener noreferrer">Boutique</a>
                </li>
                <span className="material-symbols-outlined">
                    north_east
                </span>

            </ul>
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)}/>
                {
                    toggle && (
                        <div>
                            <HiX onClick={() => setToggle(false)} />
                            <ul>
                                <li className='p-text'>
                                    <a href={'/'}>Galerie</a>
                                </li>
                                <li className='p-text'>
                                    <a href={'/Artiste'}>Artiste</a>
                                </li>
                                <li className='p-text'>
                                    <a href='https://www.etsy.com/ca-fr/shop/IsabelValdesArt' target="_blank" rel="noopener noreferrer">Boutique</a>
                                </li>
                                <span className="material-symbols-outlined">
                                    north_east
                                </span>
                            </ul>


                        </div>

                    )
                }
            </div>



        </nav>
    )
}

export default Navbar