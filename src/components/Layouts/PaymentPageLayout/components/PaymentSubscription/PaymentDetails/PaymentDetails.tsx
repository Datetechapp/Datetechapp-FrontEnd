import status from './../../../../../../assets/Payment/Status.svg';
import statusActive from './../../../../../../assets/Payment/Status-active.svg';

import style from './PaymentDetails.module.css';

export const PaymentDetails = () => {
  return (
    <div className={style.containerDetails}>
      <ul className={style.listDetails}>
        <li className={style.itemDetails}>
          <div>
            <img src={statusActive} alt="status" />
            Status
          </div>
          <p className={`${style.statusItem} ${style.active}`}>active</p>
        </li>
        <li className={style.itemDetails}>
          <div>
            <img src={status} alt="status" />
            Expires
          </div>
          <p className={style.statusItem}>29.12.2023</p>
        </li>
        <li className={style.itemDetails}>
          <div>
            <img src={status} alt="status" />
            Connection date
          </div>
          <p className={style.statusItem}>29.01.2024</p>
        </li>
        <li className={style.itemDetails}>
          <div>
            <img src={status} alt="status" />
            Price
          </div>
          <p className={style.statusItem}>39.99€</p>
        </li>
      </ul>
    </div>
  );
};