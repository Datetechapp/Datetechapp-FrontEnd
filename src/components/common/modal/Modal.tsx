import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import styles from './modal.module.css';
import { FC, PropsWithChildren } from 'react';

interface ModalBoxProps {
  open: boolean;
  handleChangeOpen: () => void;
  maxWidth?: string;
}

export const ModalBox: FC<PropsWithChildren<ModalBoxProps>> = ({
  children,
  open,
  handleChangeOpen,
  maxWidth,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleChangeOpen}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            className={styles.modalContainer}
            sx={{
              maxWidth,
            }}
          >
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
