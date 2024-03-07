import { TextareaAutosize } from '@mui/material';
import {
  useRef,
  useState,
  type ChangeEvent,
  type MouseEvent,
  type SetStateAction,
  type Dispatch,
} from 'react';

import { ReactComponent as DeleteIcon } from '../../../../assets/Messanger/DeleteIcon.svg';
import { ReactComponent as SendIcon } from '../../../../assets/Messanger/SendIcon.svg';
import { ModalCommon } from 'components/common';
import { ModalBox } from 'components/common/modal';
import { ClearMessageModal } from './ClearMessageModal';
import css from './modalClipElements.module.css';

type ModalClipElementsProps = {
  file: File;
  onClose: () => void;
  setMessage: Dispatch<SetStateAction<string>>;
};

export const ModalClipElements = ({
  file,
  onClose,
  setMessage,
}: ModalClipElementsProps) => {
  const [isModal, setModal] = useState(false);
  const [caption, setCaption] = useState('');
  const inputRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleWrapperClick = () => {
    if (isModal) return;
    setModal(true);
  };

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

  const handleDelete = () => setModal(true);

  const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(target.value);

    setTimeout(() => {
      if (!inputRef.current || !textareaRef.current) return;

      const height = parseInt(textareaRef.current.style.height);

      height > 20
        ? (inputRef.current.style.borderRadius = '12px')
        : (inputRef.current.style.borderRadius = '30px');
    }, 0);
  };

  // TODO: useMemo for image urls

  return (
    <div className={css.wrapper} onClick={handleWrapperClick}>
      <div className={css.modal} onClick={handleModalClick}>
        <div className={css.imageBlock}>
          <img
            src={URL.createObjectURL(file)}
            className={css.image}
            alt="Selected"
            onLoad={(e) => URL.revokeObjectURL(e.currentTarget.src)}
          />
          <DeleteIcon className={css.deleteIcon} onClick={handleDelete} />
        </div>
        <div className={css.inputBlock}>
          <div className={css.input} ref={inputRef}>
            <TextareaAutosize
              className={css.textarea}
              placeholder="Add a caption..."
              value={caption}
              onChange={handleChange}
              ref={textareaRef}
            />
            <SendIcon className={css.sendIcon} />
          </div>
        </div>
      </div>
      {isModal && (
        <ClearMessageModal
          onClose={() => {}}
          onCancel={() => {}}
          onClear={() => {}}
        />
      )}
    </div>
  );
};
