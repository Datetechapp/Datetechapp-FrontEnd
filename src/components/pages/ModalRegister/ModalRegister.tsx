import { Link } from "react-router-dom"
import { LeftHalfAuth } from "../../ModalAuth/LeftHalfAuth"
import css from "./modalRegister.module.css"
import { Registration } from "./Registration"

export const ModalRegister = () => {
       return (
              <div className={css.modalRegistration}>
                     <div className={css.leftHalfAuth}>
                            <LeftHalfAuth />
                     </div>
                     <div className={css.rightHalfAuth}>
                            <Registration />
                            
                     </div>
              </div>
       )
}