import React from 'react'
import './joinus.css'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'


const Joinus = () => {
    return (
        <section id="joinus">
            <h5>Dołącz do nas</h5>
            <h2>Jak wziąć udział?</h2>

            <div className='container joinus_container'>
            <article className='joinus'>
                <div className='joinus_head'>
                    <h3>Chcesz do nas dołączyć? Zobacz jak łatwo to zrobić!</h3>
            </div>
            <ol className='joinus_list'>

                <li>
                   
                    <p>Wejdz na naszego FB <a href='http://www.facebook.com/mikolajwkoronie' target="blank">Mikołaj w koronie</a> gdzie dzieje się magia</p>
                    </li>
                <li><BsFillArrowDownCircleFill className='joinus_list-icon'/>
                    <p>Znajdz aktualny post z placówką. Znajdziesz tam listę dzieci i prezntów</p>
                    </li>
                <li><BsFillArrowDownCircleFill className='joinus_list-icon'/>
                    <p>Wybierz dziecko dla którego chcesz wysłać prezent i dodaj komentarz z imieniem dziecka</p>
                    </li>
                <li><BsFillArrowDownCircleFill className='joinus_list-icon'/>
                    <p>Kup prezent i wyślij paczkę na adres placówki podany w poście</p>
                    </li>
            </ol>
            </article>
            </div>
        </section>
    )
}

export default Joinus