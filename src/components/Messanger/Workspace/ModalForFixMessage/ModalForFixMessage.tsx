import Modal from 'react-modal';
import { FC } from 'react';
import css from './modalForFix.module.css';
import { Button, Checkbox } from '../../../common';

interface ModalForFixProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onRequestPinned: (messageId: string) => void;
  selectedMessageId: string;
  isPinned: boolean;
  handleUnpinnedMessage: (messageId: string) => void;
}

export const ModalForFixMessage: FC<ModalForFixProps> = ({
  isOpen,
  onRequestClose,
  onRequestPinned,
  selectedMessageId,
  isPinned,
  handleUnpinnedMessage,
}) => {
  return (
    <div className={css.modalContainer}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={css.modalFixMessage}
        overlayClassName={css.overlayModal}
      >
        <div className={css.modalFixBlock}>
          <h2 className={css.modalFixMessageTitle}>
            {!isPinned ? 'Pin selected message' : 'Unpin message'}
          </h2>
          {!isPinned ? (
            <div className={css.checkboxBlock}>
              <Checkbox className={css.checkboxForPinMessage} />
              <p className={css.checkboxText}>Pin for me and Michael</p>
            </div>
          ) : (
            <p className={css.textForUnpin}>
              Do you want to unpin this message?
            </p>
          )}
          <div className={css.buttonBlock}>
            <Button className={css.firstButton} onClick={onRequestClose}>
              Cancel
            </Button>
            {!isPinned && (
              <Button
                className={css.secondButton}
                onClick={() => {
                  onRequestClose();
                  onRequestPinned(selectedMessageId);
                }}
              >
                Pin
              </Button>
            )}
            {isPinned && (
              <Button
                className={css.secondButton}
                onClick={() => {
                  onRequestClose();
                  handleUnpinnedMessage(selectedMessageId);
                }}
              >
                Unpin
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};
