import React from 'react'
import './contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id="contact">
            <h5>Chcesz o coś zapytać?</h5>
            <h2>Śmiało! Napisz do nas</h2>
                
            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className='contact_option'>
                        <HiOutlineMailOpen className='contact_option-icon'/>
                    <h4>Email</h4>
                    <h5>mikolajwkoronie@gmail.com</h5>
                    <a href="mailto:mikolajwkoronie@gmail.com">Wyślij wiadomość</a>
                    </article>

                    <article className='contact_option'>
                        <BsMessenger className='contact_option-icon'/>
                    <h4>Messenger</h4>
                    <h5>mikolajwkoronie</h5>
                    <a href="https://m.me/mikolajwkoronie" target="blank">Wyślij wiadomość</a>
                    </article>
                </div>
                {/*END OF CONTACT OPTIONS */}
                <form action="">
                    <input type="text" name="name" placeholder='Imię i Nazwisko' required/>
                    <input type="email" name="email" placeholder='Twój email' required/>
                    <textarea name="message" rows="7" placeholder='Twoja wiadomość' required></textarea>
                    <button type='submit' className='btn btn-primary'>Wyślij</button>
                </form>
            </div>
        </section>
    )
}

export default Contact