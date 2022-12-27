import React from 'react'
import './RecoveryStyles.css'
import {Link} from 'react-router-dom'

const Recovery = () => {
    return (
        <div className='recovery'>
            <div className="container">
                <div className="content">
                    <h2><span>Data</span> Recovery</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, illo. Quisquam, ipsam sunt repudiandae vero ullam consequatur commodi aliquam rem dolorem quidem! Amet atque, fugiat dicta deleniti officia quod quibusdam!</p>
                    <div><Link to="/withh">
          <button>With Hydrogen</button>
        </Link></div>
                </div>
            </div>
        </div>
        
    )
}

export default Recovery