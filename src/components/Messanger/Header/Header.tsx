import type { Dispatch, SetStateAction } from 'react';
import { ReactComponent as CalendarIcon } from '../../../assets/Messanger/CalendarIcon.svg';
import { ReactComponent as Options } from '../../../assets/Messanger/Options.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/Messanger/PhoneIcon.svg';
import { ReactComponent as Photo } from '../../../assets/Messanger/PhotoFromMessanger.svg';
import { ReactComponent as SearchIcon } from '../../../assets/Messanger/SearchIcon.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/Messanger/arrowLeft.svg';
import css from './header.module.css';

type HeaderProps = {
  setShowSearchMessages: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({ setShowSearchMessages }: HeaderProps) => {
  return (
    <div className={css.headerWrapper}>
      <div className={css.blockWithPreviousStep}>
        <ArrowLeft className={css.icon} />
        <div className={css.blockPhotoWithName}>
          <Photo />
          <div className={css.info}>
            <p className={css.name}>Michael</p>
            <p className={css.isOnline}>Online</p>
          </div>
        </div>
      </div>
      <div className={css.messangerFeatures}>
        <PhoneIcon className={css.icon} />
        <SearchIcon
          className={css.icon}
          onClick={() => setShowSearchMessages(true)}
        />
        <CalendarIcon className={css.icon} />
        <Options className={css.icon} />
      </div>
    </div>
  );
};
