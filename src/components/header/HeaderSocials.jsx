import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href='https://www.facebook.pl/mikolajwkoronie' target="blank"><BsFacebook/></a>
            <a href='https://www.instagram.com/mikolajwkoronie' target="blank"><BsInstagram/></a>
        </div>
    )
}

export default HeaderSocials