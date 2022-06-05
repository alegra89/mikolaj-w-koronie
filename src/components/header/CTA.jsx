import React from 'react'

/*======================== DO UZUPEŁNIENIA=======================
Dopisać w href na dole plik====================================== */
import regulamin from '../../assets/regulamin.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={regulamin} download className="btn">Pobierz regulamin</a>
            <a href="#contact" className="btn btn-primary">Napisz do nas</a>

        </div>
    )
}

export default CTA