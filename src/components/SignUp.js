import React from 'react'
import { useState } from 'react'
import UserPool from "../UserPool"

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        })
    }

    return (
        <div>
            Sign Up
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

export default SignUp