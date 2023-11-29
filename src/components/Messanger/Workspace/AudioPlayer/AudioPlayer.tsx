import React, { useState, useEffect, useRef, FC } from 'react';
import css from './audioPlayer.module.css';
import { ReactComponent as FirstSpeed } from '../../../../assets/AudioPlayer/firstSpeed.svg';
import { ReactComponent as SecondSpeed } from '../../../../assets/AudioPlayer/secondSpeed.svg';
import { ReactComponent as ThirdSpeed } from '../../../../assets/AudioPlayer/thirdSpeed.svg';
import { ReactComponent as FastFowardAudio } from '../../../../assets/AudioPlayer/FastForwardAudio.svg';
import { ReactComponent as RewindAudio } from '../../../../assets/AudioPlayer/RewindAudio.svg';
import { ReactComponent as PlayIcon } from '../../../../assets/AudioPlayer/PlayIcon.svg';
import { ReactComponent as PauseIcon } from '../../../../assets/AudioPlayer/PauseIcon.svg';
import { ReactComponent as VolumeIcon } from '../../../../assets/AudioPlayer/VolumeAudio.svg';
import { ReactComponent as MuteIcon } from '../../../../assets/AudioPlayer/MuteIcon.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/AudioPlayer/closeIcon.svg';

// interface AudioPlayesProps {
//        audioRef: HTMLAudioElement;
// }


export const AudioPlayer = () => {

       const [speed, setSpeed] = useState<number>(1);
       const [isHovered, setIsHovered] = useState(false);
       const [isVolumeBlockHovered, setIsVolumeBlockHovered] = useState(false);
       const [volume, setVolume] = useState(0.5);

       const volumeRef = useRef<HTMLInputElement | null>(null);

       useEffect(() => {
              const rangeInput = volumeRef.current as HTMLInputElement;

              if (rangeInput) {
                     rangeInput.style.setProperty('--thumb-percentage', `${volume * 100}%`);
              }
       }, [volume, isVolumeBlockHovered, isHovered]);

       // useEffect(() => {
       //        if (audioRef.current) {
       //               audioRef.current.volume = volume;
       //        }
       // }, [volume]);

       const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
              const newVolume = parseFloat(event.target.value);

              setVolume(newVolume);

              // if (audioRef.current) {
              //        audioRef.current.volume = newVolume;
              // }
       };

       const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const value = parseFloat(e.target.value);

              if (!isNaN(value)) {
                     const thumbPositionPercentage =
                            ((value - parseFloat(e.target.min)) /
                                   (parseFloat(e.target.max) - parseFloat(e.target.min))) *
                            100;

                     e.target.style.setProperty(
                            '--thumb-percentage',
                            `${thumbPositionPercentage}%`,
                     );
              }
       };

       return (
              <div className={css.audioPlayerWrapper}>
                     <div className={css.scrollBarBlock}>
                            <RewindAudio />
                            <PlayIcon />
                            <FastFowardAudio />
                     </div>
                     <div>
                            <p className={css.name}>Michael</p>
                            <p className={css.voiceMessage}>Voice Message</p>
                     </div>
                     <div className={css.audioSettings} >
                            {speed === 1 ? <FirstSpeed onClick={() => setSpeed(2)} />
                                   : speed === 2 ? <SecondSpeed onClick={() => setSpeed(3)} />
                                          : <ThirdSpeed onClick={() => setSpeed(1)} />
                            }

                            {volume ?
                                   <VolumeIcon
                                          onMouseEnter={() => setIsHovered(true)}
                                          onMouseLeave={() => {
                                                 setTimeout(() => setIsHovered(false), 500);
                                          }}
                                          onClick={() => setVolume(0)}
                                   />
                                   :
                                   <MuteIcon
                                          onMouseEnter={() => setIsHovered(true)}
                                          onMouseLeave={() => {
                                                 setTimeout(() => setIsHovered(false), 500);
                                          }}
                                          onClick={() => setVolume(1)}
                                   />
                            }
                            <CloseIcon />
                            {(isHovered || isVolumeBlockHovered) && (
                                   <div
                                          className={css.volumeBlock}
                                          onMouseEnter={() => setIsVolumeBlockHovered(true)}
                                          onMouseLeave={() => setIsVolumeBlockHovered(false)}
                                   >
                                          <input
                                                 ref={volumeRef}
                                                 className={css.editorVolume}
                                                 type="range"
                                                 min="0"
                                                 max="1"
                                                 step="0.01"
                                                 value={volume}
                                                 onChange={(e) => {
                                                        handleVolumeChange(e);
                                                        handleRangeChange(e);
                                                 }}
                                          />
                                   </div>
                            )}
                     </div>
              </div>
       );
};