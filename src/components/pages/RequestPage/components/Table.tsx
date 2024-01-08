import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { tableData } from './table-data';
import styles from '../request.module.css';

export default function RequestTable() {
  return (
    <TableContainer>
      <Table sx={{ backgroundColor: '#1F1D2B' }} aria-label="simple table">
        <TableHead>
          <TableRow className={styles.header}>
            <TableCell>Subject</TableCell>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">Created</TableCell>
            <TableCell align="left">Last activity</TableCell>
            <TableCell align="left">Stuatus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.subject} className={styles.rows}>
              <TableCell align="left">{row.subject}</TableCell>
              <TableCell align="left">{row.id}</TableCell>
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
