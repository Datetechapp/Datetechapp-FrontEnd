import Modal from 'react-modal';
import { FC } from 'react';
import css from './modalForFix.module.css';
import { Button, Checkbox } from '../../../common';

interface ModalForFixProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onRequestPinned: (messageId: string) => void;
  selectedMessageId: string;
}

export const ModalForFixMessage: FC<ModalForFixProps> = ({
  isOpen,
  onRequestClose,
  onRequestPinned,
  selectedMessageId,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modalFixMessage}
      overlayClassName={css.overlayModal}
    >
      <div className={css.modalFixBlock}>
        <h2 className={css.modalFixMessageTitle}>
          Would you like to pin this message?
        </h2>
        <div className={css.buttonBlock}>
          <Button className={css.btnCancel} onClick={onRequestClose}>
            Cancel
          </Button>
          <Button
            className={css.btnYes}
            onClick={() => {
              onRequestClose();
              onRequestPinned(selectedMessageId);
            }}
          >
            Yes
          </Button>
        </div>
        <div className={css.checkboxBlock}>
          <Checkbox className={css.checkboxForPinMessage} />
          <p className={css.checkboxText}>Pin for me and Michael</p>
        </div>
      </div>
    </Modal>
  );
};
