import styles from './LanguageSelect.module.css';
import '../LanguagesSwich.css';
import { LanguagesSwich } from '../LanguagesSwich';
import { languages } from '../language';
import { useState, FC } from 'react';
import { ReactComponent as ActiveArrow } from '../../../assets/Header/activeArrow.svg';
import { ReactComponent as PassiveArrow } from '../../../assets/Header/passiveArrow.svg';

export const LanguageSelect = () => {
  const [activeVisible, setactiveVisible] = useState<string>('');
  const [selectLang, setselectLang] = useState<string>('English');

  const handleChangeVisibility = () => {
    if (!activeVisible) {
      setactiveVisible('Visible');
    } else {
      setactiveVisible('');
    }
  };

  return (
    <div
      onClick={() => handleChangeVisibility()}
      className={styles.LanguageSelect}
    >
      <p className={styles.selectLanguage}>{selectLang}</p>
      {activeVisible ? <PassiveArrow /> : <ActiveArrow />}
      <LanguagesSwich
        ChangeLang={setselectLang}
        nameClass={activeVisible}
        language={languages}
      />
    </div>
  );
};
