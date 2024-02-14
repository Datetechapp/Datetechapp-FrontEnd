import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import style from './HistoryList.module.css';
import { useAppSelector } from 'hooks/hooks';
import { getPaymentData } from 'store/payments/selectors';
import { IPayment } from '../../../../../../store/payments/types';

enum statusProcess {
  SuccessProcess = 'well paid',
  InProcess = 'in progress',
  CancelProcess = 'cancel',
  Error = 'error payment',
}

export const HistoryList = () => {
  const paymentData = useAppSelector(getPaymentData);

  const getRowClass = (status: string) => {
    return status === statusProcess.SuccessProcess
      ? style.rowPaid
      : status === statusProcess.InProcess
      ? style.rowProgress
      : style.rowCancel;
  };

  return (
    <div className={style.boxHistory}>
      {paymentData.length === 0 ? (
        <p className={style.textHistory}>You do not have paid subscriptions</p>
      ) : (
        <TableContainer className={style.tableContainer}>
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
              {paymentData.map(
                ({
                  dataPayment,
                  idUser,
                  price,
                  statusProcess,
                  timeStamp,
                }: IPayment) => (
                  <TableRow key={idUser} className={style.rowTitle}>
                    <TableCell>{dataPayment}</TableCell>
                    <TableCell>{idUser}</TableCell>
                    <TableCell>{timeStamp}</TableCell>
                    <TableCell>-{price}</TableCell>
                    <TableCell>
                      <div
                        className={`${style.rowStatus} ${getRowClass(
                          statusProcess,
                        )}`}
                      >
                        {statusProcess}
                      </div>
                    </TableCell>
                  </TableRow>
                ),
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
