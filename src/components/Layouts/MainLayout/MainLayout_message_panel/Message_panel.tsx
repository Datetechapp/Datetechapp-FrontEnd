import "./index.css"
import { SearchElem } from "components/common/search/Search"
import { profilesArrow } from "./profilesArrow"
import { MessagePanelItem } from "./Message_panel_item"
import { useState, useEffect } from 'react'
import { ProfilesData } from "./Message_panel_item"
export const MessagePanel = () => {
    const [activeSearch, setSearch] = useState<string>('')
    const [activelist, setList] = useState<ProfilesData[]>(profilesArrow)
    const searchQuestion= (searchItem:string, list:ProfilesData[]) =>{
        if(!searchItem){
            return list
        }
        return list.filter((item:ProfilesData)=>item.text.toLowerCase().includes(searchItem.toLowerCase()))
    }
    useEffect(()=>{
        const filterList = searchQuestion(activeSearch, profilesArrow)
        setList(filterList)
    },[activeSearch])
    return(
        <div className="Message-panel_wrapper">
            <div className="Message-panel_switch">
                <p className="Message-panel__switch_mess">Messages<span></span></p><p className="Message-panel__switch_matc">Matches<span></span></p>
                
            </div>
            <SearchElem className="Message-panel_search" onChange={(e)=>setSearch(e.target.value)}/>
            <div>
                <MessagePanelItem profileArrow={activelist} filter={activeSearch}/>
            </div>
        </div>
    )
}