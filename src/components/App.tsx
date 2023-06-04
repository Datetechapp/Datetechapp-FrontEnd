import React from "react"
import { ModalAuth } from "./ModalAuth";
import { ModalRegister } from "./pages/ModalRegister";

import { Routes, Route } from "react-router-dom"


export const App = () => {
  return <div>
    <Routes>
      <Route path="/auth" element={<ModalAuth />} />
      <Route path="/registration" element={< ModalRegister/>} />

    </Routes>

  </div>;
};

