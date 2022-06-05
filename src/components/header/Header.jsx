import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/dzieci.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className='container header_container'>
            
                <h1>MIKOŁAJ W KORONIE</h1>
                <h5 className="text-light">Sprawdź co u nas słychać!</h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={ME} alt="dzieci"/>
                </div>

                <a href='#contact' className='scroll_down'>Scroll Dawon</a>
            </div>
        </header>
    )
}

export default Header