import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import styles from '../request.module.css';
import { Table, tableData } from './table-data';
import SimpleCloseIcon from '../../../../assets/SupportServicePanel/SimpleCloseIcon.svg';

export function RequestModal({
  open,
  handleClose,
  id,
}: {
  open: boolean;
  handleClose: () => void;
  id: number;
}) {
  const filteredDataById: Table | undefined = tableData.find(
    (item) => item.id === id
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className={styles.modalContainer}>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <p>{filteredDataById?.subject}</p>
                <div
                  className={styles.status}
                  style={{
                    backgroundColor: `${filteredDataById?.backGroundColor}`,
                  }}
                >
                  {filteredDataById?.status}
                </div>
              </div>
              <img
                src={SimpleCloseIcon}
                alt='SimpleCloseIcon'
                style={{
                  cursor: 'pointer',
                }}
                onClick={handleClose}
              />
            </div>
            <div className={styles.idSection}>
              <div>
                <p>Ticket ID:</p>
                <p>{filteredDataById?.id}</p>
              </div>
              <div>
                <p>Category:</p>
                <p>Software</p>
              </div>
            </div>

            <div></div>
            <div></div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
