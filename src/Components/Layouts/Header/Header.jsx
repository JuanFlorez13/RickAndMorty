import React from "react"
import './Header.css'
import { NavLink } from 'react-router-dom';
import logoHeader from '../../../Images/logo-header.png'

export const Header = () => {

    // const SignOff = () => {
    //     localStorage.removeItem('Name');
    //     localStorage.removeItem('Email');
    //     localStorage.removeItem('Password');
    //     localStorage.removeItem('Phone');
    //     window.location.href = '/#/';
    // }
    
    return (
        <div className='div-header-container'>
           <header className='div-title-header'>
                <div className='div-image-header'>
                    <NavLink to='/home'>
                        <img className='image-loog-header' src={logoHeader} alt="Logo Rick And Morty" />
                    </NavLink>
                </div>
                <div className='title-rick-morty'>
                    <h1 className='initial-title'>Rick And Morty</h1>
                </div>
                <nav className='div-nav-header div-nav-home' >
                    <div className='div-nav-section'>

                        {/* <div className='div-nav-home'>
                            <NavLink to='/home'>
                                <button>Home</button>
                            </NavLink>
                        </div> */}
                        
                        {/* <div className='div-nav-home div-nav-favorites'>
                            <NavLink to='/favorites'>
                                <button>Favorites</button>
                            </NavLink>
                        </div> */}

                        {/* <div className='div-nav-home div-nav-favorites'>
                            <button onClick={SignOff}>Sign off</button>
                        </div> */}
                    </div>
                </nav>
           </header>
        </div>
    )
}