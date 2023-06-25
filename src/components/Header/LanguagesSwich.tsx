import './LanguagesSwich.css'
type Language = {
    key: number
    lang: string
}
interface LanguagesSwichType {
    language: Language[],
    nameClass: string,
}

export const LanguagesSwich = ({ language, nameClass}:LanguagesSwichType) =>{
    const lang = language.map(item=><li key={item.key}>{item.lang}</li>)
    return(
        <div className={`Languages ${nameClass}`}>
            <div>
               <ul >{lang}</ul>   
            </div>
        </div>
        
    )
}