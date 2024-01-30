import style from './PaymentPageLayout.module.css';
import { PaymentBar } from './components/PaymentBar';

export const PaymentPageLayout = () => {
  return (
    <div className={style.container}>
      <div className={style.leftBar}>
        <PaymentBar />
      </div>
    </div>
  );
};
