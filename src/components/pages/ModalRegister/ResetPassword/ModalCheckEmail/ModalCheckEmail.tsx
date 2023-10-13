import { FC } from "react"
import { ModalCommon } from 'components/common';

interface ModalCheckEmailProps {
       isOpenModalCheckEmail: boolean;
       onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCheckEmail: FC<ModalCheckEmailProps> = ({ onChange, isOpenModalCheckEmail }) => {

       return (
              <ModalCommon
                     isOpenModalCheckEmail={isOpenModalCheckEmail}
                     textTitle='Check your email'
                     textSubtitle='Password recovery instructions have been sent to your email address'
                     textEmail='name.surname@gmail.com'
                     buttonText="Ok, got it!"
                     onChangeModalCheckEmail={onChange}
              />
       )
}