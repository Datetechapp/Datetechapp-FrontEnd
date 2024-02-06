import style from './HistoryList.module.css';
import { payment } from '../payment';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const HistoryList = () => {
  const getRowClass = (status: string) => {
    return status === 'well paid'
      ? style.rowPaid
      : status === 'in progress'
      ? style.rowProgress
      : style.rowCancel;
  };

  return (
    <div className={style.boxHistory}>
      {payment.length === 0 ? (
        <p className={style.textHistory}>You do not have paid subscriptions</p>
      ) : (
        <TableContainer
          className={style.tableContainer}
          sx={{
            backgroundColor: '#201B27',
            border: '2px solid #C896EF',
            borderRadius: '10px',
          }}
        >
          <Table>
            <TableHead>
              <TableRow className={style.tableHeader}>
                <TableCell>Data</TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Subscription</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payment.map((row) => (
                <TableRow key={row.id} className={style.rowTitle}>
                  <TableCell>{row.data}</TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>-{row.price}</TableCell>
                  <TableCell>
                    <div
                      className={`${style.rowStatus} ${getRowClass(
                        row.status,
                      )}`}
                    >
                      {row.status}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
