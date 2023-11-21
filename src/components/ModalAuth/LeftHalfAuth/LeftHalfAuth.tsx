import appstore from '../../../assets/ModalAuth/appStore.svg';
import googlePlay from '../../../assets/ModalAuth/googlePlay.svg';
import logo from '../../../assets/ModalAuth/logo.svg';
import css from './leftHalfAuth.module.css';

export function LeftHalfAuth() {
  return (
    <div>
      <img className={css.logo} src={logo} alt="logo" />
      <div>
        <p className={css.tagline}>
          Find someone who will give <br /> you new{' '}
          <span className={css.lastWord}>emotions</span>!
        </p>
        <p className={css.downloadText}>Download the app</p>
        <div className={css.downloadLinks}>
          <a>
            <img src={appstore} alt="appstore" />
          </a>
          <a>
            <img src={googlePlay} alt="googlePlay" />
          </a>
        </div>
      </div>
    </div>
  );
}
