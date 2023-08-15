import { ModalAuth } from "./ModalAuth";
import { ModalRegister } from "./pages/ModalRegister";
import { CreateNewAccount } from "./pages/CreateNewAccaunt";
import { Routes, Route } from "react-router-dom"
import { ModalWelcome } from "./base/ModalWelcome/ModalWelcome";
import { BackSection } from "./BackSection/BackSection";
import { MainLayout } from "./Layouts/MainLayout/MainLayout";
import { UserSelfPage } from "./pages/UserSelfPage";

export const App = () => {
  return <div>
    {/* <ModalWelcome /> */}

    {/* <BackSection > */}
      <Routes>
        <Route path="/create-profile" element={<CreateNewAccount />} />
        <Route path="/auth" element={<ModalAuth />} />
        <Route path="/registration" element={< ModalRegister />} />
        <Route path="/feed" element = {<MainLayout />}>
          <Route path="self" element = {<UserSelfPage />} />
          <Route path="forYou" element = {null} />
          <Route path="search" element = {null} />
          <Route path="settings" element = {null} />
          <Route path="calendar" element = {null} />
          <Route path="favorites" element = {null} />
          <Route path="support" element = {null} />
          <Route path="safety" element = {null} />
        </Route>     
      </Routes>
    {/* </BackSection> */}

  </div>;
};
