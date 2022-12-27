import React from 'react'
import GoogleButton from 'react-google-button'
import {Link} from 'react-router-dom'
import './Login.css'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'


const googleSignIn =() =>{
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}
const Login = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div className='login'>
            <div className="container">
                <div className="form-container">
                    <form>
                        <h1><span>Log In</span></h1>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your Email' autoComplete='email'/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="text" placeholder='Enter your Password' autoComplete='current-password'/>
                        </div>
                        <button>Log IN</button>
                        <Link to="/signup">
                        <button>Sign Up</button>
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
