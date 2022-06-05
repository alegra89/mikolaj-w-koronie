import React from 'react'
import './testimonials.css'
import Client1 from '../../assets/client1.png'
import Client2 from '../../assets/client2.png'
import Client3 from '../../assets/client3.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
    {
        avatar: Client1,
        name: 'Joanna z Warszawy',
        review: "Wspaniała inicjatywa, zorganizowana w konkretny i sprawny sposób uszczęśliwiacie naprawdę sporo dzieci"
    },
    {
        avatar: Client2,
        name: 'Ania z Gdańska',
        review: "Cudowni ludzie z sercem na dłoni. Dziekujemy za wspaniałą inicjatywę!"
    },
    {
        avatar: Client3,
        name: 'Łukasz z Łodzi',
        review: "To niesamowitę jak w tak prosty sposób udaje się Wam sprawić radość tylu dieciom! Będę z Wami przy każdej kolejnej akcji!"
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Co o nas myślicie</h5>
            <h2>Recenzje</h2>

            <Swiper className='container testimonials_container' 
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
            {
                data.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                            <div className='client_avatar'>
                            <img src={avatar}/>
                            </div>
                            <h5 className='client_name'>{name}</h5>
                            <small className='client_review'>{review} </small>
                            
                        </SwiperSlide>
                    )
                })
            }
             </Swiper>
        </section>
    )
}

export default Testimonials