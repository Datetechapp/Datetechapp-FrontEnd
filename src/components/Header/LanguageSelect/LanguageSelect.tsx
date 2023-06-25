import './LanguageSelect.css'
import '../LanguagesSwich.css'
import { LanguagesSwich } from '../LanguagesSwich'
import { languages } from '../language'
import { useState } from 'react'

export const LanguageSelect = () =>{
    const [activeVisible, setactiveVisible] = useState<string>('')
    const [activeNoVisible, setActiveNoVisible] = useState<string>('No-visible')
    const [activeArrow, setActiveArrow] = useState<string>('')

    return(
       <div onClick={()=>{
        if(!activeVisible){
            setactiveVisible('Visible')
            setActiveNoVisible('')
            setActiveArrow('active')
         
        }else{  
            setactiveVisible('') 
            setActiveArrow('')
            setTimeout(() => {
                setActiveNoVisible('No-visible')  
            }, 1000);
        }
    
        console.log(activeVisible)
        }} className="LanguageSelect">
            <p>English</p>
            <div className={`LanguageSelect__Arrow ${activeArrow}`}></div>
            <LanguagesSwich nameClass={activeVisible|| activeNoVisible}  language={languages}/>
        </div>
       
    )
}