import React from 'react';
import style from './subscriptionOption.module.css';
import logo from '../../../../../assets/ModalAuth/mod_welc-logo.svg';
import close from '../../../../../assets/Payment/CloseIcon.svg';
import check from '../../../../../assets/Payment/Check.svg';
import { Button } from '../../../../common/button';

const SubscriptionOption = () => {
	return (
		<div className={style.modalContainer}>
            <span></span>
			<div className={style.modalBoxHeader}>
				<div className={style.headerBox}>
					<div className={style.headerContent}>
						<img src={logo} alt="logo" className={style.logoImg} />
						<div className={style.headerDescription}>
							<h3 className={style.headerTitle}>Become a Premium</h3>
							<p className={style.headerText}>
								Choose the option to subscribe to a premium account
							</p>
						</div>
					</div>
					<img src={close} alt="logo" className={style.closeImg} />
				</div>
			</div>
			<div className={style.optionsBox}>
				<div className={style.leftBox}>
					<ul className={style.optionList}>
						<li className={style.optionItem}>
							<img src={check} alt="check" />
							<span>Unlimited likes</span>
						</li>
						<li className={style.optionItem}>
							<img src={check} alt="check" />
							<span>Who sees yous</span>
						</li>
						<li className={style.optionItem}>
							<img src={check} alt="check" />
							<span>Who do you see</span>
						</li>
						<li className={style.optionItem}>
							<img src={check} alt="check" />
							<span>No advertising</span>
						</li>
					</ul>
					<p className={style.leftBoxText}>
						Subscription can be canceled at any time
					</p>
				</div>
				<div className={style.rightBox}>
					<ul className={style.priceList}>
						<li className={style.priceItem}>
							<span>1 mouth</span>
							<div className={style.btnPrice}>39.99€</div>
						</li>
						<li className={style.priceItem}>
							<span>1 week</span>
							<div className={style.btnPrice}>19.99€</div>
						</li>
						<li className={style.priceItem}>
							<span>1 day</span>
							<div className={style.btnPrice}>9.99€</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SubscriptionOption;
