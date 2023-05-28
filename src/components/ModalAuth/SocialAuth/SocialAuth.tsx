import css from "./socialAuth.module.css"
import { ReactComponent as GoogleIcon } from "../../../assets/ModalAuth/googleIcon.svg"
import { ReactComponent as FacebookIcon } from "../../../assets/ModalAuth/facebookIcon.svg"
import { ReactComponent as AppleIcon } from "../../../assets/ModalAuth/appleIcon.svg"



const arrLogo = [
       <FacebookIcon className={css.facebookIcon} />,
       <GoogleIcon className={css.googleIcon} />,
       <AppleIcon className={css.appleIcon} />
]
export const SocialAuth = () => {
       return (
              <div>
                     <p className={css.continueWith}>Continue with</p>
                     <ul className={css.logoList}>
                            {arrLogo.map((logo, index) =>
                                   <li key={index}>
                                          <a>{logo}</a>
                                   </li>
                            )}
                     </ul>
              </div>
       )
}