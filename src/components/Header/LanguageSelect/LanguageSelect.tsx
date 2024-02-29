import React from 'react';
import styles from './LanguageSelect.module.css';
import { languages } from '../language';
import { useState } from 'react';
import { ReactComponent as ActiveArrow } from '../../../assets/Header/activeArrow.svg';
import { ReactComponent as PassiveArrow } from '../../../assets/Header/passiveArrow.svg';

export const LanguageSelect = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [selectLang, setselectLang] = useState('English');

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };
  const switchLang = (event: React.MouseEvent) => {
    const lang = event.currentTarget.textContent;

    setselectLang(lang || 'English');
  };

  return (
    <div onClick={handleActiveMenu} className={styles.languageSelect}>
      <p className={styles.selectLanguage}>{selectLang}</p>
      {activeMenu ? <PassiveArrow /> : <ActiveArrow />}
      {activeMenu && (
        <div className={styles.languagesBox}>
          <ul className={styles.languagesList}>
            {languages.map((language) => (
              <div className={styles.languagesItem_box}>
                <li
                  key={language}
                  className={styles.languagesItem}
                  onClick={switchLang}
                >
                  {language}
                </li>
                <span className={styles.language}>{language}</span>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
