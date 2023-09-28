import "../SupportChatMessageInput/SupportChatMessageInput.css"
import emoji from '../../../../../assets/Support/face-smile.svg'
import microphone from '../../../../../assets/Support/Microphone.svg'
import stape from '../../../../../assets/Support/Stape.svg'

export const SupportChatMessageInput = () =>{
    return(
        <div className="SupportChatMessageInput__Wrapper">
            <div className="SupportChatMessageInput__PanelInput">
                <img src={emoji} alt={emoji}/>
                <input placeholder="Message"/>
                <img src={microphone} alt={microphone}/>
                <img src={stape} alt={stape}/>
            </div>
        </div>
    )
}