import style from './PaymentBar.module.css';
import { Button } from './../../../../../components/common/button';
import subscription from './../../../../../assets/Payment/Subscriptions.svg';
import history from './../../../../../assets/Payment/History.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

const links = [
  {
    path: '/payment/subscription',
    img: subscription,
    text: ' My subscriptions',
  },
  {
    path: '/payment/history',
    img: history,
    text: ' Payment history',
  },
];
export const PaymentBar = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => {
    return pathname === path;
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
      <Button className={style.btnBar}>Try Premium</Button>
    </div>
  );
};
