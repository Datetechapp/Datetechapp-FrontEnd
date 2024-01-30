import style from './PaymentBar.module.css';
import { Button } from './../../../../../components/common/button';
import subscription from './../../../../../assets/Payment/Subscriptions.svg';
import history from './../../../../../assets/Payment/History.svg';

export const PaymentBar = () => {
  return (
    <div className={style.containerBar}>
      <h2 className={style.titleBar}>My Premium</h2>
      <div className={style.linksBox}>
        <div className={style.linkItem}>
          <img src={subscription} alt="picSub" />
          <span>My subscriptions</span>
        </div>
        <div className={style.linkItem}>
          <img src={history} alt="picHistory" />
          <span>Payment history</span>
        </div>
      </div>
      <Button className={style.btnBar}>Try Premium</Button>
    </div>
  );
};
