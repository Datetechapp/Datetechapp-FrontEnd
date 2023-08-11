import { Button } from "components/common";
import { FC } from "react";
import bell from "../../../../assets/Header/bell-alert.svg" 
import logo from "../../../../assets/ModalAuth/logo.svg"
import "./index.css"
import "../../../Header/BtnSignUp/BtnSignUp.css"

export const MainLayoutHeader : FC = () => {
    return (
        <div className="header__wrapper">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header__buttons">
                <img src= {bell} alt="notifications" />
                <Button className='BtnSignUp'>Upload</Button>
            </div>
        </div>
    )
}