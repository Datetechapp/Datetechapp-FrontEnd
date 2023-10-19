import { Routes, Route, useLocation } from 'react-router-dom';
import { ModalAuth } from './ModalAuth';
import { ModalRegister, ResetPassword } from './pages/ModalRegister';
import { ModalWelcome } from './base/ModalWelcome/ModalWelcome';
import { BackSection } from './BackSection/BackSection';
import { MainLayout } from './Layouts/MainLayout/MainLayout';
import { UserSelfPage } from './pages/UserSelfPage';
import { Messanger } from '../components/Messanger';
import { ModalCheckEmail } from './pages/ModalRegister/ResetPassword/ModalCheckEmail/ModalCheckEmail';
import { HeaderSecondary } from './HeaderSecondary';
import { ChangePassword } from './pages/ChangePassword';
import { VerificationPage } from './pages/VerificationPage';
import { Questionnaire } from './pages/Questionnaire';

export function App() {
  const { pathname } = useLocation();

  const locationForBackSection =
    pathname == '/create-profile' ||
    pathname == '/login' ||
    pathname == '/registration' ||
    pathname == '/reset_password';

  return (
    <div>
      {/* <ModalWelcome /> */}
      {/* <Messanger /> */}
      {/* <ModalCheckEmail /> */}

      {/* <VerificationPage /> */}
      {/* <ChangePassword /> */}

      {locationForBackSection ? (
        <BackSection>
          <Routes>
            <Route path="/create-profile" element={<Questionnaire />} />
            <Route path="/login" element={<ModalAuth />} />
            <Route path="/registration" element={<ModalRegister />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            {/* <Route path="/messanger" element={<Messanger />} /> */}
          </Routes>
        </BackSection>
      ) : (
        <Routes>
          <Route path="/feed" element={<MainLayout />}>
            <Route path="self" element={<UserSelfPage />} />
            {/* <Route path="messanger" element={<Messanger />} /> */}
            <Route path="forYou" element={null} />
            <Route path="search" element={null} />
            <Route path="settings" element={null} />
            <Route path="calendar" element={null} />
            <Route path="favorites" element={null} />
            <Route path="support" element={null} />
            <Route path="safety" element={null} />
          </Route>
        </Routes>
      )}
    </div>
  );
}
