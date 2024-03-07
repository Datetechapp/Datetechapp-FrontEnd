import { useState } from 'react';

import logo from '../../assets/ModalAuth/mod_welc-logo.svg';
import { LanguageSelect } from './LanguageSelect/LanguageSelect';
import { ReactComponent as ActiveArrow } from '../../assets/Header/activeArrow.svg';
import { ReactComponent as PassiveArrow } from '../../assets/Header/passiveArrow.svg';
import { BtnSignUp } from './BtnSignUp/BtnSignUp';
import { useAppSelector } from 'hooks/hooks';
import { getLanguage } from 'store/language/selectors';
import styles from './Header.module.css';

export const Header = () => {
  const navArr: string[] = ['Home', 'About us', 'Safety Tips', 'Support'];
  const chosenlanguage = useAppSelector(getLanguage);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleActiveMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={logo} alt="logo" />
      <nav className={styles.headerNav}>
        <ul className={styles.navList}>
          {navArr.map((link) => (
            <li className={styles.navListItem} key={link}>
              {link}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.headerRightPart}>
        <div className={styles.languageSelect} onClick={handleActiveMenu}>
          <p className={styles.selectLanguage}>{chosenlanguage}</p>
          {isActiveMenu ? <PassiveArrow /> : <ActiveArrow />}
          <div className={styles.languagesContainer}>
            <LanguageSelect
              isActiveMenu={isActiveMenu}
              setIsActiveMenu={setIsActiveMenu}
            />
          </div>
        </div>
        <BtnSignUp />
      </div>
    </header>
  );
};
