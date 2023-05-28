import appstore from "../../../assets/ModalAuth/appStore.svg"
import googlePlay from "../../../assets/ModalAuth/googlePlay.svg"
import logo from "../../../assets/ModalAuth/logo.svg"
import css from "./leftHalfAuth.module.css"

export const LeftHalfAuth = () => {
       return (
              <div>
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
       )
}