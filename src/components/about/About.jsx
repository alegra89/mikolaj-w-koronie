import React from 'react'
import './about.css'
import ME from '../../assets/dzieciaki.png'
import {GoGift} from 'react-icons/go'
import {BiMailSend} from 'react-icons/bi'
import {RiChatSmile3Line} from 'react-icons/ri'


const About = () => {
    return (
        <section id="about">
            <h5>Dowiedz się więcej</h5>
            <h2>Czym się zajmujemy?</h2>

           <div className='container about_container'>
               <div className='about_me'>
                   <div className='about_me-image'>
                   <img src={ME} alt="About Image"/>
                   </div>
               </div>

               <div className='about_content'>
                   <div className='about_cards'>

                       <article className='about_card'>
                           <GoGift className='about_icon'/>
                           <h5>Dzieci mają marzenia</h5>
                           <small>które spełniacie</small>
                       </article>
                       <article className='about_card'>
                           <BiMailSend className='about_icon'/>
                           <h5>Wyślij paczkę</h5>
                           <small>bezpośrednio do dziecka</small>
                       </article>
                       <article className='about_card'>
                           <RiChatSmile3Line className='about_icon'/>
                           <h5>Spraw uśmiech</h5>
                           <small>na jego twarzy</small>
                       </article>
                   </div>

                   <p>
                   Zaczęło się od pomysłu, a przeradza w niesamowitą akcję której możesz być częscią!
                Przez pandemię wiele dzieci z domów dziecka nie dostanie prezentu na święta. Nie chciałyśmy, aby poczuły się samotne w tym wyjątkowym czasie i stworzyliśmy akcję Mikołaj w koronie, w której to Wy możecie sprawić radość dzieciom z domów dziecka w całej Polsce.
                Dziś, po 2 latach od rozpoczecia pierwszej akcji wysłalismy ponad 4 tysiące paczek do dzieci. Nie zamierzamy się zatrzymywać!
                Wspólnie możemy też więcej!
                
                   </p>

                <a href='#contact' className='btn btn-primary'>Porozmawiajmy</a>

               </div>
             </div> 
        </section>
    )
}

export default About