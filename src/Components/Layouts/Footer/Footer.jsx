import React from "react"
import './Footer.css'
import {FaGithub, FaFacebook} from 'react-icons/fa'
import {ImProfile} from 'react-icons/im'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'

export const Footer = () => {
    return (
        <footer className='div-footer-container'>
            <p>Juan Florez &copy; 2022, all rights reserved.</p>
            <div className='div-icons-footer'>
                <a href="https://github.com/JuanFlorez1326" target='_blank' rel="noopener noreferrer"><FaGithub className="footer-icon" /></a>
                <a href="https://www.facebook.com/juanflorez13/" target='_blank' rel="noopener noreferrer"><FaFacebook className="footer-icon" /></a>
                <a href="https://www.instagram.com/juanflorez13/" target='_blank' rel="noopener noreferrer"><BsInstagram className="footer-icon" /></a>
                <a href="https://juan02.netlify.app/" target='_blank' rel="noopener noreferrer"><ImProfile className="footer-icon" /></a>
                <a href="https://www.linkedin.com/in/juanflorez1326/" target='_blank' rel="noopener noreferrer"><BsLinkedin className="footer-icon" /></a>
            </div>
        </footer>
    )
}