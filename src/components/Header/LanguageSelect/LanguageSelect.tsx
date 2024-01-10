import styles from './LanguageSelect.module.css';
import '../LanguagesSwich.css';
import { LanguagesSwich } from '../LanguagesSwich';
import { languages } from '../language';
import { useState, FC, useEffect } from 'react';
import { ReactComponent as ActiveArrow } from '../../../assets/Header/activeArrow.svg';
import { ReactComponent as PassiveArrow } from '../../../assets/Header/passiveArrow.svg';

export const LanguageSelect = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false); 
  const [selectLang, setselectLang] = useState<string>('English');

  const handleActiveMenu = () =>{
    setActiveMenu((prevState) => !prevState);
  };

  return (
    <div
      onClick={handleActiveMenu }
      className={styles.LanguageSelect}
    >
      <p className={styles.selectLanguage}>{selectLang}</p>
      {activeMenu ? <PassiveArrow /> : <ActiveArrow />}
      {activeMenu && (
        <div className={styles.LanguagesBox}>
          {languages.map((language,index)=>(
            <ul className={styles.LanguagesList}>
              <li key={index} className={styles.LanguagesItem}>{language.lang}</li>
            </ul>
          ))}
        </div>
      )}
      
    </div>
  );
};
