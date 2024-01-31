import { useState } from 'react';
import SimpleCloseIcon from '../../../assets/SupportServicePanel/SimpleCloseIcon.svg';
import FileIcon from '../../../assets/SupportServicePanel/FileIcon.svg';
import SearchInput from './components/SearchInput';
import RequestTable from './components/Table';
import styles from './request.module.css';
import { ModalBox } from 'components/common/modal';
import { Table } from './components/types';
import { tableData } from './components/table-data';
import { TextareaAutosize } from '@mui/material';

export function RequestPage() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [id, setId] = useState(0);

  const handleChangeOpen = () => {
    setOpen(!open);
  };

  const filteredDataById: Table | undefined = tableData.find(
    (item) => item.id === id,
  );

  return (
    <div className={styles.container}>
      <SearchInput
        text={text}
        setText={setText}
        placeholder="Enter ticket number"
        customStyles={{ borderColor: 'transparent' }}
      />
      <RequestTable
        handleChangeOpen={handleChangeOpen}
        setId={setId}
        text={text}
      />
      <ModalBox open={open} handleChangeOpen={handleChangeOpen}>
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
      </ModalBox>
    </div>
  );
}
