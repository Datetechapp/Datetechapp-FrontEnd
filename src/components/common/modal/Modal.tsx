import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { PropsWithChildren } from 'react';

import styles from './modal.module.css';

type ModalBoxProps = {
  open: boolean;
  handleChangeOpen?: () => void;
  maxWidth?: string;
};

export const ModalBox = ({
  children,
  open,
  handleChangeOpen,
  maxWidth,
}: PropsWithChildren<ModalBoxProps>) => {
  return (
    <Modal
      open={open}
      onClose={handleChangeOpen}
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={open}>
        <Box className={styles.modalContainer} sx={{ maxWidth }}>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};
