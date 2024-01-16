import css from './header.module.css';
import { ReactComponent as ArrowLeft } from '../../../assets/Messanger/arrowLeft.svg';
import { ReactComponent as Photo } from '../../../assets/Messanger/PhotoFromMessanger.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/Messanger/CalendarIcon.svg';
import { ReactComponent as SearchIcon } from '../../../assets/Messanger/SearchIcon.svg';
import { ReactComponent as Options } from '../../../assets/Messanger/Options.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/Messanger/PhoneIcon.svg';
import React from 'react';

interface HeaderProps {
       setShowSearchMessages: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header: React.FC<HeaderProps> = ({ setShowSearchMessages }) => {
       return (
              <div className={css.headerWrapper}>
                     <div className={css.blockWithPreviousStep}>
                            <ArrowLeft />
                            <div className={css.blockPhotoWithName}>
                                   <Photo />
                                   <div className={css.info}>
                                          <p className={css.name}>Michael</p>
                                          <p className={css.isOnline}>Online</p>
                                   </div>
                            </div>

                     </div>
                     <div className={css.messangerFeatures}>
                            <PhoneIcon />
                            <SearchIcon onClick={() => setShowSearchMessages(true)} />
                            <CalendarIcon />
                            <Options />
                     </div>
              </div>
       );
};
