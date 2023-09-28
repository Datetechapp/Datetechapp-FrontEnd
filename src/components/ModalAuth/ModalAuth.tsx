import css from "./modalAuth.module.css"
import { Login } from "./Login"
import { LeftHalfAuth } from "./LeftHalfAuth"


export const ModalAuth = () => {
       return (
              <div className={css.modalAuth}>
                     <div className={css.leftHalfAuth}>
                            <LeftHalfAuth />
                     </div>
                     <div className={css.rightHalfAuth}>
                            <Login />
                     </div>
              </div>
       )
}