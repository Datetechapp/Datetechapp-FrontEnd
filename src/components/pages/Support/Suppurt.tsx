import { FC } from "react";
import "../Support/Support.css"
import { useState, useEffect } from 'react'
import { SupportCheckbox } from "./Chat/SupportCheckbox/SupportCheckbox";
import { SearchElem } from "components/common/search/Search";
import { Hightlight } from "components/common/highlight/Highlight";
import { supportQuestion } from "./supportQuestion";
type Arr = {
    question: string,
    answer: string,
    active: boolean
}

export const Support :FC = () => {

    const [activeSearch, setSearch] = useState<string>('')
    const [activelist, setList] = useState<Arr[]>(supportQuestion)

    const OpenAnswer = (item:Arr) =>{
      const newArr = [...activelist];
      const openedAnswer = newArr.find((x)=>x.question === item.question);
      if(openedAnswer !== undefined){
        if(openedAnswer.active === true){
          openedAnswer.active = false;
        }else{
          openedAnswer.active = true;
        } 
      }   
      setList(newArr)
    }

    const list = activelist.map((item, index)=> <li key={index} className={`Support_list  ${item.active?"active":""}`} onClick={()=>OpenAnswer(item)}><Hightlight str={item.question} filter={activeSearch}/><div className="Support_list_arrow"><div className={`Support_list_text ${item.active?"active1":''}`}>
    {item.answer}</div><span></span><span></span></div></li>) 

    const searchQuestion= (searchItem:string, list:Arr[]) =>{
        if(!searchItem){
            return list
        }
        return list.filter((item:Arr)=>item.question.toLowerCase().includes(searchItem.toLowerCase()))
    }
    useEffect(()=>{
        const filterList = searchQuestion(activeSearch, supportQuestion)
        setList(filterList)
    },[activeSearch])

    return(
        <div className="Support_Wrapper">
            <div className="Support_Wrapper_Header">
                <SearchElem className="Support_Search" onChange={(e)=>setSearch(e.target.value)}/>
                <SupportCheckbox/>
            </div>
            <div className="Support__general">
                <h2>faq</h2>
                <ul>
                    {list}                    
                </ul>
            </div>

        </div>
    )
}