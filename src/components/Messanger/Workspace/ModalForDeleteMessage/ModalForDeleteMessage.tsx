import Modal from 'react-modal';
import { FC } from 'react';
import css from './modalForDeleteMessage.module.css';
import { Button, Checkbox } from '../../../common';

interface ModalForFixProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onRequestDelete: (messageId: string) => void;
  selectedMessageId: string;
}

export const ModalForDeleteMessage: FC<ModalForFixProps> = ({
  isOpen,
  onRequestClose,
  onRequestDelete,
  selectedMessageId,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modalDeleteMessage}
      overlayClassName={css.overlayModal}
    >
      <div className={css.modalDeleteBlock}>
        <h2 className={css.modalDeleteMessageTitle}>
          Delete selected message?
        </h2>
        <div className={css.buttonBlock}>
          <Button className={css.btnYes} onClick={onRequestClose}>
            Yes
          </Button>
          <Button className={css.btnCancel} onClick={onRequestClose}>
            Cancel
          </Button>
        </div>
        <div className={css.checkboxBlock}>
          <Checkbox className={css.checkboxForDeleteMessage} />
          <p className={css.checkboxText}>Delete for me and Michael</p>
        </div>
      </div>
    </Modal>
  );
};
