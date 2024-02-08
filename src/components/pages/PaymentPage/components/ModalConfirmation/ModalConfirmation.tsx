import { FC, useState } from 'react';
import Modal from 'react-modal';

import { Button } from './../../../../common/button';
import { ModalPayment } from '../ModalPayment';
import closeIcon from './../../../../../assets/Payment/CloseIcon.svg';
import check from './../../../../../assets/Payment/Сheck.svg';

import style from './ModalConfirmation.module.css';

interface IConfirmation {
  onClose: () => void;
  isOpen: boolean;
}

export const ModalConfirmation: FC<IConfirmation> = ({ onClose, isOpen }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    document.body.style.overflow = 'unset';
    setOpenModal(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      className={style.modal}
      overlayClassName={style.overlayModal}
    >
      <div className={style.titleBlock}>
        <h2 className={style.title}>Cancel your subscription?</h2>
        <img
          className={style.iconCancel}
          src={closeIcon}
          alt="cancel"
          onClick={handleCloseModal}
        />
      </div>
      <p className={style.subtitle}>
        You won't be able to access any Premium perks.
      </p>
      <div className={style.btnsBlock}>
        <Button className={style.btnBack} onClick={handleCloseModal}>
          Back
        </Button>
        <Button className={style.btnCancel} onClick={handleOpenModal}>
          Cancel
        </Button>
      </div>
      {openModal && (
        <ModalPayment
          isOpen={true}
          isThereACancel={true}
          onChange={handleCloseModal}
          textTitle="Unsubscribed"
          textSubtitle=" You have successfully unsubscribed from Premium!"
          buttonText="Continue"
          darkModal={true}
          fcFirstBtn={handleCloseModal}
        >
          <div className={style.logoBox}>
            <img src={check} alt={check} className={style.logo} />
          </div>
        </ModalPayment>
      )}
    </Modal>
  );
};
