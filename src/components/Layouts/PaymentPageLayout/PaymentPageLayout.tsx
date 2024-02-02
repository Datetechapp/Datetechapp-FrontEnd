import { Outlet } from 'react-router-dom';
import style from './PaymentPageLayout.module.css';
import { PaymentBar } from './components/PaymentBar';
import { PaymentSubscription } from './components/PaymentSubscription';

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
