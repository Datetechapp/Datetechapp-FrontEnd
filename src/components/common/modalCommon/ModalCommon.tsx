import Modal from 'react-modal';
import React, { FC, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './modalCommon.module.css';
import { Button } from '../button';
import cancel from '../../../assets/ModalAuth/Cancel.svg';

interface ModalCommonProps {
  onRequestClose?: () => void;
  textTitle: string;
  textSubtitle: string;
  textEmail?: string;
  buttonText?: string;
  darkModal?: boolean;
  secondButtonText?: string;
  isOpen: boolean;
  isThereACancel: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCommon: FC<ModalCommonProps> = ({
  textTitle,
  textSubtitle,
  textEmail,
  buttonText,
  secondButtonText,
  onChange,
  isOpen,
  darkModal,
  isThereACancel,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNotShowModal = useCallback(() => {
    document.body.style.overflow = 'unset';
    onChange(false);

    if (pathname === '/reset_password') {
      navigate('/login');
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleNotShowModal}
      className={`${css.modal} ${darkModal ? css.darkModal : ''}`}
      overlayClassName={css.overlayModal}
    >
      <div
        className={!darkModal ? css.titleAndCancelBlock : css.darkTitleBlock}
      >
        <h2 className={!darkModal ? css.modalTitle : css.darkModalTitle}>
          {textTitle}
        </h2>
        {isThereACancel && (
          <img
            className={css.iconCancel}
            src={cancel}
            alt="cancel"
            onClick={handleNotShowModal}
          />
        )}
      </div>
      {textSubtitle && (
        <p
          className={`${css.subtitle} ${
            darkModal ? css.darkModalSubtitle : ''
          }`}
        >
          {textSubtitle}
        </p>
      )}
      {textEmail && <p className={css.email}>{textEmail}</p>}
      <div className={darkModal ? css.btnBlock : ''}>
        <Button
          className={`${css.firstBtn} ${
            darkModal ? css.darkModalFirstBtn : ''
          }`}
          onClick={handleNotShowModal}
        >
          {buttonText}
        </Button>
        {secondButtonText && (
          <Button
            className={`${css.secondBtn} ${
              darkModal ? css.darkModalSecondBtn : ''
            }`}
            onClick={handleNotShowModal}
          >
            {secondButtonText}
          </Button>
        )}
      </div>
    </Modal>
  );
};
