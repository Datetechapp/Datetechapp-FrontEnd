import React from "react"
import { ModalAuth } from "./ModalAuth/ModalAuth";
import { ModalWelcome } from "./ModalWelcome/ModalWelcome";

export const App = () => {
  return <div>
    <ModalAuth />
    <ModalWelcome/>
  </div>;
};

