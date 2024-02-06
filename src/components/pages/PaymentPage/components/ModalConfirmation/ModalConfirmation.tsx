import style from './ModalConfirmation.module.css';
import Modal from 'react-modal';
import close from './../../../../../assets/Payment/CloseIcon.svg';
import { Button } from './../../../../common/button';
import { FC, useState } from 'react';
import { ModalPayment } from '../ModalPayment';
import check from './../../../../../assets/Payment/Сheck.svg';

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
          src={close}
          alt="cancel"
          onClick={handleCloseModal}
        />
      </div>
      <p className={style.subtitle}>
        You won't be able to access any Premium perks.
      </p>
      <div className={style.btnsBlock}>
        <Button className={style.firstBtn} onClick={handleCloseModal}>
          Back
        </Button>
        <Button className={style.secondBtn} onClick={handleOpenModal}>
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
