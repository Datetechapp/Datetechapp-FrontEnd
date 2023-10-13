import './ModalWelcome.css'
import logo from "../../../assets/ModalAuth/mod_welc-logo.svg"
import close from "../../../assets/ModalAuth/btn-close.svg"
import { useState, useEffect } from 'react'
import { ModalBase } from 'components/base/ModalBase/ModalBase'

export const ModalWelcome = () => {
    const [stateModal, setModal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setModal(true);
            document.body.style.overflow = 'hidden'; 
        }, 2000);

        return () => {
            document.body.style.overflow = ''; 
        };
    }, []);

    const closeModal = () => {
        setModal(false);
        document.body.style.overflow = ''; 
    };

    return (
        <>
            {stateModal && (
                <ModalBase width="600px" height="600px">
                    <div className="ModalWelcome">
                        <div className="ModalWelcome_CloseModal">
                            <button className="CloseModal__Btn-close" onClick={closeModal}>
                                <img className="Btn-close_img" src={close} alt="close" />
                            </button>
                        </div>
                        <div className="ModalWelcome_Wrapper">
                            <img src={logo} alt="logo" />
                            <h3>Welcome to our dating app!</h3>
                            <p>
                                We are confident that you will enjoy using our platform to meet new people. Our app is unique in that you
                                can view video presentations of other users before contacting them, allowing you to immediately understand
                                if a person fits your criteria. We hope you find what you're looking for here and enjoy using our app!
                            </p>
                        </div>
                    </div>
                </ModalBase>
            )}
        </>
    );
};