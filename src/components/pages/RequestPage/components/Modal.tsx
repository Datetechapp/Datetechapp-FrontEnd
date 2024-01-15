import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import styles from '../request.module.css';
import { tableData } from './table-data';
import SimpleCloseIcon from '../../../../assets/SupportServicePanel/SimpleCloseIcon.svg';
import FileIcon from '../../../../assets/SupportServicePanel/FileIcon.svg';
import { TextareaAutosize } from '@mui/material';
import { Table } from './types';

export function RequestModal({
  open,
  handleChangeOpen,
  id,
}: {
  open: boolean;
  handleChangeOpen: () => void;
  id: number;
}) {
  const filteredDataById: Table | undefined = tableData.find(
    (item) => item.id === id
  );

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
                alt="SimpleCloseIcon"
                style={{
                  cursor: 'pointer',
                }}
                onClick={handleChangeOpen}
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
            <div className={styles.description}>
              <p>Description:</p>
              <TextareaAutosize
                value="Software flgkd;lgkh;lkg fmkdlls;;as.d,fmfngmd,s; dlgmmfdfmgfmmdfsfkjgkrjgjfgksfjgf;jkjgiri frjrigjfndmkkeigi dkfgfkdmfkfefnwklrn;wkrjnmSoftwarelgkd;lgkh;lkgfmkdlls;;as.d,fmfngmd,s;dlgmmfdfmgfmmdfsfkjgkrjgjfgksfjgf;jkjgiri frjrigjfndmkkeigi dkfgfk dmfkf efnwklrn;wkrjn mSoftware flgkd;lgkh;lkg fmkdlls;;as.d,fmfngmd,s; ghfjfjkfkfkfkfkfkfkdlgmmfdfmgfmmdfsfkjgkrjgjfgksfjgf;jkjgiri  frjrigjfndmkkeigi dkfgfk dmfkf efnwklrn;wkrjn m"
                disabled
              />
            </div>
            <div className={styles.files}>
              <p>Files included:</p>
              <div>
                <img src={FileIcon} alt="" />
                <span>Issue.jpg</span>
              </div>
              <div>
                <img src={FileIcon} alt="" />
                <span>Issue.pdf</span>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
