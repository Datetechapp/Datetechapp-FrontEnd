import { ModalBase } from 'components/base/ModalBase/ModalBase';
import check from '../../assets/ModalAuth/CheckMark.svg';

export function ModalCongratulations() {
  return (
    <ModalBase
      height="300px"
      width="396px"
      title="Congratulations!"
      image={check}
      text="We are glad to see you in the club"
      highlight="DateUpp"
    >
      !
    </ModalBase>
  );
}
