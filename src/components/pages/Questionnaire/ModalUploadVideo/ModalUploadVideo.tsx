import { useCallback, type Dispatch, type SetStateAction } from 'react';
import Modal from 'react-modal';
import { Button } from '../../../common';

import cancel from '../../../../assets/ModalAuth/Cancel.svg';

import css from './modalUpload.module.css';

type ModalUploadVideoProps = {
  isShowModalUploadVideo: boolean;
  setIsShowModalUploadVideo: Dispatch<SetStateAction<boolean>>;
  setStep: Dispatch<SetStateAction<number>>;
  step: number;
};

export const ModalUploadVideo = ({
  isShowModalUploadVideo,
  setIsShowModalUploadVideo,
  setStep,
  step,
}: ModalUploadVideoProps) => {
  const handleNotShowModal = useCallback(() => {
    document.body.style.overflow = 'unset';
    setIsShowModalUploadVideo(false);
  }, []);

  const handleNextPage = useCallback(() => {
    document.body.style.overflow = 'unset';
    setIsShowModalUploadVideo(false);
    setStep(step + 1);
  }, []);

  return (
    <Modal
      isOpen={isShowModalUploadVideo}
      onRequestClose={handleNotShowModal}
      className={css.modalUploadVideo}
      overlayClassName={css.overlayModal}
    >
      <div className={css.titleAndCancelBlock}>
        <h2 className={css.modalUploadVideoTitle}>
          Sure you want to add a video later?
        </h2>
        <img
          className={css.iconCancel}
          src={cancel}
          alt="cancel"
          onClick={handleNotShowModal}
        />
      </div>
      <p className={css.uploadVideoInfo}>
        Before your profile becomes active and you can use all the features of
        our app, you need to add at least one video.
      </p>
      <Button className={css.btnOk} onClick={handleNotShowModal}>
        Add video now
      </Button>
      <Button className={css.btnSecond} onClick={handleNextPage}>
        I’ll do this later
      </Button>
    </Modal>
  );
};
