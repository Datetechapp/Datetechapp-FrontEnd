import { Route, Routes, useLocation } from 'react-router-dom';
import { BackSection } from './BackSection/BackSection';
import { MainLayout } from './Layouts/MainLayout/MainLayout';
import { MessangerLayout } from './Layouts/MessangerLayout';
import { PaymentPageLayout } from './Layouts/PaymentPageLayout';
import { PaymentHistory } from './Layouts/PaymentPageLayout/components/PaymentHistory';
import { PaymentSubscription } from './Layouts/PaymentPageLayout/components/PaymentSubscription';
import { SupportPageLayout } from './Layouts/SupportPageLayout';
import { Messanger } from './Messanger';
import { ModalAuth } from './ModalAuth';
import {
  AccountSection,
  Faq,
  PaymentSection,
  SafetySection,
  VideoSection,
} from './pages/Faq';
import { ModalRegister, ResetPassword } from './pages/ModalRegister';
import { VerificationPage } from './pages/ModalRegister/VerificationPage';
import NotificationPage from './pages/NotificationPage/NotificationPage';
import { Questionnaire } from './pages/Questionnaire';
import { RequestPage } from './pages/RequestPage';
import { ProfilePage } from './pages/ProfilePage';

export const App = () => {
  const { pathname } = useLocation();

  const locationForBackSection =
    pathname == '/login' ||
    pathname == '/registration' ||
    pathname == '/reset_password';

  return (
    <>
      {locationForBackSection ? (
        <BackSection>
          <Routes>
            <Route path="/login" element={<ModalAuth />} />
            <Route path="/registration" element={<ModalRegister />} />
            <Route path="/reset_password" element={<ResetPassword />} />
          </Routes>
        </BackSection>
      ) : (
        <Routes>
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/create-profile" element={<Questionnaire />} />
          <Route element={<MessangerLayout />}>
            <Route path="messager/:id?" element={<Messanger />} />
          </Route>
          <Route path="/feed" element={<MainLayout />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/support" element={<SupportPageLayout />}>
            <Route path="faq" element={<Faq />}>
              <Route path="account" element={<AccountSection />} />
              <Route path="payment" element={<PaymentSection />} />
              <Route path="safety" element={<SafetySection />} />
              <Route path="video" element={<VideoSection />} />
            </Route>
            <Route path="request" element={<RequestPage />} />
          </Route>
          <Route path="/payment" element={<PaymentPageLayout />}>
            <Route
              index
              path="subscription"
              element={<PaymentSubscription />}
            />
            <Route path="history" element={<PaymentHistory />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      )}
    </>
  );
};
