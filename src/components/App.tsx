import { ModalAuth } from "./ModalAuth";
import { ModalRegister } from "./pages/ModalRegister";
import { CreateNewAccount } from "./pages/CreateNewAccaunt";
import { Routes, Route } from "react-router-dom"
import { ModalWelcome } from "./base/ModalWelcome/ModalWelcome";
import { BackSection } from "./BackSection/BackSection";
import { ModalWindow } from "./ModalWindowPE/ModalWindow";
import { ModalWindow2 } from "./ModalWindowPE_2/modalwindow2";

export const App = () => {
	return <div>
		{<ModalWindow2 />}
		{/* <ModalWelcome /> */}
		{/* 
    <BackSection >
      <Routes>
        <Route path="/" element={<CreateNewAccount />} />
        <Route path="/auth" element={<ModalAuth />} />
        <Route path="/registration" element={< ModalRegister />} />
      </Routes>
    </BackSection> */}

	</div>;
};
