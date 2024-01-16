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
import { SupportPageLayout } from './Layouts/SupportPageLayout';
import {
  AccountSection,
  Faq,
  PaymentSection,
  VideoSection,
  SafetySection,
} from './pages/Faq';
import { RequestPage } from './pages/RequestPage';

export const App = () => {
  const { pathname } = useLocation();

  const locationForBackSection =
    pathname == '/login' ||
    pathname == '/registration' ||
    pathname == '/reset_password';

  return (
    <div>
      {/* <ModalWelcome /> */}
      {/* <Messanger /> */}

      {/* <ChangePassword /> */}

      {locationForBackSection ? (
        <BackSection>
          <Routes>
            <Route path='/login' element={<ModalAuth />} />
            <Route path='/registration' element={<ModalRegister />} />
            <Route path='/reset_password' element={<ResetPassword />} />
          </Routes>
        </BackSection>
      ) : (
        <Routes>
          <Route path='/verification' element={<VerificationPage />} />
          <Route path='/create-profile' element={<Questionnaire />} />
          <Route element={<MainLayout />}>
            <Route path='/support' element={<SupportPageLayout />}>
              <Route path='faq' element={<Faq />}>
                <Route path='account' element={<AccountSection />} />
                <Route path='payment' element={<PaymentSection />} />
                <Route path='safety' element={<SafetySection />} />
                <Route path='video' element={<VideoSection />} />
              </Route>
              <Route path='request' element={<RequestPage />} />
            </Route>
            <Route path='/self' element={<UserSelfPage />} />
            {/* <Route path="messanger" element={<Messanger />} /> */}
            <Route path='/for-you' element={null} />
            <Route path='/search' element={null} />
            <Route path='/settings' element={null} />
            <Route path='/calendar' element={null} />
            <Route path='/favorites' element={null} />
            {/* <Route path='/support' element={null} /> */}
            <Route path='/safety' element={null} />
          </Route>
        </Routes>
      )}
    </div>
  );
};
