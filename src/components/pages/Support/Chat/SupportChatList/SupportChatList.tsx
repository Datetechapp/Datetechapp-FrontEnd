import "./SupportChatList.css"
import { SupportChatMessage } from "../SupportChatMessage/SupportChatMessage"

const arrChat =[
 {
    sender: "Lorem",
    pic: "",
    content: "Lorem ipsum dolor ", 
    time: "20:42",
    checked: true
},
{
    sender: "support",
    pic: "",
    content: "Lorem ipsum dolor sit amet conse adipisicing elit.",
    time: "20:42",
    checked: true
},
{
    sender: "Lorem",
    pic: "",
    content: "Lorem ipsum dolor sit amet conse adipisicing elit.",
    time: "20:42",
    checked: true
}
]
export const SupportChatList = () =>{
    return(
        <div className="SupportChatList_Wrapper">
            {/* <p>Here you can submit a support request. Describe your problem in detail and, if necessary, attach screenshots or attachments.</p> */}
        {arrChat.map((item, index)=><SupportChatMessage key={index} content={item.content} time={item.time} checked = {item.checked} sender={item.sender}/>)}
        </div>
    )
}