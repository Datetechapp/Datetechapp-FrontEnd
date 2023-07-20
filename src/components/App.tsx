import React from "react"
import { ModalAuth } from "./ModalAuth/ModalAuth";
// import { ModalRegister } from "./pages/ModalRegister";
import { BackSection } from "./BackSection/BackSection";
import { Routes, Route } from "react-router-dom"


export const App = () => {
  return <div>
   <BackSection>
      <ModalAuth/>
   </BackSection>

  </div>;
};
