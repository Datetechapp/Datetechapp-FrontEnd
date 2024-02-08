import { Outlet } from 'react-router-dom';

import { PaymentBar } from './components/PaymentBar';

import style from './PaymentPageLayout.module.css';

export const PaymentPageLayout = () => {
  return (
    <div className={style.container}>
      <div className={style.leftBar}>
        <PaymentBar />
      </div>
      <div className={style.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};
