import { ModalAuth } from "./ModalAuth";
import { ModalRegister } from "./pages/ModalRegister";
import { CreateNewAccount } from "./pages/CreateNewAccaunt";
import { Routes, Route } from "react-router-dom"
import { ModalWelcome } from "./base/ModalWelcome/ModalWelcome";
import { BackSection } from "./BackSection/BackSection";
import { ModalInvalidFormat } from "./ModalAuth/ModalInvalidFormat/modalInvalidFormat"
import { ModalRestrictedRegistration } from "./ModalAuth/ModalRestrictedRegistration/modalRestrictedRegistration";

export const App = () => {
	return <div>
		{/* <ModalWelcome /> */}
		{<ModalInvalidFormat />}
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
