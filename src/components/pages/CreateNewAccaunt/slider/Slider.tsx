import { useState, FC } from 'react';
import { Switch } from 'antd';
import css from "./slider.module.css"

interface SliderProps {
       onToggle: (enabled: boolean) => void;
}

export const Slider: FC<SliderProps> = ({ onToggle }) => {
       const [enabled, setEnabled] = useState(false);

       const handleToggle = (checked: boolean) => {
              setEnabled(checked);
              onToggle(checked);
       };

       return (
              <div className={enabled ? css.blockSwitchOn : css.blockSwitchOff}>
                     <span className={enabled ? css.switchOnText : css.switchOffText}>Turn on your geolocation</span>
                     <Switch
                            className={enabled ? css.switchOn : css.switchOff}
                            checked={enabled}
                            onChange={handleToggle}
                     />

              </div>
       );
};
