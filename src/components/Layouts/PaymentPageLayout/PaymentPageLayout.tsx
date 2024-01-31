import { Outlet } from 'react-router-dom';
import style from './PaymentPageLayout.module.css';
import { PaymentBar } from './components/PaymentBar';
import { PaymentHistory } from './components/PaymentHistory';

export const PaymentPageLayout = () => {
  return (
    <div className={style.container}>
      <div className={style.leftBar}>
        <PaymentBar />
        <div>
          <Outlet />
        </div>
      </div>
      <div className={style.mainContent}>
        <PaymentHistory />
      </div>
    </div>
  );
};
