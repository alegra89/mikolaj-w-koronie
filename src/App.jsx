import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Joinus from './components/joinus/Joinus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'


const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Joinus />
            <Testimonials />
            <Contact />
           
        </>
    )
}

export default App