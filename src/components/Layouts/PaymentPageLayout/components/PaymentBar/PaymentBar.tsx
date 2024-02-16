import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ModalPayment } from './../../../../pages/PaymentPage/components/ModalPayment';
import { Button } from './../../../../../components/common/button';
import { SubscriptionOption } from 'components/pages/PaymentPage/components/ModalSubscriptionOptions';
import subscription from './../../../../../assets/Payment/Subscriptions.svg';
import history from './../../../../../assets/Payment/History.svg';
import logo from './../../../../../assets/ModalAuth/logo.svg';

import style from './PaymentBar.module.css';

const links = [
  {
    path: '/payment/subscription',
    img: subscription,
    text: 'My subscriptions',
  },
  {
    path: '/payment/history',
    img: history,
    text: 'Payment history',
  },
];
export const PaymentBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setOpenOptions(false);
  };

  const handleLearnMore = () => {
    setOpenModal(false);
    setOpenOptions(true);
  };

  return (
    <div className={style.containerBar}>
      <h2 className={style.titleBar}>My Premium</h2>
      <div className={style.linksBox}>
        {links.map((link) => (
          <NavLink
            key={link.img}
            to={link.path}
            className={`${style.linkItem} ${
              isActive(link.path) ? style.active : ''
            }`}
          >
            <img src={link.img} alt={link.img} />
            {link.text}
          </NavLink>
        ))}
      </div>
      <Button className={style.btnBar} onClick={handleOpenModal}>
        Try Premium
      </Button>
      {openModal && (
        <ModalPayment
          isOpen={true}
          isThereACancel={true}
          onChange={handleCloseModal}
          textTitle="Become a Premium"
          textSubtitle="To view people who are «Interested in you» you need to subscribe to a Premium account"
          buttonText="Learn more"
          darkModal={true}
          fcFirstBtn={handleLearnMore}
        >
          <img src={logo} alt={logo} className={style.logo} />
        </ModalPayment>
      )}
      {openOptions && (
        <SubscriptionOption isOpen={true} onClose={handleCloseModal} />
      )}
    </div>
  );
};
