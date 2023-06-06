import React from "react"
import { ModalAuth } from "./ModalAuth/ModalAuth";
import { ModalWelcome } from "./ModalWelcome/ModalWelcome";
import { ModalWindAuth } from "./ModalWindAuth/ModalWindAuth";
import img from "../assets/ModalAuth/questionSign.svg"
export const App = () => {
  return <div>
    <ModalAuth />
    <ModalWelcome/>
    <ModalWindAuth  image={img} text="We are glad to see you in the club" highlight="DateUpp"/>
  </div>;
};

