import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiEmotionHappyLine} from 'react-icons/ri'
import {RiContactsLine} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' alt="" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href='#about' alt="" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href='#experience' alt="" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiEmotionHappyLine/></a>
            <a href='#joinus' alt="" onClick={() => setActiveNav('#joinus')} className={activeNav === '#joinus' ? 'active' : ''}><AiOutlineHome/></a>
            <a href='#contact' alt="" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsLine/></a>
        </nav>
    )
}

export default Nav