import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { tableData } from './table-data';
import styles from '../request.module.css';
import { Dispatch, SetStateAction } from 'react';
import Highlighter from 'react-highlight-words';

export default function RequestTable({
  handleChangeOpen,
  setId,
  text,
}: {
  handleChangeOpen: () => void;
  setId: Dispatch<SetStateAction<number>>;
  text: string;
}) {
  const handleModalOpen = (id: number) => {
    handleChangeOpen();
    setId(id);
  };

  const filteredData = tableData.filter((item) =>
    item.id.toString().includes(text),
  );

  return (
    <TableContainer>
      <Table sx={{ backgroundColor: '#1F1D2B' }} aria-label="simple table">
        <TableHead>
          <TableRow className={styles.header}>
            <TableCell>Subject</TableCell>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">Created</TableCell>
            <TableCell align="left">Last activity</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow
              key={row.subject}
              onClick={() => handleModalOpen(row.id)}
              className={styles.rows}
            >
              <TableCell align="left">{row.subject}</TableCell>
              <TableCell align="left">
                <Highlighter
                  searchWords={[text]}
                  textToHighlight={row.id.toString()}
                  highlightStyle={{
                    color: '#DE77C7',
                    fontFamily: 'Montserrat',
                    fontSize: '14px',
                    background: 'none',
                  }}
                />
              </TableCell>
              <TableCell align="left">{row.created}</TableCell>
              <TableCell align="left">{row.lastActivity}</TableCell>
              <TableCell align="left">
                <div
                  className={styles.status}
                  style={{
                    backgroundColor: `${row.backGroundColor}`,
                  }}
                >
                  {row.status}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
