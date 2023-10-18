import { ModalBase } from "components/base/ModalBase/ModalBase"
import phone from "../../assets/ModalAuth/Phone.svg"

export const ModalVrificationPhoneNumb = () =>{

    return(
        <ModalBase height="300px" width="396px" image={phone} text="Verification code sent to" highlight="+19513669054"/>    
    )
}