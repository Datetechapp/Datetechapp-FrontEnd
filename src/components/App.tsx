import { ModalAuth } from './ModalAuth';
import { ModalRegister, ResetPassword } from './pages/ModalRegister';
import { Routes, Route } from 'react-router-dom';
import { ModalWelcome } from './base/ModalWelcome/ModalWelcome';
import { BackSection } from './BackSection/BackSection';
import { MainLayout } from './Layouts/MainLayout/MainLayout';
import { UserSelfPage } from './pages/UserSelfPage';
import { Messanger } from '../components/Messanger';
import { useLocation } from 'react-router-dom';
import { HeaderSecondary } from './HeaderSecondary';
import { ChangePassword } from './pages/ChangePassword';
import { VerificationPage } from './pages/ModalRegister/VerificationPage';
import { Questionnaire } from './pages/Questionnaire';
import { RecordingAudio } from './Messanger/Footer/RecordingAudio/RecordingAudio';


export const App = () => {

  const { pathname } = useLocation();

  const locationForBackSection = (pathname == '/login' || pathname == '/registration' || pathname == '/reset_password');
  
  return (
    <div>
      {/* <ModalWelcome /> */}
      {/* <Messanger /> */}

      {/* <ChangePassword /> */}

      {locationForBackSection ? <BackSection >
        <Routes>
          <Route path="/login" element={<ModalAuth />} />
          <Route path="/registration" element={< ModalRegister />} />
          <Route path="/reset_password" element={<ResetPassword />} />
        </Routes>
      </BackSection> :
        <Routes>
          <Route path='/verification' element={ <VerificationPage />} />
          <Route path="/create-profile" element={<Questionnaire />} />
          <Route path="/feed" element={<MainLayout />}>
            <Route path="self" element={<UserSelfPage />} />
            {/* <Route path="messanger" element={<Messanger />} /> */}
            <Route path="forYou" element={null} />
            <Route path="search" element={null}/>
            <Route path="settings" element={null} />
            <Route path="calendar" element={null} />
            <Route path="favorites" element={null} />
            <Route path="support" element={null} />
            <Route path="safety" element={null} />
          </Route>
        </Routes>
      }
    </div >);
};
