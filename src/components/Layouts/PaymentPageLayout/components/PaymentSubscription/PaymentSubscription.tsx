import React, { useState } from 'react';
import style from './PaymentSubscription.module.css';
import { Button } from './../../../../common/button/';
import { ModalConfirmation } from 'components/pages/PaymentPage/components/ModalConfirmation';
export const PaymentSubscription = () => {
  const [openCancel, setOpenCancel] = useState(false);
  const handleOpenCancel = () => {
    setOpenCancel(true);
  };
  const handleCloseModal = () => {
    setOpenCancel(false);
  };

  return (
    <div className={style.containerSubscription}>
      <div className={style.subscriptionBox}>
        <div className={style.headerBox}>
          <div className={style.dateHeaderBox}>
            <span>1 month</span>
            <p>Subscription renews on 30 January</p>
          </div>
          <div className={style.priceBox}>
            <span>39.99€</span>
          </div>
        </div>
        <div className={style.contentBox}>
          <div className={style.subscriptionDetails}>
            <p>Subscription can be canceled at any time</p>
            <div className={style.list}></div>
          </div>
          <div className={style.btnBox}>
            <Button className={style.btnSubscription}>
              Update subscription
            </Button>
            <Button
              className={style.btnSubscription}
              onClick={handleOpenCancel}
            >
              Cancel subscriptions
            </Button>
          </div>
        </div>
        {openCancel && (
          <ModalConfirmation isOpen={true} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};
