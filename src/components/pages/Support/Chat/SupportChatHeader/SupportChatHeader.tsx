import support_serv from '../../../../../assets/Support/SupportServ.svg'
import { SupportCheckbox } from '../SupportCheckbox/SupportCheckbox';
import "../SupportChatHeader/SupportChatHeader.css"
export const SupportChatHeader = () =>{
    return(
        <div className="ChatHeader__Wrapper">
            
            <div className="ChatHeader__Wrapper_SupportServ">
                <img src={support_serv} alt={support_serv}/>
                <p>Support Service</p>
                <p></p>
            </div>
            <SupportCheckbox/>
        </div>
    )
}