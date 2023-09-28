import './LanguageSelect.css'
import '../LanguagesSwich.css'
import { LanguagesSwich } from '../LanguagesSwich'
import { languages } from '../language'
import { useState } from 'react'

export const LanguageSelect = () => {

    const [activeVisible, setactiveVisible] = useState<string>('')
    const [activeNoVisible, setActiveNoVisible] = useState<string>('No-visible')
    const [activeArrow, setActiveArrow] = useState<string>('')
    const startLang = languages.filter(item => item.key === 1).map(item => item.lang).join()
    const [selectLang, setselectLang] = useState<string>(startLang)

    return (
        <div onClick={() => {
            if (!activeVisible) {
                setactiveVisible('Visible')
                setActiveNoVisible('')
                setActiveArrow('active')

            } else {
                setactiveVisible('')
                setActiveArrow('')
                setTimeout(() => {
                    setActiveNoVisible('No-visible')
                }, 1000);
            }

        }} className="LanguageSelect">
            <p>{selectLang}</p>
            <div className={`LanguageSelect__Arrow ${activeArrow}`}></div>
            <LanguagesSwich ChangeLang={setselectLang} nameClass={activeVisible || activeNoVisible} language={languages} />
        </div>

    )
}