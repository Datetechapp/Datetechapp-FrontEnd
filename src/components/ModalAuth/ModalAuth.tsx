import logo from "../../assets/ModalAuth/logo.svg"
import css from "./modalAuth.module.css"
import appstore from "../../assets/ModalAuth/appStore.svg"
import googlePlay from "../../assets/ModalAuth/googlePlay.svg"
import { Login } from "../Login/Login"
import { ReactComponent as GoogleIcon } from "../../assets/ModalAuth/googleIcon.svg"
import { ReactComponent as FacebookIcon } from "../../assets/ModalAuth/facebookIcon.svg"
import { ReactComponent as AppleIcon } from "../../assets/ModalAuth/appleIcon.svg"

const arrLogo = [
       <FacebookIcon className={css.facebookIcon} />,
       <GoogleIcon className={css.googleIcon} />,
       <AppleIcon className={css.appleIcon} />
]

export const ModalAuth = () => {
       return (
              <div className={css.modalAuth}>
                     <div className={css.leftHalfAuth}>
                            <img className={css.logo} src={logo} alt="logo" />
                            <div>
                                   <p className={css.tagline}>Find someone who will give you new <span className={css.lastWords}>emotions</span>!</p>
                                   <p className={css.downloadText}>Download the app</p>
                                   <div className={css.downloadLinks}>
                                          <a><img src={appstore} alt="appstore" /></a>
                                          <a><img src={googlePlay} alt="googlePlay" /></a>
                                   </div>
                                   <p className={css.messagePrivacy}>
                                          By signing up, you agree to our Terms and Conditions. Learn how we use your data in our <a href="#" className={css.privacyPolicy}>
                                                 Privacy Policy.
                                          </a>
                                   </p>
                            </div>
                     </div>
                     <div className={css.rightHalfAuth}>
                            <h2 className={css.messageLogIn}>
                                   Log in to your account with E-mail or Phone number
                            </h2>
                            <Login />
                            <p className={css.continueWith}>Continue with</p>
                            <ul className={css.logoList}>
                                   {arrLogo.map((logo, index) =>
                                          <li key={index}>
                                                 <a>{logo}</a>
                                          </li>
                                   )}
                            </ul>
                     </div>
              </div>
       )
}