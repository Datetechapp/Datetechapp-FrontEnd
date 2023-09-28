import { SupportChatHeader } from "./SupportChatHeader/SupportChatHeader";
import { SupportChatList } from "./SupportChatList/SupportChatList";
import { SupportChatMessageInput } from "./SupportChatMessageInput/SupportChatMessageInput";
export const SupportChat = () => {
    return(
        <div>
            <SupportChatHeader/>
            <SupportChatList/>
            <SupportChatMessageInput/>
        </div>
   
    )
}