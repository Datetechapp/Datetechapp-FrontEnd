import { Button } from 'components/common';
import { FC, useState } from 'react';
import { ReactComponent as Logo } from '../../../../assets/ModalAuth/logo.svg';
import css from './headerSecondary.module.css';
import { LanguageSelect } from 'components/Header/LanguageSelect/LanguageSelect';
import { useAppSelector } from 'hooks/hooks';
import { getLanguage } from 'store/language/selectors';
import { ReactComponent as ActiveArrow } from '../../../../assets/Header/activeArrow.svg';
import { ReactComponent as PassiveArrow } from '../../../../assets/Header/passiveArrow.svg';

interface HeaderSecondaryProps {
  text: string;
}

export const HeaderSecondary: FC<HeaderSecondaryProps> = ({ text }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const chosenlanguage = useAppSelector(getLanguage);

  const handleActiveMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <div className={css.header}>
      <Logo />
      <div className={css.languageButtonBlock}>
        <div className={css.languageSelect} onClick={handleActiveMenu}>
          <p className={css.selectLanguage}>{chosenlanguage}</p>
          {isActiveMenu ? <PassiveArrow /> : <ActiveArrow />}
          <div className={css.languagesContainer}>
            <LanguageSelect
              isActiveMenu={isActiveMenu}
              setIsActiveMenu={setIsActiveMenu}
            />
          </div>
        </div>
        <Button className={css.logOutBtn}>{text}</Button>
      </div>
    </div>
  );
};
