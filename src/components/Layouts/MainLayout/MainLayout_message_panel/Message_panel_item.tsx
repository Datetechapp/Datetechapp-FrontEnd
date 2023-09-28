import { Hightlight } from "components/common/highlight/Highlight";

export type ProfilesData = {
    image: string,
    name: string,
    online: boolean,
    date: string,
    text: string,
}
interface MessagePanelItemType {
    profileArrow: ProfilesData[],
    filter?: string
}

export const MessagePanelItem = ({profileArrow, filter}:MessagePanelItemType) => {
    const textCut = (text:string) => {
    var sliced = text.slice(0,21);
        if (sliced.length < text.length) {
        sliced += '...';
         
        }
       return sliced
    }

    return(
        <>
        {profileArrow.map(item=> {return(
           <div className="Message-panel-item_wrapper">
            <img src={item.image} alt="profile_image"/>
            <div className="Message-panel-item_countainer">
                <div className="Message-panel-item_countainer_name"><h5>{item.name}</h5><p>{item.date}</p></div>
                <div className="Message-panel-item_countainer_text"><p><Hightlight str={textCut(item.text)} filter={filter}/></p><span></span></div>  
            </div>
            
        </div>  
        )})}
    </>   
    )
}