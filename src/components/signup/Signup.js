import React, { useState } from 'react'
import './Signup.css'
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext';
import GoogleButton from 'react-google-button'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {GoogleAuthProvider, signInWithRedirect,} from 'firebase/auth'


const googleSignIn =() =>{
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user,] = useAuthState(auth)
    /*const [ignup,] = UserAuth()*/
    console.log(user)
    const handleSubmit = async (e) => {
        try {
          await Signup(email, password)
          
        } catch (error) {
          console.log(error);
          
        }
      };
    return (
        <div className='signup'>
            <div className="container">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <h1><span>Sign up</span></h1>
                        
                        <div>
                            
                            <input onChange={(e) => setEmail(e.target.value)}
                            type="email" placeholder='Enter your email' 
                            autoComplete='email'/>
                        </div>
                        <div>
                            
                            <input onChange={(e) => setPassword(e.target.value)}
                            type= "password" placeholder='Enter your Password' 
                            autoComplete='current-password'/>
                        </div>
                        <div>
                    <Link to="/login">
                        <button>Signup</button>
                    </Link>
                    <h1 className='p1'>OR...</h1>
                        <GoogleButton onClick={googleSignIn} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
