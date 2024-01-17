import css from './header.module.css';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { Button } from 'components/common';
import { ReactComponent as ArrowLeft } from '../../../assets/Messanger/arrowLeft.svg';
import { ReactComponent as Photo } from '../../../assets/Messanger/PhotoFromMessanger.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/Messanger/CalendarIcon.svg';
import { ReactComponent as SearchIcon } from '../../../assets/Messanger/SearchIcon.svg';
import { ReactComponent as Options } from '../../../assets/Messanger/Options.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/Messanger/PhoneIcon.svg';
import { ReactComponent as Unmatch } from '../../../assets/Messanger/OptionsFeatures/Unmatch.svg';
import { ReactComponent as BlockUser } from '../../../assets/Messanger/OptionsFeatures/BlockUser.svg';
import { ReactComponent as ClearChat } from '../../../assets/Messanger/OptionsFeatures/ClearChat.svg';
import { ReactComponent as Delete } from '../../../assets/Messanger/ContextMenu/Delete.svg';
import React from 'react';

interface HeaderProps {
       setShowSearchMessages: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header: React.FC<HeaderProps> = ({ setShowSearchMessages }) => {

       const optionsFeatures = [
              {
                     text: 'Unmatch',
                     photo: <Unmatch className={css.iconForOptionsFeature} />,
              },
              {
                     text: 'Unmatch & Block user',
                     photo: <BlockUser className={css.iconForOptionsFeature} />,
              },
              {
                     text: 'Clear chat history',
                     photo: <ClearChat className={css.iconForOptionsFeature} />,
              }, {
                     text: 'Delete chat',
                     photo: <Delete className={css.iconForOptionsFeature} />,
              },
       ];

       const [activeOptions, setActiveOptions] = useState(false);

       const optionsRef = useRef<HTMLDivElement>(null);
       const handleOptionsClick = () => {
              setActiveOptions(!activeOptions);
       };

       useEffect(() => {
              const handleClickOutside = (event: MouseEvent) => {
                if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
                  setActiveOptions(false);
                }
              };
            
              document.addEventListener('click', handleClickOutside);
            
              return () => {
                document.removeEventListener('click', handleClickOutside);
              };
            }, []);



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
                            <div className={css.optionsWrapper} ref={optionsRef}>
                                   <Options onClick={handleOptionsClick} />
                                   {activeOptions && <div className={css.optionsFeaturesBlock}>
                                          {optionsFeatures.map((button) => (
                                                 <div key={uuid()} className={button.text === 'Unmatch & Block user' ? css.optionsFeatureBlockUser : css.optionsFeature}>
                                                        {button.photo}
                                                        <Button
                                                               className={button.text === 'Delete chat' ? css.featureBtnRed : css.featureBtn}
                                                        >
                                                               {button.text}
                                                        </Button>
                                                 </div>
                                          ))}
                                   </div>}
                            </div>

                     </div>
              </div>
       );
};
