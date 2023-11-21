import PropsWithChildren from 'react';
import './ModalWindAuth.css';
import { ModalBase } from 'components/base/ModalBase/ModalBase';

interface ModalWindAuthProps {
  title?: string;
  image?: string;
  text?: string;
  highlight?: string;
}
export function ModalWindAuth({
  title,
  image,
  text,
  highlight,
}: ModalWindAuthProps) {
  const styleModalWindAuth = {
    margin: title ? '30px auto' : '76.67px auto 56px',
  };

  return (
    <ModalBase height="300px" width="396px">
      {/* <div className="ModalWindAuth-Wraper"> */}
      <h3 className="ModalWindAuth_title">{title}</h3>
      <img
        style={styleModalWindAuth}
        className="ModalWindAuth_img"
        src={image}
        alt={image}
      />
      <p className="ModalWindAuth_text">
        {text} <span>{highlight}</span>
      </p>
      {/* </div> */}
    </ModalBase>
  );
}
