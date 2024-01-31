import style from './HistoryList.module.css';
import { payment } from '../payment';

export const HistoryList = () => {
  return (
    <div className={style.boxHistory}>
      {payment.length === 0 ? (
        <p className={style.textHistory}>You do not have paid subscriptions</p>
      ) : (
        <ul className={style.listHistory}>
          {payment.map((item) => (
            <li key={item.id} className={style.itemHistory}>
              {item.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
