import { ModalAuth } from './ModalAuth';
import { ModalRegister, ResetPassword } from './pages/ModalRegister';
import { Routes, Route } from 'react-router-dom';
import { BackSection } from './BackSection/BackSection';
import { MainLayout } from './Layouts/MainLayout/MainLayout';
import { useLocation } from 'react-router-dom';
import { VerificationPage } from './pages/ModalRegister/VerificationPage';
import { Questionnaire } from './pages/Questionnaire';
import { SupportPageLayout } from './Layouts/SupportPageLayout';
import {
  AccountSection,
  Faq,
  PaymentSection,
  VideoSection,
  SafetySection,
} from './pages/Faq';
import { RequestPage } from './pages/RequestPage';
import { PaymentPageLayout } from './Layouts/PaymentPageLayout';
import { PaymentSubscription } from './Layouts/PaymentPageLayout/components/PaymentSubscription';
import { PaymentHistory } from './Layouts/PaymentPageLayout/components/PaymentHistory';
import { MessangerLayout } from './Layouts/MessangerLayout';
import { Messanger } from './Messanger';

export const App = () => {
  const { pathname } = useLocation();

  const locationForBackSection =
    pathname == '/login' ||
    pathname == '/registration' ||
    pathname == '/reset_password';

  return (
    <div>
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
            <Route path="subscription" element={<PaymentSubscription />} />
            <Route path="history" element={<PaymentHistory />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};
