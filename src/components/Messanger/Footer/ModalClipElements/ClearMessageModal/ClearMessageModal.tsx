import { Button } from 'components/common';
import { ModalBox } from 'components/common/modal';

import css from './clearMessageModal.module.css';

type Props = {
  onClose: () => void;
  onCancel: () => void;
  onClear: () => void;
};

export const ClearMessageModal = ({ onClose, onCancel, onClear }: Props) => {
  // const handleChangeOpen = (e: MouseEvent) => e.stopImmediatePropagation();

  return (
    <ModalBox open={true} handleChangeOpen={() => {}} maxWidth={'432px'}>
      <p className={css.modalHeader}>Clear message</p>
      <p className={css.modalText}>Are you sure you want to clear message?</p>
      <div className={css.modalButtons}>
        <div>
          <Button className={css.cancelButton} onClick={onCancel}>
            Cancel
          </Button>
        </div>
        <div>
          <Button className={css.clearButton} onClick={onClear}>
            Clear
          </Button>
        </div>
      </div>
    </ModalBox>
  );
};
