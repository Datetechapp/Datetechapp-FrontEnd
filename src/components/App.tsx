
import React from "react";
import { ModalCongratulations } from "./ModalWindAuth/ModalCongratulations";
import { Routes, Route } from "react-router-dom"
import { BackSection } from "./BackSection/BackSection";

export const App = () => {
  return <div>

    {/* <ModalWelcome /> */}

    <BackSection >
    <ModalCongratulations/>
    </BackSection>

  </div>;
};