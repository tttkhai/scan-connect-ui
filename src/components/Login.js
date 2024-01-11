import React from 'react'
import { useState } from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from '../UserPool'
import Cookies from 'js-cookie';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        })

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        })

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data );
                const token = data.accessToken.jwtToken;
                Cookies.set('token', token, { expires: 7, secure: false });
            },
            onFailure: (data) => {
                console.log("onFailure: ", data );
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data );
            }
        })

    }

    return (
        <div> 
            Login
            <form onSubmit={onSubmit}>
                <label>
                    Email
                </label>
                <input value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                ></input>
                <label>
                    Password
                </label>
                <input value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                ></input>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Login