import React from 'react';

import { languages } from '../language';
import { setLanguage } from 'store/language/slice';
import { useAppDispatch } from 'hooks/hooks';
import styles from './LanguageSelect.module.css';

// import '../LanguagesSwich.css';

export const LanguageSelect = ({
  isActiveMenu,
  setIsActiveMenu,
}: {
  isActiveMenu: boolean;
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const switchLang = (event: React.MouseEvent) => {
    const lang = event.currentTarget.firstElementChild?.textContent;

    setIsActiveMenu(false);
    dispatch(setLanguage(lang));
  };

  return (
    <>
      {isActiveMenu && (
        <div className={styles.languagesBox}>
          <ul className={styles.languagesList}>
            {languages.map((language) => (
              <div
                className={styles.languagesItemBox}
                onClick={switchLang}
                key={language}
              >
                <li className={styles.languagesItem}>{language}</li>
                <span className={styles.language}>{language}</span>
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
