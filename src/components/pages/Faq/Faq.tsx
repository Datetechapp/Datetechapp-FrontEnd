import { ThemeList } from 'components/Layouts/SupportPageLayout/components';
import { Outlet } from 'react-router-dom';

export function Faq() {
  return (
    <section>
      <ThemeList />
      <div>
        <Outlet />
      </div>
    </section>
  );
}
