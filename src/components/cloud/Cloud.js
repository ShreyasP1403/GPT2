import React from 'react'
import './CloudStyles.css'
import {Link} from 'react-router-dom'

const Cloud = () => {
    return (
        <div className='cloud'>
            <div className="container">
                <div className="content">
                    <h2><span>IR</span> Spectroscopy</h2>
                    <p>Infrared (IR) spectroscopy is an absorption method widely used in both qualitative and quantitative analyses. The infrared region of the spectrum includes electromagnetic radiation that can alter the vibrational and rotational states of covalent bonds in organic molecules.</p>
                <div><Link to="/">
          <button>IR</button>
        </Link></div>
                </div>
            </div>
        </div>
    )
}

export default Cloud
