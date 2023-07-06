import './BtnSignUp.css'
import { Button } from '../../common'
import { useState } from "react"
import { Link } from "react-router-dom"

export const BtnSignUp = () => {

    const [authOrReg, setAuthOrReg] = useState("Sign Up")

    const handleAuthOrRegChange = () => {
        if (authOrReg === "Sign Up") {
            setAuthOrReg("Sign In")
        } else {
            setAuthOrReg("Sign Up")
        }

    }

    return (
        <Link to={authOrReg === "Sign Up" ? "registration" : "auth"}>
            <Button className='BtnSignUp' onClick={handleAuthOrRegChange}>{authOrReg}</Button>
        </Link>
    )
}

