import { MainLayoutHeader } from 'components/Layouts/MainLayout/MainLayout_Header/MainLayout_header';
import style from './Notification.module.css';
import NotificationList from 'components/ModalNotification/NotificationList/NotificationList';

const NotificationPage = () => {
  return (
    <div className={style.pageContainer}>
      <MainLayoutHeader />
      <section className={style.pageWrapper}>
        <h2 className={style.pageTitle}>Notifications</h2>
        <div className={style.pageBox}>
          <NotificationList />
        </div>
      </section>
    </div>
  );
};

export default NotificationPage;
