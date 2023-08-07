import { ModalBase } from "components/base/ModalBase/ModalBase"
import mail from '../../assets/ModalAuth/Mail-rounded.svg'


export const ModalVerificationCode = () =>{

    return(
        <ModalBase height="300px" width="396px" image={mail} text="Verification code sent to e-mail" highlight="IvanovIvan@gmail.com"/>    
    )
}