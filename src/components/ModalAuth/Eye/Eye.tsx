import { FC } from "react"
import { ReactComponent as OpenEye } from "../../../assets/ModalAuth/openEye.svg"
import { ReactComponent as CloseEye } from "../../../assets/ModalAuth/closeEye.svg"
import css from "./eye.module.css";

interface EyeProps {
       showPassword: boolean;
       onVisiblePassword: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
       isFocused: boolean;
       errorMessage: string;
};

export const Eye: FC<EyeProps> = ({ showPassword, onVisiblePassword, isFocused, errorMessage }) => {
       return (
              <span className={css.passwordToggle} onMouseDown={onVisiblePassword}>
                     {!showPassword ? (
                            <OpenEye
                                   className={!isFocused && !errorMessage ? css.openEye : errorMessage ? css.openEyeError : css.openEyeFocused}
                            />
                     ) : (
                            <CloseEye
                                   className={!isFocused && !errorMessage ? css.closeEye : errorMessage ? css.closeEyeError : css.closeEyeFocused}
                            />
                     )}
              </span>
       );
};