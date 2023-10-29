import './LanguageSelect.css';
import '../LanguagesSwich.css';
import { useState, FC } from 'react';
import { LanguagesSwich } from '../LanguagesSwich';
import { languages } from '../language';
import { ReactComponent as ActiveArrow } from '../../../assets/Header/activeArrow.svg';
import { ReactComponent as PassiveArrow } from '../../../assets/Header/passiveArrow.svg';

export function LanguageSelect() {
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
    <div onClick={() => handleChangeVisibility()} className="LanguageSelect">
      <p className="selectLanguage">{selectLang}</p>
      {activeVisible ? <PassiveArrow /> : <ActiveArrow />}
      <LanguagesSwich
        ChangeLang={setselectLang}
        nameClass={activeVisible}
        language={languages}
      />
    </div>
  );
}
