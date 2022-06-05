import React from 'react'
import './experience.css'
import {ImGift} from 'react-icons/im'
import {GiEasterEgg} from 'react-icons/gi'
import {HiOutlineEmojiHappy} from 'react-icons/hi'
import {FaHandHoldingHeart} from 'react-icons/fa'

const Experience = () => {
    return (
        <section id="experience">
        <h5>Akcje charytatywne</h5>
        <h2>Dołącz do nas!</h2>

        <div className='container experience_container'>
            <div className='experience experience_mikolaj'>
            <h3>Rozkład jazdy!</h3>
            <div className='experience_content'>
                <article className='experiende_details'>
                    <ImGift className='ecperience_detail_icons'/>
                    <div>
                    <h4>Mikołaj w koronie </h4>
                    <small className='text-light'>Listopad/Grudzień </small></div>
                </article>

                <article className='experiende_details'>
                    <GiEasterEgg className='ecperience_detail_icons'/>
                    <div><h4>Zając w koronie </h4>
                    <small className='text-light'>Marzec/ Kwiecień </small></div>
                </article>

                <article className='experiende_details'>
                    <HiOutlineEmojiHappy className='ecperience_detail_icons'/>
                    <div><h4>Dzień dziecka</h4>
                    <small className='text-light'>Maj/ Czerwiec </small></div>
                </article>

                <article className='experiende_details'>
                    <FaHandHoldingHeart className='ecperience_detail_icons'/>
                    <div><h4>Korona dla mam</h4>
                    <small className='text-light'> Brak informacji </small></div>
                </article>
                
            </div>
            </div>
        <div className='experience_kids'>

        </div>
        </div>
        </section>
    )
}

export default Experience