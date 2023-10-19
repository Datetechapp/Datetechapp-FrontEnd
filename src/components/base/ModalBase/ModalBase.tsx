import { PropsWithChildren, useState } from 'react';
import './ModalBase.css';
import { Button } from 'antd';
import close from '../../../assets/ModalAuth/btn-close.svg';

interface PropsModalBase {
  height?: string;
  width?: string;
  title?: string;
  image?: any;
  text?: string;
  highlight?: string;
}

export function ModalBase({
  children,
  width,
  height,
  title,
  text,
  image,
  highlight,
}: PropsWithChildren<PropsModalBase>) {
  const styleModalBase = {
    width,
    height,
    backgroundColor: '#FCFCFC',
    overflow: 'hidden',
  };
  const [stateModal, setModal] = useState<boolean>(true);

  const styleModalWindAuth = {
    margin: title ? '30px auto 30px' : '60px auto 40px',
  };

  return (
    <>
      {stateModal ? (
        <div className="ModalBase">
          <div className="ModalBase_block" style={styleModalBase}>
            <div className="block_CloseModal">
              <Button
                className="CloseModal__Btn-close"
                onClick={() => setModal(false)}
              >
                <img className="Btn-close_img" src={close} alt="close" />
              </Button>
            </div>
            <div className="block_elem" />
            <h3 className="ModalWindAuth_title">{title}</h3>
            <img
              style={styleModalWindAuth}
              className="ModalWindAuth_img"
              src={image}
              alt={image}
            />
            <p className="ModalWindAuth_text">
              {text} <span>{highlight}</span>
              {children}
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
