import React from 'react'
import { useState } from 'react'
import UserPool from "../UserPool"
import { api } from '../utils/api'

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        UserPool.signUp(email, password, [], null, async (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);

            // create a new user record in backend
            const res = signUp()

            if (res) {
                // todo: redirect to dashboard
            }
        })
    }

    const signUp = async (body) => {
        await api().post("/signup", body)
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