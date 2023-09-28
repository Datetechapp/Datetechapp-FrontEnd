import "../SupportChatMessage/SupportChatMessage.css"
import check from '../../../../../assets/Support/CheckedMessage.svg'
import supImg from '../../../../../assets/Support/SupportServ.svg'
interface SupportChatMessageType {
    sender?: string,
    pic?: string,
    content: string,
    time: string,
    checked: boolean,

}
export const SupportChatMessage = ({sender, content, time, checked, pic}:SupportChatMessageType) =>{
    const sup = sender === "support"
    return(
        <>
        {sup?( <div className="SupportChatMessage_Wrapper1">
            <img className="SupportChatMessage_img" src={supImg} alt="support"/>
            <div className="SupportChatMessage_support">
               <p>{content}</p> 
           <div className="SupportChatMessage_time">
                <span>{time}</span>
           </div>  
            </div>
          
           

        </div>):(<div className="SupportChatMessage_Wrapper">
           <p>{content}</p> 
           <div className="SupportChatMessage_time">
                <span>{time}</span>
                <img src={check} alt={check}/>
           </div>
           

        </div>)}
    </>   
    )
}