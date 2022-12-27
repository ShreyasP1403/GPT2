import React from 'react'
import './DataStyles.css'
import {Link} from 'react-router-dom'

const Data = () => {
    return (
        <div className='data'>
            <div className="container">
                <div className="content">
                    <h2><span>NMR</span> Spectroscopy</h2>
                    <p>NMR spectroscopy or magnetic resonance spectroscopy (MRS), is a spectroscopic technique to observe magnetic field and atomic nuclei. NMR spectroscopy is the definitive method to identify monomolecular organic compounds.</p>
                    <div>
                    <Link to="/withh">
                        <button>NMR</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data
