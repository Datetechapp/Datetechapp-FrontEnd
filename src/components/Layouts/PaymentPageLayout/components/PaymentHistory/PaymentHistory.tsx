import { FC } from 'react';

import { HistoryList } from './HistoryList';

import style from './PaymentHistory.module.css';

export const PaymentHistory: FC = () => {
  return (
    <div className={style.containerHistory}>
      <div className={style.headerHistory}>
        <h2 className={style.titleHistory}>Payment history</h2>
      </div>
      <div className={style.contentHistory}>
        <HistoryList />
      </div>
    </div>
  );
};
