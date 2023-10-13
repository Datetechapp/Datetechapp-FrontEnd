import Modal from 'react-modal';
import css from "./modalForForward.module.css"
import { Button } from "../../../common"
import { FC } from "react"


interface ModalForForwardProps {
       isOpen: boolean;
       onRequestClose: () => void;
       onRequestForward?: (messageId: string) => void;
       selectedMessageId: string;
}


export const ModalForForwardMessage:FC<ModalForForwardProps> = ({isOpen, onRequestClose, onRequestForward, selectedMessageId}) => {
       return (
              <Modal
                     isOpen={isOpen}
                     onRequestClose={onRequestClose}
                     className={css.modalForwardMessage}
                     overlayClassName={css.overlayModal}
              >
                     <div className={css.modalForwardBlock}>
                            <h2 className={css.modalForwardMessageTitle}>Select a chat from the list on the right to whom you would like to forward the message</h2>
                            <div className={css.buttonBlock}>
                                   <Button className={css.btnCancel} onClick={onRequestClose}>Cancel</Button>
                                   <Button className={css.btnSelect} onClick={onRequestClose}>Select</Button>
                            </div>
                     </div>
              </Modal>
       )
}