import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import {Link} from 'react-router-dom'
import './Login.css'
import {auth, logInWithEmailAndPassword} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'



const Login = () => {
    const [user] = useAuthState(auth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(user)

    const googleSignIn =() =>{
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    return (
        <div className='login'>
            <div className="container">
                <div className="form-container">
                    <form>
                        <h1><span>Log In</span></h1>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your Email' autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="text" placeholder='Enter your Password' autoComplete='current-password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <button onClick={() => logInWithEmailAndPassword(email, password)}>Log IN</button>
                        <Link to="/signup">
                        <button >Sign Up</button>
                    </Link>
                        <h1 className='p1'>OR...</h1>
                        <GoogleButton onClick={googleSignIn} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
