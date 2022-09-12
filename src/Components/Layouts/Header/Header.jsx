import React from "react"
import './Header.css'
import { NavLink } from 'react-router-dom';
import logoHeader from '../../../Images/logo-header.png'

export const Header = () => {
    return (
        <div className='div-header-container'>
           <header className='div-title-header'>
                <div className='div-image-header'>
                    <NavLink to='/'>
                        <img className='image-loog-header' src={logoHeader} alt="Logo Rick And Morty" />
                    </NavLink>
                </div>
                <div className='title-rick-morty'>
                    <h1 className='initial-title'>Rick And Morty</h1>
                </div>
                <nav className='div-nav-header div-nav-home' >
                    <div className='div-nav-section'>

                        <div className='div-nav-home'>
                            <NavLink to='/home'>
                                <button>Home</button>
                            </NavLink>
                        </div>
                        
                        <div className='div-nav-home div-nav-favorites'>
                            <NavLink to='/favorites'>
                                <button>Favorites</button>
                            </NavLink>
                        </div>

                        <div className='div-nav-home div-nav-favorites'>
                            <NavLink to='/favorites'>
                                <button>Sign off</button>
                            </NavLink>
                        </div>
                    </div>
                </nav>
           </header>
        </div>
    )
}