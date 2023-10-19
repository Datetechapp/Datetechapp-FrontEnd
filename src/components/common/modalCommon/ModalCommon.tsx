import Modal from 'react-modal';
import { FC, useCallback } from 'react';
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
  secondButtonText?: string;
  isOpenModalCheckEmail?: boolean;
  onChangeModalCheckEmail?: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModalChangedPassword?: boolean;
  onChangeModalPasswordChanged?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCommon: FC<ModalCommonProps> = ({
  textTitle,
  textSubtitle,
  textEmail,
  buttonText,
  secondButtonText,
  onChangeModalCheckEmail,
  isOpenModalCheckEmail,
  isOpenModalChangedPassword,
  onChangeModalPasswordChanged,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNotShowModal = useCallback(() => {
    document.body.style.overflow = 'unset';

    if (pathname === '/reset_password' && onChangeModalCheckEmail) {
      onChangeModalCheckEmail(false);
      navigate('/login');
    } else if (onChangeModalPasswordChanged) {
      onChangeModalPasswordChanged(false);
      navigate('/login');
    }
  }, []);

  return (
    <Modal
      isOpen={isOpenModalCheckEmail || isOpenModalChangedPassword || false}
      onRequestClose={handleNotShowModal}
      className={css.modalCheckEmail}
      overlayClassName={css.overlayModal}
    >
      <div className={css.titleAndCancelBlock}>
        <h2 className={css.modalCheckEmailTitle}>{textTitle}</h2>
        <img
          className={css.iconCancel}
          src={cancel}
          alt="cancel"
          onClick={handleNotShowModal}
        />
      </div>
      {textSubtitle && <p className={css.checkEmailInfo}>{textSubtitle}</p>}
      {textEmail && <p className={css.email}>{textEmail}</p>}
      <Button className={css.btnOk} onClick={handleNotShowModal}>
        {buttonText}
      </Button>
      {secondButtonText && (
        <Button className={css.btnSecond} onClick={handleNotShowModal}>
          {secondButtonText}
        </Button>
      )}
    </Modal>
  );
};
