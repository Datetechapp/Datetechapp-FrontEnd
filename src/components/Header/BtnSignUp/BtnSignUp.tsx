import './BtnSignUp.css'
import { Button } from '../../common'
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export const BtnSignUp = () => {

    const [authOrReg, setAuthOrReg] = useState("Sign Up")

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/create-profile" || location.pathname === "/registration") {
            setAuthOrReg("Sign In")
        } else {
            setAuthOrReg("Sign Up")
        }
    }, [authOrReg, location])


    const handleAuthOrRegChange = () => {
        if (authOrReg !== "Sign Up") {
            setAuthOrReg("Sign Up")
        } else {
            setAuthOrReg("Sign Ip")
        }
    }

    return (
        <Link to={authOrReg === "Sign Up" ? "registration" : "auth"}>
            <Button className='BtnSignUp' onClick={handleAuthOrRegChange}>{authOrReg}</Button>
        </Link>
    )
}

