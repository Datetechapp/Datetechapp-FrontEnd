import Modal from 'react-modal';
import css from "./modalForgotPassword.module.css"
import { FC } from "react"
import { Button } from "../../common/button"
import cancel from "../../../assets/ModalAuth/Cancel.svg"

interface ModalForgotPasswordProps {
       isOpen: boolean;
       onRequestClose: () => void;
       onGetNewPassword: () => void;
}

export const ModalForgotPassword: FC<ModalForgotPasswordProps> = ({ isOpen, onRequestClose, onGetNewPassword }) => {


       return (
              <Modal
                     isOpen={isOpen}
                     onRequestClose={onRequestClose}
                     className={css.modalForgotPassword}
                     overlayClassName={css.overlayModal}
              >
                     <img className={css.cancel} src={cancel} alt="cancel" onClick={onRequestClose} />
                     <h2 className={css.modalForgotPasswordTitle}>Forgot your password?</h2>
                     <Button className={css.btnGetNewPassword} onClick={onGetNewPassword}>Get new password</Button>

              </Modal>
       )
}