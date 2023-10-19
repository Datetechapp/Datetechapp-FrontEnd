import { FC } from 'react';
import { ModalCommon } from 'components/common';

interface ModalPasswordChangedProps {
  isOpenModalChangedPassword: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalPasswordChanged: FC<ModalPasswordChangedProps> = ({
  isOpenModalChangedPassword,
  onChange,
}) => {
  return (
    <ModalCommon
      isOpenModalChangedPassword={isOpenModalChangedPassword}
      textTitle="Password changed"
      textSubtitle="Your password has been successfully changed"
      buttonText="OK"
      onChangeModalPasswordChanged={onChange}
    />
  );
};
